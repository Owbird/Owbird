import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import "animate.css";

export const metadata: Metadata = {
  title: "Owbird",
  description: "Just a guy...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white scroll-smooth">{children}</body>

      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-JDTB1BEE2V" />
      )}
    </html>
  );
}
