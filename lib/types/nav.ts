export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
}

export type NavItemWithChildren = NavItem & {
  items: NavItemWithChildren[];
}

export type MainNavItem = NavItem & {};

export type SidebarNavItem = NavItemWithChildren & {};