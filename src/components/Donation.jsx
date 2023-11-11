import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreDonateItems } from "../Db/localstorage";
import SingleDonateItem from "./SingleDonateItem";

export default function Donation() {
  const donateData = useLoaderData();
  const [givenDonate, setGivenDonate] = useState([]);

  useEffect(() => {
    const storedDonateList = getStoreDonateItems();
    if (donateData.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

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

  return (
    <div className="my-12">
      <h1 className="text-center font-bold text-2xl">
        i am donating {givenDonate.length} times
      </h1>
      <div className="grid grid-cols-2 gap-4 my-2 mx-4">
        {givenDonate.map((donate) => (
          <SingleDonateItem key={donate.id} donate={donate} />
        ))}
      </div>
    </div>
  );
}
