import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TextLoop } from "./ui/text-loop";

export default function Hero() {
  return (
    <div>
      <section
        id="hero"
        className="w-full py-12 border-b border-zinc-200/70 dark:border-zinc-700/70 md:py-24 lg:py-32"
      >
        <div className="flex flex-col items-center justify-around gap-8 px-12 border-zinc-200/70 border-y md:px-6 md:flex-row dark:border-zinc-700/70">
          <div className="space-y-4 text-center md:text-left ">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
              Hi, I&apos;m Eko Saputra
            </h1>

            {/* <Name name="Hi, Saya Eko Saputra" /> */}
            <TextLoop className="flex max-w-[500px] text-muted-foreground md:text-xl">
              <p>Designer</p>
              <p>Software Engineer</p>
            </TextLoop>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors rounded-md shadow-sm text-primary-foreground bg-primary focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View Projects
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors border rounded-md shadow-xs focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <p className="text-sm text-muted-foreground">
                  Press{" "}
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1  px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>E
                  </kbd>
                </p>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={"https://github.com/ekovegeance.png"}
              width={400}
              height={400}
              alt="ekovegeance"
              className="object-cover w-48 h-48 transition duration-700 ease-in-out delay-150 rounded-lg md:w-64 md:h-64 hover:shadow-xl hover:rotate-12 hover:duration-200 hover:ease-in-out hover:transition-shadow hover:rounded-3xl hover:-translate-y-1 hover:scale-110"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
