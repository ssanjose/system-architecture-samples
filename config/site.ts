import { SiteConfig } from "@/lib/types/site";

export const siteConfig: SiteConfig = {
  name: "Software System Architecture Samples",
  author: "Kurt San Jose",
  description: "A collection of software system architecture samples.",
  keywords: [
    "Next.js",
    "React",
    "TailwindCSS",
    "shadcn/ui",
    "TypeScript",
    "Next15",
    "Design",
    "Architecture",
    "System Design",
    "Software Architecture",
  ],
  url: {
    base: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    author: "https://kurtsanjose.dev",
  },
  links: {
    github: "https://github.com/ssanjose/system-architecture-samples",
  }
}