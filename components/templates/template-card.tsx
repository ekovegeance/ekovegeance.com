import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import Link from "next/link";

type TemplateCardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
};

export default function TemplateCard({ title, description, image, link }: TemplateCardProps) {
  return (
    <div className="">
        <Link href={link}>
      <Card className="transition duration-300 ease-in-out shadow-none  hover:shadow-sm">
        <CardHeader>
          <Image
            src={image}
            alt={title}
            width="1000"
            height="1000"
            className="object-cover w-full "
          />
        </CardHeader>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
           {description}
          </CardDescription>
        </CardContent>
      </Card>
      </Link>
    </div>
  );
}
