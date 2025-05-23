import React from "react";
import BioLink from "@/components/bio-link";
import { CommandDialogDemo } from "@/components/command";
import {getBio} from "@/lib/data/static";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Bio",
    description: 'Get to know ekovegeance, a passionate web developer focused on building modern and scalable web applications using Next.js, Laravel, and more.'
}

export default function Bio() {
    const bio =  getBio();
  return (
    <div>
      <BioLink bio={bio} />
    </div>
  );
}
