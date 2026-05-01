"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * usePushNotifications
 *
 * Drop this hook into your admin layout/dashboard to enable
 * push notifications on every device the admin is logged into.
 *
 * Usage:
 *   const { isSupported, isSubscribed, isLoading, error, subscribe, unsubscribe } =
 *     usePushNotifications();
 */
export function usePushNotifications() {
    const [isSupported, setIsSupported] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Check browser support and existing subscription on mount
    useEffect(() => {
        const supported =
            typeof window !== "undefined" &&
            "serviceWorker" in navigator &&
            "PushManager" in window;

        setIsSupported(supported);

        if (!supported) return;

        (async () => {
            try {
                const registration = await navigator.serviceWorker.ready;
                const existing = await registration.pushManager.getSubscription();
                setIsSubscribed(!!existing);
            } catch (err) {
                console.error("Error checking push subscription:", err);
            }
        })();
    }, []);

    const registerServiceWorker = useCallback(async () => {
        const registration = await navigator.serviceWorker.register("/sw.js");
        await navigator.serviceWorker.ready;
        return registration;
    }, []);

    const subscribe = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Request notification permission
            const permission = await Notification.requestPermission();
            if (permission !== "granted") {
                throw new Error("Notification permission denied");
            }

            const registration = await registerServiceWorker();

            // Check if already subscribed
            let subscription = await registration.pushManager.getSubscription();

            if (!subscription) {
                const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
                if (!publicKey) throw new Error("NEXT_PUBLIC_VAPID_PUBLIC_KEY is not set");

                subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array(publicKey),
                });
            }

            // Send subscription to server
            const res = await fetch("/api/push/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(subscription),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to save subscription");
            }

            setIsSubscribed(true);
        } catch (err) {
            setError(err.message);
            console.error("Subscribe error:", err);
        } finally {
            setIsLoading(false);
        }
    }, [registerServiceWorker]);

    const unsubscribe = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const registration = await navigator.serviceWorker.ready;
            const subscription = await registration.pushManager.getSubscription();

            if (subscription) {
                // Remove from server first
                await fetch("/api/push/unsubscribe", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ endpoint: subscription.endpoint }),
                });

                // Then unsubscribe in the browser
                await subscription.unsubscribe();
            }

            setIsSubscribed(false);
        } catch (err) {
            setError(err.message);
            console.error("Unsubscribe error:", err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { isSupported, isSubscribed, isLoading, error, subscribe, unsubscribe };
}

// ── Utility ───────────────────────────────────────────────────────────────────

function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
    const rawData = atob(base64);
    return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}