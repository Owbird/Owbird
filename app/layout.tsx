import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { name } from "@/lib/utils";

const isProduction = process.env.NODE_ENV === "production";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://owbird.dev"),
  title: `${name}`,
  description:
    "Software engineer and systems researcher designing secure infrastructure, developer tooling, and distributed platforms.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://owbird.dev",
    title: `${name}`,
    description:
      "Designing secure systems, developer tooling, and distributed platforms for emerging markets.",
    siteName: name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${name}`,
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
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      {isProduction ? (
        <>
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
        </>
      ) : null}
      <body suppressHydrationWarning>
        {children}
        {isProduction ? <Analytics /> : null}
      </body>
    </html>
  );
}
