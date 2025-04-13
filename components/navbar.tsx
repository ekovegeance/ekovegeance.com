"use client";

import * as React from "react";
import Link from "next/link";
import { CommandDialogDemo } from "./command";

export function Navbar() {

  return (
    <nav className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 right-0 left-0 z-50 border-b backdrop-blur">
      <CommandDialogDemo/>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                <span className="text-primary">ekovegeance/</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
