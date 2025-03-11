"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

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
export default function TemplateDetail({
  title,
  description,
  image,
  price,
  framework,
  techStack,
  useCase,
  css,
  features,
  demo,
  buy,
}: templateDetailProps) {
  return (
    <div>
      {/* Main Content */}
      <div className="container px-4 py-8 mx-auto">
        <div className="grid gap-14 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            <Link
              href="/templates"
              className="inline-flex items-center text-sm text-gray-600 hover:text-black"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Templates
            </Link>

            <div className="space-y-2">
              <h1 className="text-xl font-bold">{title}</h1>
              <p className="text-3xl font-extrabold text-teal-700">
                Rp. {new Intl.NumberFormat("id-ID").format(price)}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Link href={buy}>
                <Button>Buy Now</Button>
              </Link>
              <Link href={demo}>
                <Button variant="secondary">
                  View Demo
                </Button>
              </Link>
            </div>

            <div className="pt-4 mx-4 space-y-4">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Framework</span>
                <span>{framework}</span>
              </div>
              <div className="border-t border-gray-200"></div>

              <div className="flex justify-between py-2">
                <span className="text-gray-600">Tech Stack</span>
                <span>{techStack}</span>
              </div>
              <div className="border-t border-gray-200"></div>

              <div className="flex justify-between py-2">
                <span className="text-gray-600">Use Case</span>
                <span>{useCase}</span>
              </div>
              <div className="border-t border-gray-200"></div>

              <div className="flex justify-between py-2">
                <span className="text-gray-600">CSS</span>
                <span>{css}</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
            <Carousel className="max-w-xs md:w-full md:max-w-full">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center p-6 aspect-video">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>


    
            {/* <div className="p-8 mb-8 bg-white border border-gray-200 rounded-lg">
              <Image
                src={image}
                alt={title}
                height={1000}
                width={1000}
                className="object-cover w-full "
              />
            </div> */}

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Description</h3>
              <p>{description}</p>

              <h3 className="text-xl font-bold">Features</h3>
              {features.map((feature, index) => (
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
