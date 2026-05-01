// public/sw.js
// Service Worker — handles incoming push events and notification clicks

self.addEventListener("push", (event) => {
    if (!event.data) return;

    let data;
    try {
        data = event.data.json();
    } catch {
        data = {
            title: "New Notification",
            body: event.data.text(),
        };
    }

    const options = {
        body: data.body,
        icon: data.icon || "/icons/icon-192x192.png",
        badge: data.badge || "/icons/badge-72x72.png",
        data: data.data || {},
        // Shows notification even when the app tab is open
        requireInteraction: false,
        // Replaces older lead notifications instead of stacking them
        tag: "new-lead",
        renotify: true,
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener("notificationclick", (event) => {
    event.notification.close();

    const targetUrl = event.notification.data?.url || "/admin/leads";

    event.waitUntil(
        clients
            .matchAll({ type: "window", includeUncontrolled: true })
            .then((windowClients) => {
                // If an admin tab is already open, focus it and navigate
                for (const client of windowClients) {
                    if (client.url.includes(self.location.origin) && "focus" in client) {
                        client.focus();
                        return client.navigate(targetUrl);
                    }
                }
                // Otherwise open a new tab
                if (clients.openWindow) {
                    return clients.openWindow(targetUrl);
                }
            })
    );
});