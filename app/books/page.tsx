import React from "react";
import BookList from "@/components/book";
import {getBooks} from "@/lib/data/static";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Books",
    description: 'A curated list of books that have influenced ekovegeance personal and professional growth in software development, business, and creativity.'
}
export default function BooksPage() {
    const books = getBooks();
  return (
    <div>
      <BookList books={books} />
    </div>
  );
}
