import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="z-50 w-full border-t border-accent bg-black text-white">
      <div className="mx-auto flex h-14 w-full items-center px-2">
        <div className="flex w-full items-center justify-between text-sm md:mr-4 md:px-10 md:text-base">
          <Link
            href="/"
            className="flex items-center space-x-2 md:mr-4 lg:mr-6"
          >
            <span className="inline-block">{siteConfig.name}</span>
          </Link>
          <p>{siteConfig.email}</p>
          <Link target="_blank" href={"https://github.com/1ikuszak"}>
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
