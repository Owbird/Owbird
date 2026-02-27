import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Obed Forkuo ",
  description:
    "Technical founder and systems engineer designing secure infrastructure, developer tooling, and distributed platforms.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://owbird.dev",
    title: "Obed Forkuo ",
    description:
      "Designing secure systems, developer tooling, and distributed platforms for emerging markets.",
    siteName: "Obed Forkuo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obed Forkuo ",
    description:
      "Designing secure systems, developer tooling, and distributed platforms for emerging markets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-QSXV12EN2D"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QSXV12EN2D');
        `}
      </Script>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

