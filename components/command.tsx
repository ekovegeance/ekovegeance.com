"use client";

import * as React from "react";
import { Link2, SquareMousePointer, Linkedin,Github,Instagram } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import { useEffect } from 'react';

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const down = (e) => {
      if (e.key === "e" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {/* <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>E
        </kbd>
      </p> */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Paths">
            <Link href="/bio">
              <CommandItem>
                <SquareMousePointer className="w-4 h-4 mr-2" />
                <span>Bio</span>
              </CommandItem>
            </Link>
            <Link href="/cv">
              <CommandItem>
                <SquareMousePointer className="w-4 h-4 mr-2" />
                <span>CV</span>
              </CommandItem>
            </Link>
            <Link href="/books">
              <CommandItem>
                <SquareMousePointer className="w-4 h-4 mr-2" />
                <span>Books</span>
              </CommandItem>
            </Link>
            <Link href="/certificates">
              <CommandItem>
                <SquareMousePointer className="w-4 h-4 mr-2" />
                <span>Certificates</span>
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Links">
            <Link href="https://blog.ekovegeance.com">
              <CommandItem>
                <Link2 className="w-4 h-4 mr-2" />
                <span>Blog</span>
              </CommandItem>
            </Link>
            <Link href="https://writeup.ekovegeance.com/">
              <CommandItem>
                <Link2 className="w-4 h-4 mr-2" />
                <span>Write up</span>
                {/* <CommandShortcut>⌘B</CommandShortcut> */}
              </CommandItem>
            </Link>
            <Link href="https://status.ekovegeance.com/">
              <CommandItem>
              <Link2 className="w-4 h-4 mr-2" />
                <span>Status</span>
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Social">
          <Link href="https://www.linkedin.com/in/ekovegeance/">
              <CommandItem>
              <Linkedin className="w-4 h-4 mr-2" />
                <span>Linkedin</span>
              </CommandItem>
            </Link>
            <Link href="https://github.com/ekovegeance">
              <CommandItem>
              <Github className="w-4 h-4 mr-2" />
                <span>Github</span>
              </CommandItem>
            </Link>
            <Link href="https://instagram.com/ekovegeance">
              <CommandItem>
              <Instagram className="w-4 h-4 mr-2" />
                <span>Instagram</span>
              </CommandItem>
            </Link>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
