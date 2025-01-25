import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/Header";
import Footer from "../../components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author
    },
  ],
  creator: siteConfig.author,
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
        <Header className="px-[5rem] border-b sticky top-0" />
        {children}
        <Footer className="px-[5rem] pb-4" />
      </body>
    </html>
  );
}
