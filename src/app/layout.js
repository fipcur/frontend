import { Geist, Geist_Mono } from "next/font/google";
import { Prompt } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'], // ระบุความหนาที่ต้องการตรงนี้ (ต้องเป็น String)
})

export const metadata = {
  title: "เว็บไซต์ขายสินค้าออนไลน์",
  description: "_-_-___---___---___",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
