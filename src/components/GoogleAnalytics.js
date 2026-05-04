'use client';
import Script from 'next/script';

export default function GoogleAnalytics() {
    return (
        <Script
            src={`https://www.googletagmanager.com/gtag/js?id=AW-11557520972`}
            strategy="afterInteractive"
            onLoad={() => {
                window.dataLayer = window.dataLayer || [];
                function gtag() { window.dataLayer.push(arguments); }
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', process.env.NEXT_PUBLIC_GTAG_ID);
            }}
        />
    );
}