import type { Metadata, Route } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlightTracker.info - Free Live Flight Tracker | Real-Time Flight Status & Airport Information",
  description: "Track flights in real-time with FlightTracker.info - your free flight tracker for EasyJet, Ryanair, Jet2, Emirates, British Airways and 1000+ airlines worldwide. Live flight tracker map, terminal information, flight delays, and airport details for Terminal 1, 2, 4, 5.",
  keywords: [
    "flight tracker",
    "live flight tracker",
    "free flight tracker",
    "flight tracker 24",
    "flights radar",
    "live flight tracker map",
    "airport",
    "easyjet flights",
    "jet2 flights",
    "ryanair flight",
    "terminal 5",
    "terminal 4",
    "terminal 1",
    "terminal 2",
    "airport terminal 1",
    "airport terminal 2",
    "ba executive club",
    "swiss airline",
    "japanese airlines",
    "flight tracker spirit",
    "flight tracker emirates",
    "flight tracker indigo",
    "flight tracker easyjet"
  ],
  authors: [{ name: "FlightTracker.info Team" }],
  creator: "FlightTracker.info",
  publisher: "FlightTracker.info",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://flighttracker.info",
    siteName: "FlightTracker.info",
    title: "FlightTracker.info - Free Live Flight Tracker | Real-Time Flight Status",
    description: "Track flights in real-time with FlightTracker.info. Free flight tracker for EasyJet, Ryanair, Jet2, Emirates, British Airways and 1000+ airlines worldwide. Live flight map and terminal information.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FlightTracker.info - Live Flight Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlightTracker.info - Free Live Flight Tracker",
    description: "Track flights in real-time. Free flight tracker for EasyJet, Ryanair, Jet2, Emirates, BA and more. Live flight map and terminal info.",
    images: ["/og-image.jpg"],
    creator: "@flighttracker",
  },
  alternates: {
    canonical: "https://flighttracker.info",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0284c7" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "FlightTracker.info",
              "url": "https://flighttracker.info",
              "description": "Free live flight tracker with real-time flight status for 1000+ airlines worldwide",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://flighttracker.info/?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
