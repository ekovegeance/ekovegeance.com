import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Toggle } from './ui/toggle'
import { ModeToggle } from './mode-toggle'

export default function Navbar() {
  return (
    <div>
        <header className="flex items-center justify-between px-4 lg:px-6 h-14">
        <Link href="#" className="flex items-center" prefetch={false}>
          {/* <CodeIcon className="w-6 h-6" /> */}
          <span className="text-lg font-semibold">ekovegeance</span>
          {/* <span className="sr-only">Portfolio</span> */}
        </Link>
        {/* <nav className="hidden gap-4 md:flex sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Projects
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Contact
          </Link>
        </nav> */}
        <div className="flex items-center gap-4">
          {/* <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle menu</span>
          </Button> */}
          {/* <Toggle className="ml-auto">
            <SunMoonIcon className="w-5 h-5" />
          </Toggle> */}
          <ModeToggle />
        </div>
      </header>
    </div>
  )
}

function MenuIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>)
    );
  }
