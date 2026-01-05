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
      <body style={public_sans.style} className={`antialiased`}>
        <div className="min-h-[90vh]">
          {children}
        </div>
        <div className="text-center text-gray-500 pl-[25vw] pr-[25vw] pt-10 font-light">
          All media used on this site are subject to their respective copyrights.
          This site is a fan-made unofficial website and is not affiliated with or
          endorsed by the original creators. You are not permitted to reproduce,
          distribute, or create derivative works based on the content without
          prior permission from the copyright holders.
        </div>
      </body>
    </html>
  );
}
