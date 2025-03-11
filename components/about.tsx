/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sBYqgYodkCe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import ButtonMac from "./button-mac";

export default function About() {
  return (
    <section className="py-12 mx-6 border-zinc-200/70 border-x md:py-24 lg:py-32 dark:border-zinc-700/70">
      <div className="grid gap-8 transition duration-300 ease-in-out delay-150 hover:bg-zinc-50 hover:dark:bg-zinc-900 hover:rounded-xl hover:mx-8 hover:-translate-y-1 ">
        <div className="grid gap-4 border-b border-zinc-200/70 dark:border-zinc-700/70 ">
          <ButtonMac />
          <h2 className="mx-6 text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="mx-6 text-lg text-muted-foreground">
            Hi! I am a Designer & software engineer. My career is heavily
            influenced by Web and Open Source.
          </p>
        </div>
        <div className="grid gap-6 mx-6 md:grid-cols-2 ">
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Background</h3>
            <p className="text-muted-foreground">
              I spent my teenage years advocating and teaching people how to use
              Linux, contributing to Open Source projects and later developing
              an interest in JavaScript and Web development.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Interest</h3>
            <p className="text-muted-foreground">
              In my spare time, I enjoy exploring the latest web technologies,
              experimenting with design trends, and contributing to Open Source
              projects. I am also an avid reader, traveler, and nature lover.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Achievement</h3>
            <p className="text-muted-foreground">
              I am proud to have won several design and application awards. I
              have also been featured in industry publications and spoken at
              local tech meetups.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="text-muted-foreground">
              Feel free to contact me at {" "}
              <a
                href="mailto:me@ekovegeance.com"
                className="underline underline-offset-4"
              >
                me@ekovegeance.com
              </a>
              or connect with me on {" "}
              <Link
                href="https://www.linkedin.com/in/ekovegeance/"
                className="underline underline-offset-4"
                prefetch={false}
              >
                LinkedIn
              </Link>
              .
            </p>
          </div>
          {/* <Keyboard/> */}
        </div>
      </div>
    </section>
  );
}
