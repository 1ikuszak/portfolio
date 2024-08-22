"use client";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function MainNav() {
  return (
    <div className="mr-4 hidden w-full items-center justify-between px-10 md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <span className="hidden lg:inline-block">{siteConfig.name}</span>
      </Link>
      <div className="flex items-center justify-between gap-10">
        <p>{siteConfig.email}</p>
        <Link target="_blank" href={"https://github.com/1ikuszak"}>
          GitHub
        </Link>
      </div>
    </div>
  );
}
