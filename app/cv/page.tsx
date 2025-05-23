import { CommandDialogDemo } from "@/components/command";
import Cv from "@/components/cv";
import React from "react";
import {getData} from "@/lib/data/static";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Resume",
    description: 'Download or view the latest CV of ekovegeance – web developer with experience in full-stack development, UI/UX, and technical leadership.'
}
export default function ResumesPage() {
    const data = getData();
  return (
    <div>
      <CommandDialogDemo />
      <Cv data={data} />
    </div>
  );
}
