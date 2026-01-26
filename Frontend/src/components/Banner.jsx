import React from "react";
import Baner from "../../public/Banner.jpg"

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto flex flex-col md:flex-row ml-3">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello,Welcome here to learn something
              <span className="text-pink-500">New everday!!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              eaque harum quis accusamus corporis, blanditiis, natus sit tempora
              unde repellat dolore minima doloremque a nisi quasi possimus
              cumque officiis alias.
            </p>
             <label className="input validator bg-white border-black mr-1 md:w-full ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          </div>
          <button className="btn btn-secondary">Secondary</button>
        </div>
        <div className="order-1 w-full md:w-1/2">
        <img src={Baner} className="ml-2 mt-5 w-160 h-160 object-fit"/>
        </div>
      </div>
    </>
  );
};

export default Banner;
