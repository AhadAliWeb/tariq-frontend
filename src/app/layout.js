import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import AdsPageTracker from "@/components/AdsPageTracker";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Online QuranInstruct",
  description: "Learn Quran Online",
  icons: {
    icon: "/favicon.ico"
  }
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-53FRP5H5');
    `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18136013159"
          strategy="afterInteractive"
        />

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-53FRP5H5"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>

        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18136013159');
          `}
        </Script>


        <AdsPageTracker />
        {children}
      </body>
    </html>
  );
}
