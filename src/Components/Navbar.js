import React from "react";
import Home from "./Home";

function Navbar() {
  return (
    <div className="w-full">
      <div className="h-22 px-8 flex justify-between items-center bg-cyan-800 text-white ">
        <p className="text-2xl font-bold lg:w-1/5">Ecommerce App</p>
        <div id="menu" className="">
          <div className="items-center gap-5 lg:flex lg:gap-12 text-lg font-medium">
            <p className="inline-block my-6 hover:text-orange-600 text-lg font-medium">
              How it works
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-md font-medium mx-2">Name</p>
          <select className="w-24 h-8 text-gray-800 text-base">
            <option>All</option>
            <option>A-Z</option>
            <option>Z-A</option>
          </select>
          <p className="text-md font-medium mx-2">Price</p>
          <select className="w-24 h-8 text-gray-800 text-base">
            <option>All</option>
            <option>Highest to Lowest</option>
            <option>Lowest to Highest</option>
          </select>
        </div>
        <div className="flex mx-2 items-center">
          <p className="text-md font-medium mx-2">Sort by</p>
          <select className="w-48 h-8 text-gray-800 text-base">
            <option>Name</option>
            <option>Price</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
      <Home />
    </div>
  );
}

export default Navbar;
