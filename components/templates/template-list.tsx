import React from "react";
import { getTemplates } from "@/lib/data";
import TemplateCard from "./template-card";

export default function TemplateList() {
  const templates = getTemplates();

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template, index) => (
          <TemplateCard
            key={index}
            title={template.title}
            description={template.description}
            image={template.image}
            link={`/templates/${template.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
