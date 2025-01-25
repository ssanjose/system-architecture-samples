'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import Link from "next/link";

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ["latin"] });

const Header = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <header className={cn(`py-2 flex justify-between items-center bg-background`, className, inter.className)}
    >
      <Link href="/">
        <h1 className="text-foreground text-xl md:text-2xl font-bold">
          {siteConfig.name}
        </h1>
      </Link>
    </header>
  );
};

export default Header;