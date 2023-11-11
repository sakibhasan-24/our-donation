import React from "react";
import { Link } from "react-router-dom";

export default function SingleDonateItem({ donate }) {
  return (
    <section
      style={{ backgroundColor: `${donate.card_bg}` }}
      className="grid  grid-cols-3 bg-red-400 rounded-lg"
    >
      <div className=" px-2 rounded-lg w-full">
        <img className="w-full py-2" src={donate.picture} alt="image" />
      </div>
      <div className=" flex flex-col justify-center">
        <h1
          style={{
            backgroundColor: `${donate.text_button_bg}`,
            color: `${donate.category_bg}`,
          }}
          className="text-2xl w-2/3 px-2 py-1 rounded-md font-bold"
        >
          {donate.category}
        </h1>
        <h1 className="text-black font-bold">{donate.title}</h1>
        <h1 className="font-bold" style={{ color: `${donate.category_bg}` }}>
          {donate.price}
        </h1>
        <Link
          style={{ backgroundColor: `${donate.category_bg}` }}
          className="text-white font-bold rounded-md px-3 py-1"
          to=""
        >
          View Details
        </Link>
      </div>
    </section>
  );
}
