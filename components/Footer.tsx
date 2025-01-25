"use client";

import React from "react"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "@/config/site";

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ["latin"] });

const Footer = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <footer className={cn("", className, inter.className)}>
      <div className="flex flex-col sm:flex-row justify-between items-center bg-background border-b border-secondary px-6 pb-6 mb-10">
        <Link href="/">
          <h1 className="text-foreground text-xl md:text-2xl font-bold tracking-tight">
            SSAS
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="block text-sm text-muted-foreground sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            href={siteConfig.links.github}
            className="hover:underline"
          >
            {siteConfig.name} App
          </a>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;