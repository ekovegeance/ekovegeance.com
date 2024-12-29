/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZfJn7ZOzVqF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Github, Linkedin, Globe, Rss } from 'lucide-react';
import { getData } from "@/lib/data";

export default function BioLink() {
  const datas = getData();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="w-full max-w-md px-6 py-12 space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-24 h-24 rounded-md">
            <AvatarImage src={datas.image} />
            <AvatarFallback>ES</AvatarFallback>
          </Avatar>
          <div className="space-y-1 text-center">
            <h2 className="text-2xl font-bold">{datas.name}</h2>
            <p className="text-muted-foreground">{datas.username}</p>
          </div>
          <p className="text-muted-foreground text-sm max-w-[300px] text-center">
            Saya seorang Designer & software engineer, membangun produk inovatif.
            Lihat tautan saya di bawah untuk mempelajarinya lebih banyak tentang
            saya dan pekerjaan saya.
          </p>
        </div>
        <div className="grid gap-4">
          <Link
            href="https://www.ekovegeance.com"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-md shadow bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <Globe className="w-5 h-5" />
            Website
          </Link>
          <Link
            href="https://blog.ekovegeance.com"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-md shadow bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <Rss className="w-5 h-5" />
            Blog
          </Link>
          <Link
            href="https://www.linkedin.com/in/ekovegeance/"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-md shadow bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/ekovegeance"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-md shadow bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <Github className="w-5 h-5" />
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

