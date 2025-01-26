import { MainNavItem, SidebarNavItem } from "@/lib/types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

/**
 * Docs configuration
 * @property {MainNavItem[]} mainNav - Main navigation
 * @property {SidebarNavItem[]} sidebarNav - Sidebar navigation
 */
export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Documentation",
      href: "/docs/",
    },
    {
      title: "Examples",
      href: "/docs/examples/video-player-app",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "components.json",
          href: "/docs/components-json",
          items: [],
        },
      ],
    },
    {
      title: "Examples",
      items: [
        {
          title: "Sample System Architecture",
          href: "/docs/examples/sample-system-architecture",
          items: [],
        },
      ],
    },
  ],
}