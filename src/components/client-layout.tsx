"use client";

import { FC, PropsWithChildren } from "react";

import { fullPageUrls } from "@/config/full-page-urls";
import { noHeaderUrls } from "@/config/no-header-urls";
import LayoutNav from "@/components/layout-nav";
import { SiteHeader } from "@/components/site-header";
import { usePathname } from "next/navigation";

const ClientLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  // TODO: Will fetch commons things
  // 1. AllRoles
   
  return (
    <>
      {noHeaderUrls.includes(pathname) ? <></> : <SiteHeader />}
      {fullPageUrls.includes(pathname) ? (
        children
      ) : (
        <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
          <LayoutNav />
          {children}
        </div>
      )}
    </>
  );
};

export default ClientLayout;
