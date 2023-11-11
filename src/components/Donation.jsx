import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreDonateItems } from "../Db/localstorage";

export default function Donation() {
  const donateData = useLoaderData();
  const [givenDonate, setGivenDonate] = useState([]);

  return <div>Donation {givenDonate.length} </div>;
}
