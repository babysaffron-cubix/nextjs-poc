import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Web, Instagram, Linkedin } from "@/assets/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { buttonVariants } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="shadow sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-6 flex h-14 w-full items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Link href={siteConfig.url} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}>
                <Web className="" />
                <span className="sr-only">Website</span>
              </div>
            </Link>
            <Link href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}>
                <Instagram className="text-indigo-800" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}>
                <Linkedin className="text-indigo-800" />
                <span className="sr-only">Linkedin</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
