import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-xl">Title</span>
      </div>

      <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-grow">
          <a
            href="#"
            className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-yellow-200 mr-4"
          >
            Business
          </a>
          <a
            href="#"
            className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-yellow-200 mr-4"
          >
            Networking
          </a>
          <a
            href="#"
            className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-yellow-200"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-sm inline-block px-4 py-2 border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 sm:mt-0"
            >Login
          </a>
        </div>
      </div>
    </nav>
  );
}
