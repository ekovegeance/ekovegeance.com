import React from "react";
import { getTemplates } from "@/lib/data/static";
import TemplateDetail from "@/components/templates/template-detail";
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export async function generateMetadata(
    {params, searchParams}: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = (await params).slug
    const templates = getTemplates();
    const template = templates.find((template) => template.slug === slug);
    if (!template) {
        return {
            title: "Template not found",
            description: "The requested template was not found.",
        };
    }
    return {
        title: template.title,
        description: template.description,
    };
}


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
