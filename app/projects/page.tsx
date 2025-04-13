import Projects from "@/components/projects";
import TemplateList from "@/components/templates/template-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export default async function ProjectsPage() {
  const data = await fetch("https://api.github.com/users/ekovegeance/repos");
  const repos = await data.json();

  return (
    <div className="mx-auto min-h-svh border-primary-foreground border-x ">
      <div className="py-8 md:mx-28">
        <div className="container p-4 mx-auto">
          <Tabs defaultValue="projects" className="w-full mx-auto mb-10">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="projects">Open Source</TabsTrigger>
                <TabsTrigger value="templates">Premium Projects</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="projects">
              <Projects repos={repos} />
            </TabsContent>
            <TabsContent value="templates">
              <TemplateList />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
