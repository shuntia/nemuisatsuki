import type { Metadata } from "next";
import "./globals.css";
import { public_sans } from "./fonts";

export const metadata: Metadata = {
  title: "眠井さつき非公式ウェブサイト",
  description: "眠井さつき非公式ファンサイトです。本人許諾済みです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={public_sans.style}
        className={`antialiased`}
      >
        {children}
      </body>
    </html >
  );
}
