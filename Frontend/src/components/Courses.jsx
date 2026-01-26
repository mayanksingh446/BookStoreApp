import React from "react";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
import Card from "./Card";

const Courses = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto">
        <div className="mt-30 justify-center text-center items-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-4 justify-center text-center items-center ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            libero adipisci, ullam, quod sequi a fuga officiis officia ex
            tenetur nam aspernatur facere harum tempore itaque perspiciatis, quo
            qui. A dolores beatae maiores quam iusto ea porro iste est, in
            itaque commodi quis nemo nihil natus suscipit ipsam soluta facere!
          </p>
         <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full mt-5 hover:bg-pink-600 duration-300">
            Back
          </button> 
         </Link>
        </div>
        <div className="mt-2 grid  grid-cols-1 md:grid-cols-4 ">
          {list.map((item)=>(
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
