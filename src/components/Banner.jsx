import React, { createContext, useState } from "react";
import "./Banner.css";
// export const AuthContext = createContext({});
export default function Banner() {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchValue = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  // const contextValue = { searchValue, handleSearchValue };
  return (
    <div
      className="banner  my-6 mx-1 rounded-lg opacity-80  "
      // value={searchValue}
    >
      <div className="w-2/3 mx-auto h-[500px] flex    justify-center items-center ">
        <div className=" space-y-4">
          <h1 className="text-4xl text-center text-black font-bold  ">
            I Grow By Helping People In Need
          </h1>
          <form>
            <input
              type="text"
              className="w-full px-4 py-4 rounded-md bg-gray-500 my-4  "
              name=""
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="search here..."
              id=""
            />
            <button
              onClick={handleSearchValue}
              className="bg-orange-600 border-0 px-10 rounded-xl py-3"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
