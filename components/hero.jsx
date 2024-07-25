import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div>
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
          <div
            className="container flex flex-col items-center justify-between gap-8 px-4 md:px-6 md:flex-row">
            <div className="space-y-4 text-center md:text-left">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, Saya Eko Saputra
              </h1>
              <p className="max-w-[500px] text-muted-foreground md:text-xl">
              UI/UX Designer, dan Fullstack Developer
              </p>
              <div
                className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
                <Link
                  href="https://github.com/ekovegeance"
                  className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors rounded-md shadow text-primary-foreground bg-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  View Projects
                </Link>
                <Link
                  href="#"
                  className= "inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors border rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Contact Me
                </Link>
              </div>
            </div>
            <Image src={"/ekovegeance.jpeg"} width={400} height={400} alt='ekovegeance' className="object-cover w-48 h-48 rounded-lg md:w-64 md:h-64"/>
            {/* <img
              src="/ekovegeance.jpeg"
              width={400}
              height={400}
              alt="Hero"
              className="object-cover w-48 h-48 rounded-lg md:w-64 md:h-64" /> */}
          </div>
        </section>
    </div>
  )
}
