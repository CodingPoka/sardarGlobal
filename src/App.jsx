import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Client from "./components/Clients";
import Contact from "./components/Contact";
// import Membership from "./components/Membership";
import About from "./components/About";
import Certificate from "./components/Certificate";
import Partners from "./components/Partners";
import Expertise from "./components/Expertise";
import AdminNavbar from "./components/AdminNavbar";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminTopItems from "./components/AdminTopItems";
import AdminProduct from "./components/AdminProduct";
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
  // {
  //   path: "/membership",
  //   element: (
  //     <div>
  //       <Navbar />
  //       <Membership />
  //     </div>
  //   ),
  // },
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
  {
    path: "/admin/login/sardarGlobal/bangladesh/trade",
    element: (
      <div>
        <AdminLogin />
      </div>
    ),
  },
  {
    path: "/admin/AdminDashboard/sardarGlobal/bangladesh/trade",
    element: (
      <div>
        <AdminNavbar />
        <AdminDashboard />
      </div>
    ),
  },
  {
    path: "/admin/AdminTopItems/sardarGlobal/bangladesh/trade",
    element: (
      <div>
        <AdminNavbar />
        <AdminTopItems />
      </div>
    ),
  },
  {
    path: "/admin/AdminProduct/sardarGlobal/bangladesh/trade",
    element: (
      <div>
        <AdminNavbar />
        <AdminProduct />
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
