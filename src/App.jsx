import React from "react";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Donation from "./components/Donation";
import Statistics from "./components/Statistics";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/donation",
          element: <Donation />,
        },
        { path: "/statistics", element: <Statistics /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
