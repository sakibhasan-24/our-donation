import React from "react";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Donation from "./components/Donation";
import Statistics from "./components/Statistics";
import Banner from "./components/Banner";
import DonationType from "./components/DonationType";
import DonateNow from "./components/DonateNow";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <DonationType /> },
        {
          path: "/donation",
          element: <Donation />,
        },
        { path: "/statistics", element: <Statistics /> },
        {
          path: "/donate-now/:id",
          loader: () => fetch("donationDetails.json"),
          element: <DonateNow />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
