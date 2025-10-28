import React from "react";
import BookCard from "./BookCard";

export default function BookList({ books }) {
  if (!books.length)
    return <p className="text-center mt-6 text-gray-500">No books found.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}
