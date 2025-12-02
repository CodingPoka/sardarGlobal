import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import mainLogo from "../assets/logo/mainLogo.png";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  { name: "Client", to: "/clients" },
  { name: "Partner", to: "/partners" },
  { name: "Expertise", to: "/expertise" },
  { name: "Certificate", to: "/certificate" },
  { name: "About Us", to: "/about" },
  { name: "Contact Us", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 shadow-lg border-b border-blue-800">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex h-16 md:h-18 lg:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <NavLink to="/" className="flex items-center gap-2">
              {/* <img
                src={mainLogo}
                alt="Company Logo"
                className="h-10 w-auto object-contain"
              /> */}
              <img
                src={mainLogo}
                alt="Company Logo"
                className="h-12 md:h-14 lg:h-16 xl:h-16 w-auto object-contain"
              />
              <div className="hidden sm:flex flex-col">
                <span className="text-base md:text-lg xl:text-xl font-semibold text-white tracking-tight">
                  Sardar Global Trading Co. Ltd
                </span>
                <span className="text-xs md:text-sm text-amber-400 font-light italic tracking-wide">
                  ---------- Your Personal Trading Company
                </span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4 2xl:gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 xl:px-4 2xl:px-5 text-sm xl:text-base font-medium rounded-md transition-colors duration-150 
                  ${
                    isActive
                      ? "text-amber-400 border-b-2 border-amber-400"
                      : "text-gray-200 hover:text-white hover:bg-blue-800/50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:text-white hover:bg-blue-800/50"
            >
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-blue-950 border-t border-blue-800">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm font-medium 
                  ${
                    isActive
                      ? "text-amber-400 bg-blue-800/50"
                      : "text-gray-200 hover:text-white hover:bg-blue-800/50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
