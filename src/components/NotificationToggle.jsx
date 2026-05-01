"use client";

import { usePushNotifications } from "@/lib/usePushNotifications";

/**
 * NotificationToggle
 *
 * A ready-to-use button you can drop into your admin navbar or settings page.
 * It handles the full subscribe / unsubscribe lifecycle and shows status.
 *
 * Usage:
 *   import NotificationToggle from "@/components/NotificationToggle";
 *   <NotificationToggle />
 */
export default function NotificationToggle() {
    const { isSupported, isSubscribed, isLoading, error, subscribe, unsubscribe } =
        usePushNotifications();

    if (!isSupported) {
        return (
            <span className="text-xs text-gray-400">
                Push notifications not supported in this browser.
            </span>
        );
    }

    return (
        <div className="flex flex-col gap-1">
            <button
                onClick={isSubscribed ? unsubscribe : subscribe}
                disabled={isLoading}
                className={`
                    inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium
                    transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                    ${isSubscribed
                        ? "bg-green-100 text-green-700 hover:bg-red-100 hover:text-red-700"
                        : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700"
                    }
                `}
            >
                {isLoading ? (
                    <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        {isSubscribed ? "Unsubscribing…" : "Subscribing…"}
                    </>
                ) : isSubscribed ? (
                    <>🔔 Notifications On</>
                ) : (
                    <>🔕 Enable Notifications</>
                )}
            </button>

            {error && (
                <p className="text-xs text-red-500">{error}</p>
            )}
        </div>
    );
}
