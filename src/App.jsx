import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Client from "./components/Clients";
import Contact from "./components/Contact";
import Membership from "./components/Membership";
import About from "./components/About";
import Certificate from "./components/Certificate";
import Partners from "./components/Partners";
import Expertise from "./components/Expertise";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Certificate />
        <Contact />
      </div>
    ),
  },
  {
    path: "/products",
    element: (
      <div>
        <Navbar />
        <Product />
      </div>
    ),
  },
  {
    path: "/clients",
    element: (
      <div>
        <Navbar />
        <Client />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact />
      </div>
    ),
  },
  {
    path: "/membership",
    element: (
      <div>
        <Navbar />
        <Membership />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/certificate",
    element: (
      <div>
        <Navbar />
        <Certificate />
      </div>
    ),
  },
  {
    path: "/partners",
    element: (
      <div>
        <Navbar />
        <Partners />
      </div>
    ),
  },
  {
    path: "expertise",
    element: (
      <div>
        <Navbar />
        <Expertise />
      </div>
    ),
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
