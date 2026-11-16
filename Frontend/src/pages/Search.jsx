import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() || "";
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await axios.get("https://bookstoreapp-backend-7uwe.onrender.com/book");
        setBooks(response.data);
      } catch {
        setError("We could not load the books. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    getBooks();
  }, []);

  const results = books.filter((book) =>
    [book.name, book.title, book.category]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 pb-16 pt-28 text-black">
        <section className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold">
            Search results{query ? ` for "${query}"` : ""}
          </h1>

          {isLoading && <p className="mt-8 text-gray-600">Loading books...</p>}
          {error && <p className="mt-8 text-red-500">{error}</p>}
          {!isLoading && !error && results.length === 0 && (
            <p className="mt-8 text-gray-600">
              No books matched your search. Try another title or category.
            </p>
          )}

          {!isLoading && !error && results.length > 0 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((book) => (
                <Card key={book.id || book._id} item={book} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Search;
