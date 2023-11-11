import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleDonation from "./SingleDonation";

export default function DonationType() {
  const [donationList, setOfDonationList] = useState([]);
  useEffect(() => {
    fetch("/donationDetails.json")
      .then((res) => res.json())
      .then((data) => setOfDonationList(data));
  }, []);
  return (
    <div className="max-w-6xl gap-4 mx-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {donationList.map((donation) => (
        <SingleDonation donation={donation} key={donation.id} />
      ))}
    </div>
  );
}
