import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
        <footer
        className="flex flex-col items-center w-full gap-2 px-4 py-6 border-t sm:flex-row shrink-0 md:px-6 dark:border-t-card">
        <div
          className="flex items-center gap-2 text-xs text-muted-foreground dark:text-card-foreground">
          <ServerIcon className="w-4 h-4" />
          <Link href="https://status.ekovegeance.com/"><p className=" text-blue">System Status: Online</p></Link>
        </div>
        <p className="text-xs text-muted-foreground dark:text-card-foreground">
          &copy; 2024 ekovegeance. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 dark:text-card-foreground"
            prefetch={false}>
            Privacy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 dark:text-card-foreground"
            prefetch={false}>
            Terms
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ServerIcon(props) {
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
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>)
    );
  }
