import { CircleDot, GitFork, Star } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import {Repository} from "@/types";


const languageColors = {
  javascript: "#f1e05a",
  typescript: "#3178c6",
  python: "#3572A5",
  html: "#e34c26",
  css: "#563d7c",
  java: "#b07219",
  php: "#4F5D95",
  ruby: "#701516",
  go: "#00ADD8",
  c: "#555555",
  shell: "#89e051",
};

function formatNumber(num: number): string {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toString();
}

export default function Projects({ repos }: { repos: Repository[] }) {
  const sortedRepos = repos.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );
  return (
    <div className="w-full p-4 mx-auto divide-y md:max-w-7xl divide-border">
      {sortedRepos.map((repo) => (
        <div
          key={repo.id}
          className="px-4 py-6 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-zinc-900 hover:rounded-md"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold truncate">
                  <Link
                    href={repo.html_url}
                    className="hover:text-teal-600 hover:underline"
                  >
                    {repo.name}
                  </Link>
                </h3>
                <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium text-muted-foreground">
                  {repo.is_template ? "Public Template" : "Public"}
                </span>
              </div>
              {repo.description && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {repo.description}
                </p>
              )}
              <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                {repo.language ? (
                  <div className={clsx("flex items-center gap-1")} style={{ color: languageColors[repo.language.toLowerCase()] || 'inherit' }}>
                    <CircleDot className="w-3 h-3" />
                    {repo.language}
                  </div>
                ) : (
                  "No language"
                )}
                {repo.stargazers_count > 0 && (
                  <a
                    href="#"
                    className="flex items-center gap-1 hover:text-teal-600"
                  >
                    <Star className="w-3 h-3" />
                    {formatNumber(repo.stargazers_count)}
                  </a>
                )}
                {repo.forks > 0 && (
                  <a
                    href="#"
                    className="flex items-center gap-1 hover:text-teal-600"
                  >
                    <GitFork className="w-3 h-3" />
                    {formatNumber(repo.forks)}
                  </a>
                )}
                <span>
                  {new Date(repo.updated_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Star className="w-4 h-4 mr-1" />
                Star
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreHorizontal className="w-4 h-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[180px]">
                  <DropdownMenuItem>
                    <Star className="w-4 h-4 mr-2" />
                    Star
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <GitFork className="w-4 h-4 mr-2" />
                    Fork
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    View repository
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}
