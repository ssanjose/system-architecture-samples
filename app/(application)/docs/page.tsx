'use client';

import React from "react";
import Image from "next/image";

export default function Home() {

  return (
    <main className="flex items-start gap-4">
      <aside>
        <Image
          src="/images/nextjs.svg"
          alt="Next.js logo"
          width={200}
          height={200}
        />
      </aside>
      <div className="bg-black">
        s
      </div>
    </main>
  );
}
