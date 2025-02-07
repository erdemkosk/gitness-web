import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gitness - Keep Your Codebase Fit & Healthy",
  description: "Protect your team against knowledge loss and bus factor risks. Monitor repository health and ensure equal knowledge distribution across your team.",
  keywords: "gitness, bus factor, code health, repository analysis, team knowledge, github actions",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
        color: '#1A1E23'
      }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Gitness - Keep Your Codebase Fit & Healthy",
    description: "Protect your team against knowledge loss and bus factor risks. Monitor repository health and ensure equal knowledge distribution across your team.",
    url: "https://gitness.dev",
    siteName: "Gitness",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gitness - Repository Health Monitor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gitness - Keep Your Codebase Fit & Healthy",
    description: "Protect your team against knowledge loss and bus factor risks. Monitor repository health and ensure equal knowledge distribution across your team.",
    creator: "@erdemkosk",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  authors: [{ name: "Mustafa Erdem Köşk", url: "https://github.com/erdemkosk" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1A1E23" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://gitness.dev" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
