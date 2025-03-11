import React from 'react'
import { getTemplates } from '@/lib/data';
import TemplateDetail from '@/components/templates/template-detail';

export default function TemplatesSlugPage({params}: {params: {slug: string}}) {
    const templates = getTemplates();
    console.log(params.slug);
  return (
    <div className="container mx-auto min-h-svh border-zinc-200/70 dark:border-zinc-700/70 border-x">
        {templates.map((template, index) => {
            console.log(template.slug);
            if (template.slug === params.slug) {
                return (
                    <TemplateDetail
                    key={index}
                    title={template.title}
                    description={template.description}
                    image={template.image}
                    price={template.price}
                    framework={template.framework}
                    techStack={template.techStack}
                    useCase={template.useCase}
                    css={template.css}
                    features={template.features}
                    demo={template.demo}
                    buy={template.buy}
                    />
                )
            }
        })}
    </div>
  )
}
