import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface NavConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const navConfig: NavConfig = {
  mainNav: [
    // {
    //   title: "Documentation",
    //   href: "/docs",
    // },
    // {
    //   title: "Components",
    //   href: "/docs/components/accordion",
    // },
  ],
  sidebarNav: [
    {
      title: "Borrowers",
      items: [
        {
          title: "Borrower Management",
          href: "#",
          items: [],
        },
      ],
    },
    {
      title: "CRM",
      items: [
        {
          title: "Admin Master View",
          href: "#",
          items: [],
        },
        {
          title: "TL Master View",
          href: "#",
          items: [],
        },
        {
          title: "OM Master View",
          href: "#",
          items: [],
        },
        {
          title: "Collection Agent View",
          href: "#",
          items: [],
        },
        {
          title: "Team Management",
          href: "#",
          items: [],
        },
        {
          title: "Bucket Management",
          href: "#",
          items: [],
        },
        {
          title: "Collection Management",
          href: "#",
          items: [],
        },
        {
          title: "Bucket Master",
          href: "#",
          items: [],
        },
      ],
    },
    {
      title: "Users",
      items: [
        {
          title: "User Management",
          href: "/user-management",
          items: [],
        },
        {
          title: "Role Management",
          href: "#",
          items: [],
        },
        {
          title: "Section Management",
          href: "#",
          items: [],
        },
        {
          title: "Registered Users",
          href: "#",
          items: [],
        },
      ],
    },
  ],
};
