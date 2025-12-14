import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Client from "./components/Clients";
import Contact from "./components/Contact";
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
import ScrollToTop from "./components/ScrollToTop";
import ImvPartnership from "./components/ImvPartnership";
import NotFound from "./components/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <ScrollToTop />
        <Navbar />
        <Home />
        <TopItems />
        <ImvPartnership />
        <About />
        <Contact />
        <Footer />
        {/* <NotFound /> */}
      </div>
    ),
  },
  {
    path: "/products",
    element: (
      <div>
        <ScrollToTop />
        <Navbar />
        <Product />
        <Footer />

        {/* <NotFound /> */}
      </div>
    ),
  },
  {
    path: "/product/:categoryId/:productId",
    element: (
      <div>
        <ScrollToTop />
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
        <ScrollToTop />
        <Navbar />
        <Client />
        <Footer />
        {/* <NotFound /> */}
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <ScrollToTop />
        <Navbar />
        <Contact />
        <Footer />
        {/* <NotFound /> */}
      </div>
    ),
  },

  {
    path: "/about",
    element: (
      <div>
        <ScrollToTop />
        <Navbar />
        <About />
        <Footer />
        {/* <NotFound /> */}
      </div>
    ),
  },
  {
    path: "/certificate",
    element: (
      <div>
        <ScrollToTop />
        <Navbar />
        <Certificate />
        <Footer />

        {/* <NotFound /> */}
      </div>
    ),
  },
  {
    path: "/partners",
    element: (
      <div>
        <ScrollToTop />
        <Navbar />
        <Partners />
        <Footer />
        {/* <NotFound /> */}
      </div>
    ),
  },
  {
    path: "/expertise",
    element: (
      <div>
        <ScrollToTop />
        <Navbar />
        <Expertise />
        <Footer />
        {/* <NotFound /> */}
      </div>
    ),
  },
  {
    path: "/imv-partnership",
    element: (
      <div>
        <ScrollToTop />
        <Navbar />
        <ImvPartnership />
        <Footer />
        {/* <NotFound /> */}
      </div>
    ),
  },
  {
    path: "/top-items",
    element: (
      <div>
        <ScrollToTop />
        <Navbar />
        <TopItems />
        <Footer />

        {/* <NotFound /> */}
      </div>
    ),
  },
  {
    path: "/top-items/:id",
    element: (
      <div>
        <ScrollToTop />
        <Navbar />
        <TopItemDetail />
        <Footer />
      </div>
    ),
  },
  {
    path: "/admin/login/sardarGlobal/bangladesh/trade/",
    element: (
      <div>
        <ScrollToTop />
        <AdminLogin />
      </div>
    ),
  },
  {
    path: "/admin/AdminDashboard/sardarGlobal/bangladesh/trade/",
    element: (
      <div>
        <ScrollToTop />
        <AdminNavbar />
        <AdminDashboard />
        <AdminFooter />
      </div>
    ),
  },
  {
    path: "/admin/AdminTopItems/sardarGlobal/bangladesh/trade/",
    element: (
      <div>
        <ScrollToTop />
        <AdminNavbar />
        <AdminTopItems />
        <AdminFooter />
      </div>
    ),
  },
  {
    path: "/admin/AdminProduct/sardarGlobal/bangladesh/trade/",
    element: (
      <div>
        <ScrollToTop />
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
