"use client";

import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="z-50 w-full border-border/40 bg-background/95 border-b border-black">
      <div className="px-2 mx-auto w-full flex h-14 items-center">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
