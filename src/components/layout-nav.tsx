"use client";

import { DocsSidebarNav } from "@/components/ui/sidebar-nav";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { navConfig } from "@/config/nav";

export default function LayoutNav() {
  return (
    <aside className="pl-6 bg-gradient-to-b from-indigo-900 to-indigo-700 fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <ScrollArea className="h-full py-6 pr-6 lg:py-8">
        <DocsSidebarNav items={navConfig.sidebarNav} />
      </ScrollArea>
    </aside>
  );
}
