import Certificates from "@/components/certificates";
import React from "react";
import {getCertificates} from "@/lib/data/static";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Certificates",
    description: 'Explore verified certificates that showcase ekovegeance skills and achievements in programming, web development, and technology.'
}
export default function CertificatesPage() {
    const certificates = getCertificates();
  return (
    <div className=" mx-auto min-h-svh max-w-7xl mb-4 md:px-2">
      <Certificates certificates={certificates} />
    </div>
  );
}
