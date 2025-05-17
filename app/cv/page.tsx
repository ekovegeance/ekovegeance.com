import { CommandDialogDemo } from "@/components/command";
import Cv from "@/components/cv";
import React from "react";
import {getData} from "@/lib/data/static";

export default function ResumesPage() {
    const data = getData();
  return (
    <div>
      <CommandDialogDemo />
      <Cv data={data} />
    </div>
  );
}
