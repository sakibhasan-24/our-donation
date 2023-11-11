import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { storeInLocalStorage } from "../Db/localstorage";
import { toast } from "react-toastify";

export default function DonateNow() {
  const data = useLoaderData();
  //   console.log(data);
  const { id } = useParams();
  const donate = data.find((doanateData) => doanateData.id == id);
  //   console.log(donate);
  const idInt = Number(id);
  const handleReceivedDonate = () => {
    toast.success(`thanks we get your donation for ${donate.category}`);
    storeInLocalStorage(id);
  };
  return (
    <section className="max-w-2xl mx-auto">
      <div className="relative">
        <img className="w-full my-8  rounded-lg" src={donate.picture} alt="" />
        <div className=" w-full h-14  bg-gray-800 absolute bottom-0 bg-blend-overlay opacity-50">
          <Link
            onClick={handleReceivedDonate}
            style={{ backgroundColor: `${donate.category_bg}` }}
            className="text-xl mx-2 font-bold text-white px-2 py-1 rounded-md"
            to={`/donation`}
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
