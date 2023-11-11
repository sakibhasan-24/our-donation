import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreDonateItems } from "../Db/localstorage";
import SingleDonateItem from "./SingleDonateItem";

export default function Donation() {
  const donateData = useLoaderData();
  const [givenDonate, setGivenDonate] = useState([]);
  const [initialLoad, setInitialLoad] = useState(4);
  useEffect(() => {
    const storedDonateList = getStoreDonateItems();
    if (donateData.length > 0) {
      const donateList = [];
      for (const id of storedDonateList) {
        const donate = donateData.find((donate) => donate.id === id);
        if (donate) {
          donateList.push(donate);
        }
      }
      setGivenDonate(donateList);
      // console.log(jobs, storedJobIds, jobsApplied)
    }
  }, []);

  const handleShowAll = () => {
    setInitialLoad(givenDonate.length);
  };
  return (
    <div className="my-12 ">
      <h1 className="text-center font-bold text-2xl">
        i am donating {givenDonate.length} times
      </h1>
      <div className="grid grid-cols-2 gap-4 my-2 mx-4">
        {givenDonate.slice(0, initialLoad).map((donate, idx) => (
          <SingleDonateItem key={idx} donate={donate} />
        ))}
      </div>
      <button
        onClick={handleShowAll}
        className={`w-[200px] ml-28 my-10 bg-blue-600 border-0 text-white font-bold px-4 py-2 ${
          givenDonate.length <= 4 ? "hidden" : ""
        }`}
      >
        See All
      </button>
    </div>
  );
}
