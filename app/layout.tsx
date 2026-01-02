import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onsite Concrete, Inc. | Professional Concrete Services in Denver",
  description: "Onsite Concrete, Inc. offers professional concrete services in the Denver metro area, including driveways, patios, foundations, and stamped concrete. Over 23 years of experience.",
  keywords: "concrete, Denver, driveways, patios, foundations, stamped concrete, onsite concrete, contractor",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Onsite Concrete, Inc. | Professional Concrete Services",
    description: "Professional concrete services in Denver. A+ BBB rated with 23+ years of experience.",
    siteName: 'Onsite Concrete, Inc.',
    images: [
      {
        url: '/images/onsiteconcrete.png',
        width: 800,
        height: 600,
        alt: 'Onsite Concrete, Inc. Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
