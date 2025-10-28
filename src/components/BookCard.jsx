import React from "react";

export default function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-2">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-md font-semibold mt-2">{book.title}</h3>
      <p className="text-sm text-gray-600">
        {book.author_name ? book.author_name[0] : "Unknown Author"}
      </p>
      <p className="text-xs text-gray-400">
        First published: {book.first_publish_year || "N/A"}
      </p>
    </div>
  );
}
