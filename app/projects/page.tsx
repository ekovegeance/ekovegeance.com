import Projects from "@/components/projects";
import TemplateList from "@/components/templates/template-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export default async function ProjectsPage() {
  const data = await fetch("https://api.github.com/users/ekovegeance/repos");
  const repos = await data.json();

  return (
    <div className="container mx-auto border-zinc-200/70 dark:border-zinc-700/70 border-x ">
      <div className="container p-4 mx-auto">
      <Tabs defaultValue="projects" className="w-full mx-auto">
        <TabsList>
          <TabsTrigger value="projects">Open Sources</TabsTrigger>
          <TabsTrigger value="templates">Premium Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
        <Projects repos={repos} />
        </TabsContent >
        <TabsContent value="templates">
          <TemplateList />
        </TabsContent>
      </Tabs>

    </div>
    </div>
  );
}
