/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZfJn7ZOzVqF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import {getBio } from "@/lib/data/static";
import { Bio } from "@/types";

export default function BioLink({bio}: {bio: Bio}) {

  return (
    <div className="flex flex-col items-center justify-center min-h-svh bg-background text-foreground">
      <div className="w-full max-w-md px-6 py-12 space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-24 h-24 rounded-md">
            <AvatarImage src={bio.image} />
            <AvatarFallback>ES</AvatarFallback>
          </Avatar>
          <div className="space-y-1 text-center">
            <h2 className="text-2xl font-bold">{bio.name}</h2>
            <p className="text-muted-foreground">{bio.username}</p>
          </div>
          <p className="text-muted-foreground text-sm max-w-[300px] text-center">
            {bio.description}
          </p>
        </div>
          {bio.sites.map((site, index) => (
              <div className="grid gap-4" key={index}>
                  <Link
                      href={site.link}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-md shadow-sm bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                  >
                      {site.title}
                  </Link>
              </div>
          ))}

      </div>
    </div>
  );
}
