import React from "react";
// import "./Banner.css";
export default function Banner() {
  return (
    <div className="banner bg-gradient-to-r from-cyan-400 to-blue-200  my-6 mx-1 rounded-lg ">
      <div className="w-2/3 mx-auto h-[500px] flex    justify-center items-center ">
        <div className=" space-y-4">
          <h1 className="text-4xl text-center font-bold  ">
            I Grow By Helping People In Need
          </h1>
          <input
            type="text"
            className="w-full px-4 py-4 rounded-md "
            name=""
            placeholder="search here..."
            id=""
          />
          <button className="bg-orange-600 border-0 px-10 rounded-xl py-3">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
