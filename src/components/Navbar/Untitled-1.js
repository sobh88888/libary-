import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaBars, FaTimes } from "react-icons/fa"; // Import menu icons
import { BsWhatsapp } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false); // State for mobile menu

  return (
    <nav className="navbar">
      <div className="navbar-child">
        {/* Logo & Mobile Menu Icon */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="logo">
            <h1>KIAHTC</h1>
            <p>Loremeo ipsum dolor.</p>
          </div>
          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden text-xl p-2"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`pages lg:flex ${mobileMenu ? "block" : "hidden"}`}>
          {/* Home with Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <NavLink
              to="/"
              className="link"
              onClick={() => mobileMenu && setMobileMenu(false)}
            >
              Home
            </NavLink>

            {/* Dropdown */}
            <div
              className={`absolute left-0 z-10 mt-2 w-[300px] bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out ${
                showDropdown
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              } lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:visible lg:block`}
            >
              <ul className="grid grid-cols-3 gap-2 p-3">
                {[
                  "Service 1",
                  "Service 2",
                  "Service 3",
                  "Service 4",
                  "Service 5",
                  "Service 6",
                ].map((service, index) => (
                  <li
                    key={index}
                    className="p-3 text-gray-700 hover:bg-gray-200 rounded-md transition-all duration-200 cursor-pointer"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Other Links */}
          {["Course", "Admission", "Gallery", "ContactUs"].map(
            (item, index) => (
              <NavLink
                key={index}
                to={`/${item.toLowerCase()}`}
                className="link"
                onClick={() => mobileMenu && setMobileMenu(false)}
              >
                {item}
              </NavLink>
            )
          )}
        </div>

        {/* Social Icons (Always Visible) */}
        <div className="platform">
          <h3>
            <FaFacebook />
          </h3>
          <h3>
            <BsWhatsapp />
          </h3>
          <h3>
            <CiInstagram />
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
