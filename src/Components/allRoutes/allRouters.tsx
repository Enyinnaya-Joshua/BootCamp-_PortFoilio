import React from "react";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Work from "../Work/Work";
import { useRoutes } from "react-router-dom";
import Service from "../Service/Service";

const AllRouter = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/work",
      element: <Work />,
    },
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return element;
};

export default AllRouter;
