import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { name } from "@/lib/utils";

export const metadata: Metadata = {
  title: `${name} `,
  description:
    "Technical founder and systems engineer designing secure infrastructure, developer tooling, and distributed platforms.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://owbird.dev",
    title: `${name} `,
    description:
      "Designing secure systems, developer tooling, and distributed platforms for emerging markets.",
    siteName: name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} `,
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
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
