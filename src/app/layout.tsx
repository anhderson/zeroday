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
  metadataBase: new URL("https://zeroday-chi.vercel.app"),
  title: "Zero Day - Experimente a mente de forma divertida.",
  description: "Experimente a mente de forma divertida.",
  openGraph: {
    title: "Zero Day - Experimente a mente de forma divertida.",
    description: "Experimente a mente de forma divertida.",
    url: "https://zeroday-chi.vercel.app",
    siteName: "Zero Day",
    images: [
      {
        url: "/zerodayimage.png",
        width: 1200,
        height: 630,
        alt: "Zero Day - Experimente a mente de forma divertida.",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Day - Experimente a mente de forma divertida.",
    description: "Experimente a mente de forma divertida.",
    images: ["/zerodayimage.png"],
  },
  icons: {
    icon: '/zerodayicone.png',
    shortcut: '/zerodayicone.png',
    apple: '/zerodayicone.png',
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
