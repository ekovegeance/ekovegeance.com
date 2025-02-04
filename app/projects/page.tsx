import Projects from "@/components/projects";
import React from "react";

export default async function ProjectsPage() {
  const data = await fetch("https://api.github.com/users/ekovegeance/repos");
  const repos = await data.json();

  return (
    <div className="container mx-auto border-zinc-200/70 dark:border-zinc-700/70 border-x ">
      <Projects repos={repos} />
    </div>
  );
}
