import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Banner from "./Banner";

export default function Home() {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
}
