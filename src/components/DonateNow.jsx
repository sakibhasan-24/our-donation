import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

export default function DonateNow() {
  const data = useLoaderData();
  const { id } = useParams();
  const donate = data?.find((doanateData) => doanateData.id == id);
  console.log(donate);
  const handleReceivedDonate = () => {};
  return (
    <section className="max-w-2xl mx-auto">
      <div className="relative">
        <img className="w-full my-8  rounded-lg" src={donate.picture} alt="" />
        <div className=" w-full h-14  bg-gray-800 absolute bottom-0 bg-blend-overlay opacity-50">
          <Link
            onClick={handleReceivedDonate}
            style={{ backgroundColor: `${donate.category_bg}` }}
            className="text-xl mx-2 font-bold text-white px-2 py-1 rounded-md"
            to={`/`}
          >
            Donate ${donate.price}
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-black font-bold text-4xl">
          Good {donate.category}
        </h1>
        <p className="text-gray-800 my-6">{donate.description}</p>
      </div>
    </section>
  );
}
