import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import DonationType from "./DonationType";

export default function Home() {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
}
