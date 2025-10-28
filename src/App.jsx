import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const data = await response.json();
      setBooks(data.docs.slice(0, 20)); // top 20 results
    } catch (err) {
      console.error("Error fetching data:", err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white text-center py-4 text-2xl font-bold shadow-md">
        📚 Book Finder
      </header>

      <main className="container mx-auto p-4">
        <SearchBar onSearch={searchBooks} />
        {loading ? (
          <p className="text-center mt-6 text-blue-500">Loading...</p>
        ) : (
          <BookList books={books} />
        )}
      </main>
    </div>
  );
}

export default App;
