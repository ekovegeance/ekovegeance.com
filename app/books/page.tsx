import React from "react";
import Book from "@/components/book";
import { CommandDialogDemo } from "@/components/command";

export default function BooksPage() {
  return (
    <div>
      <CommandDialogDemo />
      <Book />
    </div>
  );
}
