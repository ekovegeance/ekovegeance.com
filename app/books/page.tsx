import React from "react";
import BookList from "@/components/book";
import {getBooks} from "@/lib/data/static";

export default function BooksPage() {
    const books = getBooks();
  return (
    <div>
      <BookList books={books} />
    </div>
  );
}
