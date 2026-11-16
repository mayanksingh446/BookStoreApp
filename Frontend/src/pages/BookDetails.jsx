import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const detailsByTitle = {
  "adventure tales": {
    about:
      "Step into a world of exciting journeys, brave choices, and unexpected discoveries. Adventure Tales is designed to keep readers curious from the first page to the last.",
    highlights: ["Imaginative journeys", "Courage and friendship", "Fast-moving stories"],
    bestFor: "Readers who enjoy thrilling stories and exploring new worlds.",
  },
  "story book": {
    about:
      "A warm collection of simple, memorable stories created to make reading relaxing and enjoyable. Each story offers a small moment of wonder and a thoughtful message.",
    highlights: ["Heartwarming characters", "Easy-to-follow stories", "Positive life lessons"],
    bestFor: "Beginners and readers who enjoy gentle short stories.",
  },
  "mystery house": {
    about:
      "Follow the clues through an abandoned mansion where every room holds a new secret. Mystery House invites you to observe carefully and solve the puzzle before the final reveal.",
    highlights: ["Clue-based storytelling", "Suspenseful setting", "Unexpected twists"],
    bestFor: "Readers who love suspense, puzzles, and mysteries.",
  },
};

const getBookDetails = (book) => {
  const title = `${book.name || ""} ${book.title || ""}`.toLowerCase();
  const matchingTitle = Object.keys(detailsByTitle).find((key) =>
    title.includes(key)
  );

  return (
    detailsByTitle[matchingTitle] || {
      about:
        book.title ||
        "A useful addition to your reading list, with ideas and stories to explore at your own pace.",
      highlights: [
        "Clear and engaging content",
        "Useful ideas for every reader",
        "Enjoyable learning experience",
      ],
      bestFor: "Readers looking for an interesting and useful book.",
    }
  );
};

const BookDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [book, setBook] = useState(state?.book || null);
  const [isLoading, setIsLoading] = useState(!state?.book);
  const [error, setError] = useState("");

  useEffect(() => {
    if (book) {
      return;
    }

    const getBook = async () => {
      try {
        const response = await axios.get("https://bookstoreapp-backend-7uwe.onrender.com/book");
        const foundBook = response.data.find(
          (item) => String(item._id || item.id) === id
        );

        if (!foundBook) {
          setError("Book not found.");
          return;
        }

        setBook(foundBook);
      } catch {
        setError("We could not load this book. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    getBook();
  }, [book, id]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 pb-16 pt-28 text-black">
        <section className="mx-auto max-w-5xl">
          {isLoading && <p>Loading book details...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {book && (
            <div className="rounded-2xl bg-pink-50 p-6 shadow-sm md:p-10">
              <div className="grid gap-10 md:grid-cols-2">
              <img
                src={book.image}
                alt={book.name}
                className="mx-auto max-h-[28rem] w-full rounded-xl object-cover"
              />
              <div className="flex flex-col justify-center">
                <span className="badge badge-secondary w-fit">
                  {book.category}
                </span>
                <h1 className="mt-4 text-4xl font-bold">{book.name}</h1>
                <p className="mt-4 text-lg text-gray-700">
                  {getBookDetails(book).about}
                </p>
                <p className="mt-6 text-2xl font-semibold text-pink-600">
                  ${book.price}
                </p>
                <Link
                  to={`/buy/${book._id || book.id}`}
                  state={{ book }}
                  className="btn mt-8 w-fit bg-pink-500 text-white hover:bg-pink-600"
                >
                  Buy now
                </Link>
                <Link
                  to="/"
                  className="btn mt-3 w-fit"
                >
                  Back to books
                </Link>
              </div>
              </div>

              <div className="mt-10 border-t border-pink-200 pt-8">
                <h2 className="text-2xl font-bold">What you will discover</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {getBookDetails(book).highlights.map((highlight) => (
                    <div key={highlight} className="rounded-lg bg-white p-4">
                      <p className="font-medium">{highlight}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-gray-700">
                  <span className="font-semibold">Perfect for: </span>
                  {getBookDetails(book).bestFor}
                </p>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BookDetails;
