import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import Banner from "./Banner";

export default function Header() {
  const location = useLocation();
  const handlePageMoving = (value) => {
    if (value === location.pathname) {
      return true;
    }
  };
  //   `background-image: url('../assests/Logo.png'') height: 400px" `
  return (
    <>
      <header className={` flex  items-center justify-between my-2 `}>
        <div className="w-2/3 md:w-full lg:w-full ">
          <img src={logo} className="" alt="logo" />
        </div>
        <div>
          <ul className="flex justify-around space-x-7 mx-8 font-semibold">
            <li>
              <Link
                className={`${
                  handlePageMoving("/") &&
                  "text-red-600 border-b-2 border-b-red-600"
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  handlePageMoving("/donation") &&
                  "text-red-600 border-b-2 border-b-red-600"
                }`}
                to="/donation"
              >
                Donation
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  handlePageMoving("/statistics") &&
                  "text-red-600 border-b-2 border-b-red-600"
                }`}
                to="/statistics"
              >
                Statistics
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <Banner />
    </>
  );
}
