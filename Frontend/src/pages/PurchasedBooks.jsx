import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthProvider";

const PurchasedBooks = () => {
  const [authUser] = useAuth();
  const purchasedBooks = JSON.parse(
    localStorage.getItem("PurchasedBooks") || "[]"
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 pb-16 pt-28 text-black">
        <section className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold">My purchased books</h1>
          {!authUser ? (
            <p className="mt-6 text-gray-600">
              Please login to view your purchased books.
            </p>
          ) : purchasedBooks.length === 0 ? (
            <p className="mt-6 text-gray-600">
              You have not purchased any books yet.
            </p>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {purchasedBooks.map((book) => (
                <article
                  key={book._id || book.id}
                  className="overflow-hidden rounded-xl bg-pink-50 shadow-sm"
                >
                  <img
                    src={book.image}
                    alt={book.name}
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-5">
                    <h2 className="text-xl font-bold">{book.name}</h2>
                    <p className="mt-2 text-gray-600">{book.title}</p>
                    <Link
                      to={`/book/${book._id || book.id}`}
                      state={{ book }}
                      className="btn mt-4 bg-pink-500 text-white hover:bg-pink-600"
                    >
                      View details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PurchasedBooks;
