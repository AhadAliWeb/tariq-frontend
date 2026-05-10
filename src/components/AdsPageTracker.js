// 'use client';

// import { useEffect } from 'react';
// import { usePathname } from 'next/navigation';

// export default function AdsPageTracker() {
//     const pathname = usePathname();

//     useEffect(() => {
//         if (typeof window !== "undefined" && window.gtag) {
//             window.gtag('config', 'AW-11557520972', {
//                 page_path: pathname,
//             });
//         }
//     }, [pathname]);

//     useEffect(() => {
//         if (typeof window !== "undefined" && window.gtag) {
//             window.gtag('event', 'page_view', {
//                 page_path: pathname,
//                 page_location: window.location.href,
//             });
//         }
//     }, [pathname]);

//     return null;
// }


'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AdsPageTracker() {
    const pathname = usePathname()

    useEffect(() => {
        // GTM / DataLayer
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            event: 'pageview',
            page: pathname,
        })

        // Meta Pixel
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'PageView')
        }

    }, [pathname])

    return null
}