import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-4 pb-16 pt-28 text-black">
        <section className="mx-auto max-w-4xl">
          <p className="font-semibold uppercase tracking-widest text-pink-500">
            About DaisyUI BookStore
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            A welcoming place for curious readers
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We help readers find inspiring books and straightforward learning
            resources in one friendly space. Whether you are starting a new
            subject or looking for your next story, our goal is to make
            discovery easy.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border p-5">
              <strong className="text-2xl text-pink-500">100+</strong>
              <p className="mt-2 text-gray-600">Books and resources</p>
            </div>
            <div className="rounded-xl border p-5">
              <strong className="text-2xl text-pink-500">24/7</strong>
              <p className="mt-2 text-gray-600">Learn at your pace</p>
            </div>
            <div className="rounded-xl border p-5">
              <strong className="text-2xl text-pink-500">1 goal</strong>
              <p className="mt-2 text-gray-600">Make learning enjoyable</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
