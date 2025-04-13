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
    <div className="container mx-auto min-h-svh border-primary-foreground max-w-7xl border-x">
      {templates.map((template, index) => {
        console.log(template.slug);
        if (template.slug === slug) {
          return <TemplateDetail key={index} template={template} />;
        }
      })}
    </div>
  );
}
