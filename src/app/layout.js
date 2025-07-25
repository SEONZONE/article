import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GNB from "../component/GNB";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GNB />
        <div className="max-w-6xl mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}
