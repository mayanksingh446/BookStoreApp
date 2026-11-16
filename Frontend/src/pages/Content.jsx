import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Content = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-4 pb-16 pt-28 text-black">
        <section className="mx-auto max-w-5xl">
          <p className="font-semibold uppercase tracking-widest text-pink-500">
            Learn something new
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Explore our learning content
          </h1>
          <p className="mt-5 max-w-3xl text-gray-600">
            Find beginner-friendly books, practical courses, and useful guides
            designed to make learning simple, enjoyable, and consistent.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Free courses", "Learn at your own pace with accessible courses on useful topics."],
              ["Recommended books", "Discover stories and educational books selected for every reader."],
              ["Learning guides", "Use clear guides and practical tips to build better study habits."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-xl bg-pink-50 p-6 shadow-sm">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="mt-3 text-gray-600">{description}</p>
              </article>
            ))}
          </div>

          <Link to="/courses" className="btn mt-10 bg-pink-500 text-white hover:bg-pink-600">
            Browse courses
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Content;
