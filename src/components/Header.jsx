import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const handlePageMoving = (value) => {
    if (value === location.pathname) {
      return true;
    }
  };
  return (
    <header className="flex items-center justify-between my-2">
      <div className="ml-6">
        <img src={logo} alt="logo" />
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
  );
}
