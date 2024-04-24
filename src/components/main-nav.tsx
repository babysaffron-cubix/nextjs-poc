"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo-bw.png";
import { siteConfig } from "@/config/site";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image className="rounded-full" src={logo} alt={siteConfig.name} width={32} height={32} />
        <span className="hidden font-bold sm:inline-block text-indigo-800">{siteConfig.name}</span>
      </Link>
      {/* <nav className="flex items-center gap-6 text-sm">
        <Link href="/docs" className={cn("transition-colors hover:text-foreground/80", pathname === "/docs" ? "text-foreground" : "text-foreground/60")}>
          Docs
        </Link>

        <Link href={siteConfig.links.github} className={cn("hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block")}>
          GitHub
        </Link>
      </nav> */}
    </div>
  );
}
