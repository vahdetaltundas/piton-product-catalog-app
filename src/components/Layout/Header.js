import Link from "next/link";
import React, { useState } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <header>
      <nav className="flex flex-row bg-slate-100 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 h-16">
        <div className="basis-1/6 flex justify-center items-center">
          <Link href="/" className="w-[4rem] h-auto">
            <img src="/img/Logo.png" alt="logo" />
          </Link>
        </div>
        <div className="basis-2/3 flex items-center">
          <div className="w-full ">
            <div className="flex md:order-2">
              <div className="relative hidden md:block w-full ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="basis-1/6 flex justify-start items-center px-10 gap-6">
          <Link href="/auth/login">
            <FaRegUser className="w-6 h-6" />
          </Link>
          <FaRegHeart className="w-6 h-6" />
          <MdOutlineShoppingCart className="w-6 h-6" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
