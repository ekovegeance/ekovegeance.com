/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MxMPYWDz3vx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */


import { getBooks } from "../lib/data";
import Link from "next/link";


export default function Book() {
  const books = getBooks();
  return (
    <div className="w-full max-w-3xl px-4 py-8 mx-auto md:px-6 md:py-12">
      <div className="grid gap-8">
        <div className="grid gap-2">
          <h1 className="text-3xl font-bold">My Reading List</h1>
          <p className="text-muted-foreground">Collection of books that I read</p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-4">
            {/* <h2 className="text-2xl font-bold">Currently Reading</h2> */}
            <div className="grid gap-4">
              {books.map((book) => (
                <Link href={`books/${book.title}.pdf`} key={book.title}>
                  <div className="grid gap-2 p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="grid gap-1">
                        <h3 className="text-lg font-semibold">{book.title}</h3>
                        <p className="text-muted-foreground">{book.author}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {book.genre}
                      </div>
                    </div>
                    <p>{book.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
