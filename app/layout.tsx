import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Obed Forkuo | Software Engineer & Technical Founder',
  description: 'Technical founder and software engineer building Africa\'s data infrastructure. Specializing in scalable systems, AI-driven platforms, and cloud-native solutions.',
  keywords: ['Software Engineer', 'Technical Founder', 'Full-Stack Developer', 'Africa Tech', 'Data Infrastructure', 'AI/ML', 'Cloud Architecture'],
  authors: [{ name: 'Obed Forkuo' }],
  creator: 'Obed Forkuo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://owbird.dev',
    title: 'Obed Forkuo | Software Engineer & Technical Founder',
    description: 'Building Africa\'s data infrastructure through scalable systems and AI-driven solutions',
    siteName: 'Obed Forkuo Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obed Forkuo | Software Engineer & Technical Founder',
    description: 'Building Africa\'s data infrastructure through scalable systems and AI-driven solutions',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
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
  )
}