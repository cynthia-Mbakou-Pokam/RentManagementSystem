import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "RentMS — Property Management & Tenant Housing",
    template: "%s | RentMS",
  },
  description:
    "Find safe, affordable housing. Landlords manage properties, rent, and maintenance with AI-powered affordability scoring, scam detection, and market insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
