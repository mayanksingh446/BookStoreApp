import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Buy = () => {
  const { state } = useLocation();
  const book = state?.book;
  const [authUser] = useAuth();
  const [purchased, setPurchased] = React.useState(false);

  const handlePurchase = () => {
    if (!authUser) {
      toast.error("Please login first to purchase this book.");
      const loginModal = document.getElementById("my_modal_3");
      if (loginModal && !loginModal.open) {
        loginModal.showModal();
      }
      return;
    }

    const purchasedBooks = JSON.parse(
      localStorage.getItem("PurchasedBooks") || "[]"
    );
    const bookId = book._id || book.id;
    const alreadyPurchased = purchasedBooks.some(
      (item) => String(item._id || item.id) === String(bookId)
    );

    if (!alreadyPurchased) {
      localStorage.setItem(
        "PurchasedBooks",
        JSON.stringify([...purchasedBooks, book])
      );
    }

    setPurchased(true);
    toast.success("Purchase successful!");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 pb-16 pt-28 text-black">
        <section className="mx-auto max-w-2xl rounded-2xl bg-pink-50 p-6 text-center shadow-sm md:p-10">
          <p className="font-semibold uppercase tracking-widest text-pink-500">
            Purchase preview
          </p>
          <h1 className="mt-3 text-3xl font-bold">Ready to get this book?</h1>
          {book ? (
            <>
              <p className="mt-4 text-lg text-gray-700">
                You selected <span className="font-semibold">{book.name}</span>.
              </p>
              <p className="mt-3 text-2xl font-semibold text-pink-600">
                ${book.price}
              </p>
            </>
          ) : (
            <p className="mt-4 text-gray-700">
              Select a book from the home page to continue.
            </p>
          )}
          <p className="mt-6 text-sm text-gray-500">
            This is a demo page. No payment or real purchase will be made.
          </p>
          {purchased ? (
            <div className="mt-8">
              <div
                className="text-8xl font-bold text-green-500"
                aria-label="Purchase successful"
              >
                ✓
              </div>
              <h2 className="mt-3 text-2xl font-bold text-green-600">
                Purchased successfully!
              </h2>
            </div>
          ) : (
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handlePurchase}
                disabled={!book}
                className="btn min-w-36 bg-pink-500 text-white hover:bg-pink-600 disabled:bg-gray-300"
              >
                Purchase now
              </button>
              <Link to="/" className="btn min-w-36">
                Back to books
              </Link>
            </div>
          )}
          {purchased && (
            <Link to="/" className="btn mt-6 min-w-36">
              Back to books
            </Link>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Buy;
