import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import "./Navbar.css";

const NavbarDesktop = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section className="flex items-center justify-baseline gap-[200px] h-full w-full ">
      <div className="pages flex gap-6">
        <div
          className="relative group"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <NavLink to="/" className="link">
            Home
          </NavLink>

          <div
            className={`absolute left-0 z-10 w-[300px] bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out ${
              showDropdown
                ? "opacity-100 scale-100 translate-y-0 visible pointer-events-auto"
                : "opacity-0 scale-95 translate-y-2 invisible pointer-events-none"
            }`}
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

        <NavLink to="/course" className="link">
          Course
        </NavLink>
        <NavLink to="/admin" className="link">
          Admission
        </NavLink>
        <NavLink to="/gallery" className="link">
          Gallery
        </NavLink>
        <NavLink to="/contactus" className="link">
          ContactUs
        </NavLink>
      </div>

      <div className="platform flex gap-8 text-2xl justify-end">
        <FaFacebook className="cursor-pointer text-blue-600 " />
        <BsWhatsapp className="cursor-pointer text-green-500" />
        <CiInstagram className="cursor-pointer text-pink-500" />
      </div>
    </section>
  );
};

export default NavbarDesktop;
