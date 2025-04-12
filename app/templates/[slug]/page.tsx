import React from "react";
import { getTemplates } from "@/lib/data";
import TemplateDetail from "@/components/templates/template-detail";

export default async function TemplatesSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const templates = getTemplates();
  console.log(slug);
  return (
    <div className="container mx-auto min-h-svh border-zinc-200/70 dark:border-zinc-700/70 border-x">
      {templates.map((template, index) => {
        console.log(template.slug);
        if (template.slug === slug) {
          return <TemplateDetail key={index} template={template} />;
        }
      })}
    </div>
  );
}
