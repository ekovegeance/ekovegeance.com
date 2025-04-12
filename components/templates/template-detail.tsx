"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

type templateDetailProps = {
  title: string;
  description: string;
  image: string;
  price: number;
  framework: string;
  techStack: string;
  useCase: string;
  css: string;
  features: string[];
  demo: string;
  buy: string;
};
export default function TemplateDetail({ template}: { template: templateDetailProps }) {
  return (
    <div className="">
      {/* Main Content */}
      <div className="container px-4 py-8 mx-auto md:px-48">
        <div className="grid gap-14 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            <Link
              href="/templates"
              className="inline-flex items-center text-sm text-primary"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Templates
            </Link>

            <div className="space-y-2">
              <h1 className="text-xl font-bold">{template.title}</h1>
              <p className="text-3xl font-extrabold text-teal-700">
                Rp. {new Intl.NumberFormat("id-ID").format(template.price)}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link href={template.buy}>
                <Button>Buy Now</Button>
              </Link>
              <Link href={template.demo}>
                <Button variant="secondary">
                  View Demo
                </Button>
              </Link>
            </div>

            <div className="pt-4 mx-4 space-y-4">
              <div className="flex justify-between py-2">
                <span>Framework</span>
                <span>{template.framework}</span>
              </div>
              <div className="border-t border-zinc-400"></div>

              <div className="flex justify-between py-2">
                <span>Tech Stack</span>
                <span>{template.techStack}</span>
              </div>
              <div className="border-t border-zinc-400"></div>

              <div className="flex justify-between py-2">
                <span>Use Case</span>
                <span>{template.useCase}</span>
              </div>
              <div className="border-t border-zinc-400"></div>

              <div className="flex justify-between py-2">
                <span>CSS</span>
                <span>{template.css}</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="p-8 mb-8 bg-white border border-gray-200 rounded-lg">
              <Image
                src={template.image}
                alt={template.title}
                height={1000}
                width={1000}
                className="object-cover w-full "
              />
            </div>
            </div>    

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Description</h3>
              <p>{template.description}</p>

              <h3 className="text-xl font-bold">Features</h3>
              {template.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-teal-700">•</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

        </div>
      </div>
    </div>
  );
}
