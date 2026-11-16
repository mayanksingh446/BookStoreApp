import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
      const [authUser,setAuthUser] = useAuth();
      const [search, setSearch] = useState("");
      const navigate = useNavigate();

      const handleSearch = (event) => {
        event.preventDefault();
        const query = search.trim();
        if (query) {
          navigate(`/search?q=${encodeURIComponent(query)}`);
        }
      };

  const navbar = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/courses">Course</a>
      </li>
      <li>
        <Link to="/content">Content</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/purchased">My Books</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="w-full text-white fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-sm">
        <div className="navbar w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navbar}
              </ul>
            </div>
            <a className="btn btn-ghost font-bold cursor-pointer text-2xl">
              DaisyUI
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navbar}</ul>
            </div>
            <form onSubmit={handleSearch} className="hidden md:block">
              <label className="input outline-none rounded-md">
                <svg
                  className="h-[1em] opacity-50 "
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
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search books"
                  aria-label="Search books"
                />
              </label>
            </form>
            {authUser ? (<Logout/>):
            (<div>
              <button
                type="button"
                onClick={() =>
                  document.getElementById("my_modal_3")?.showModal()
                }
                className="btn ml-2 bg-pink-500 rounded-md"
              >
                Login
              </button>

              <Login />
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
