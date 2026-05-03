'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AdsPageTracker() {
    const pathname = usePathname();

    useEffect(() => {
        window.gtag('config', 'AW-11557520972', {
            page_path: pathname,
        });
    }, [pathname]);

    return null;
}