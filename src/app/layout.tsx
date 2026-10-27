import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { UpdateNotifier } from "@/components/UpdateNotifier";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "DZ | Dia Zero",
  description: "A natural social experience based on universal human actions.",
  icons: {
    icon: '/zerodayimage.png',
    shortcut: '/zerodayimage.png',
    apple: '/zerodayimage.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="organic-transition">
        <div className="aura-bg" />
        <main>{children}</main>
        {typeof window !== 'undefined' && <UpdateNotifier />}
      </body>
    </html>
  );
}
