import TemplateList from "@/components/templates/template-list";
import React from "react";

export default function TemplatePage() {
  return (
    <div className="container px-4 py-8 mx-auto min-h-svh border-zinc-200/70 dark:border-zinc-700/70 border-x">
        <div>
      <h1 className="mb-4 text-3xl font-bold">Templates</h1>
      <p className="mb-8">
        Choose from a variety of templates to kickstart your project.
      </p>
      <TemplateList/>
      </div>
    </div>
  );
}
