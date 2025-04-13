"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Award } from "lucide-react";
import { getCertificates } from "@/lib/data";
import Link from "next/link";

export default function Certificates() {
  const certificates = getCertificates();

  return (
    <section id="certificates">
      <div className="px-4 mx-auto">
        <h2 className="mb-16 mt-8 text-3xl font-bold text-center">
          My Certificates
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {certificates.map((certificate) => (
            <Card
              key={certificate.id}
              className="overflow-hidden shadow-none border-border hover:shadow-xs"
            >
              <Link href={certificate.url}>
              <CardContent className="p-6 ">
                <div className="">
                    <Badge>{certificate.category}</Badge>
                  <h3 className="my-2 text-xl font-semibold">
                    {certificate.title}
                  </h3>

                  <div className="flex items-center mb-1 text-muted-foreground">
                    <Award size={16} className="mr-2" />
                    <span>{certificate.organization}</span>
                  </div>

                  <div className="flex items-center mb-4 text-muted-foreground">
                    <Calendar size={16} className="mr-2" />
                    <span>{certificate.date}</span>
                  </div>

                  <div className="mb-4 text-sm text-muted-foreground">
                    <strong>Credential ID:</strong> {certificate.credential}
                  </div>
                </div>
              </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
