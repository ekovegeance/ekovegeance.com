/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/RCvQkwDpbYv
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Manrope } from 'next/font/google'
import { Chivo } from 'next/font/google'

manrope({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    (<div className={`flex flex-col min-h-[100dvh] ${isDarkMode ? "dark" : ""}`}>
      <main className="flex-1">
        
        
        {/* <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 space-y-8 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p
                className="max-w-[500px] mx-auto text-muted-foreground md:text-xl dark:text-card-foreground">
                Check out some of my recent web development projects.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="dark:bg-card dark:text-card-foreground">
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-card-foreground">
                    A modern web application built with React, TypeScript, and Node.js.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
                      isDarkMode
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                    prefetch={false}>
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card className="dark:bg-card dark:text-card-foreground">
                <CardHeader>
                  <CardTitle>Project 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-card-foreground">
                    A responsive web application with a focus on user-friendly design.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
                      isDarkMode
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                    prefetch={false}>
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card className="dark:bg-card dark:text-card-foreground">
                <CardHeader>
                  <CardTitle>Project 3</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-card-foreground">
                    A scalable API built with Node.js and MongoDB, designed for high-performance.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
                      isDarkMode
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                    prefetch={false}>
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section> */}
        {/* <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-background">
          <div className="container px-4 space-y-8 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p
                className="max-w-[500px] mx-auto text-muted-foreground md:text-xl dark:text-card-foreground">
                Have a project in mind? Let's chat!
              </p>
            </div>
            <form className="max-w-md mx-auto space-y-4">
              <Input type="text" placeholder="Name" className="w-full" />
              <Input type="email" placeholder="Email" className="w-full" />
              <Textarea placeholder="Message" rows={4} className="w-full" />
              <Button
                type="submit"
                className={`w-full ${
                  isDarkMode
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}>
                Send Message
              </Button>
            </form>
          </div>
        </section> */}
      </main>
      
    </div>)
  );
}




function SunIcon(props) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>)
  );
}


function SunMoonIcon(props) {
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
      <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.3 17.7-1.4 1.4" />
      <path d="m19.1 4.9-1.4 1.4" />
    </svg>)
  );
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
