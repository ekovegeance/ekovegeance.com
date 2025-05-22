import React from "react";
import Link from "next/link";
import { Server } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between w-full gap-2 px-4 py-6 border-t sm:flex-row shrink-0 md:px-12 dark:border-zinc-700/70">
        <div className="flex items-center gap-2 text-xs text-muted-foreground dark:text-card-foreground">
          <Server className="w-4 h-4" />
          <Link href="https://status.ekovegeance.com/">
            <p className="text-teal-800 dark:text-teal-500">System Status: Online</p>
          </Link>
        </div>
        <div>
          <p className="text-xs text-muted-foreground dark:text-card-foreground">
            &copy; {new Date().getFullYear()} ekovegeance. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 dark:text-card-foreground"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 dark:text-card-foreground"
            prefetch={false}
          >
            Terms
          </Link>
        </nav>
        <ModeToggle />

    </footer>
  );
}
