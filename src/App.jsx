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
import TopItems from "./components/TopItems";
import TopItemDetail from "./components/TopItemDetail";
import ProductDetail from "./components/ProductDetail";
import AdminNavbar from "./components/AdminNavbar";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminTopItems from "./components/AdminTopItems";
import AdminProduct from "./components/AdminProduct";
import Footer from "./shared/Footer";
import AdminFooter from "./components/AdminFooter";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <TopItems />
        <Certificate />
        <Contact />
        <Footer />
      </div>
    ),
  },
  {
    path: "/products",
    element: (
      <div>
        <Navbar />
        <Product />
        <Footer />
      </div>
    ),
  },
  {
    path: "/product/:categoryId/:productId",
    element: (
      <div>
        <Navbar />
        <ProductDetail />
        <Footer />
      </div>
    ),
  },
  {
    path: "/clients",
    element: (
      <div>
        <Navbar />
        <Client />
        <Footer />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact />
        <Footer />
      </div>
    ),
  },

  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
        <Footer />
      </div>
    ),
  },
  {
    path: "/certificate",
    element: (
      <div>
        <Navbar />
        <Certificate />
        <Footer />
      </div>
    ),
  },
  {
    path: "/partners",
    element: (
      <div>
        <Navbar />
        <Partners />
        <Footer />
      </div>
    ),
  },
  {
    path: "/expertise",
    element: (
      <div>
        <Navbar />
        <Expertise />
        <Footer />
      </div>
    ),
  },
  {
    path: "/top-items",
    element: (
      <div>
        <Navbar />
        <TopItems />
        <Footer />
      </div>
    ),
  },
  {
    path: "/top-items/:id",
    element: (
      <div>
        <Navbar />
        <TopItemDetail />
        <Footer />
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
        <AdminFooter />
      </div>
    ),
  },
  {
    path: "/admin/AdminTopItems/sardarGlobal/bangladesh/trade",
    element: (
      <div>
        <AdminNavbar />
        <AdminTopItems />
        <AdminFooter />
      </div>
    ),
  },
  {
    path: "/admin/AdminProduct/sardarGlobal/bangladesh/trade",
    element: (
      <div>
        <AdminNavbar />
        <AdminProduct />
        <AdminFooter />
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
