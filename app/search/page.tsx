import React from "react";
import GoogleSearchRedirect from "@/components/search";
import { CommandDialogDemo } from "@/components/command";

export default function SearchPage() {
  return (
    <div className="">
      <CommandDialogDemo/>
      <GoogleSearchRedirect />
    </div>
  );
}
