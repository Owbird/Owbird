import { Metadata } from "next";
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
    </html>
  );
}
