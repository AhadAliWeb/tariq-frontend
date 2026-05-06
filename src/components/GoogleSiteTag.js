'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AdsPageTracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag('event', 'page_view', {
                page_path: pathname,
                page_location: window.location.href,
            });
        }
    }, [pathname]);

    return null;
}