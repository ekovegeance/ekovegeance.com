import Certificates from "@/components/certificates";
import React from "react";
import {getCertificates} from "@/lib/data/static";

export default function CertificatesPage() {
    const certificates = getCertificates();
  return (
    <div className=" mx-auto min-h-svh max-w-7xl mb-4 md:px-2">
      <Certificates certificates={certificates} />
    </div>
  );
}
