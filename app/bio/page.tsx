import React from "react";
import BioLink from "@/components/bio-link";
import { CommandDialogDemo } from "@/components/command";
import {getBio} from "@/lib/data/static";

export default function Bio() {
    const bio =  getBio();
  return (
    <div>
      <BioLink bio={bio} />
    </div>
  );
}
