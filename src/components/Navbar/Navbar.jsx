import React from "react";
import "./navbar.css";
import NavbarDesktop from "./NavbarDesktob";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-child h-full w-full grid items-center justify-baseline grid-cols-2 lg:grid-cols-[15%_1fr]">
        <div className="logo">
          <h1>KIAHTC</h1>
          <p>Loremeo ipsum dolor.</p>
        </div>

        <div className="hidden lg:block">
          <NavbarDesktop />
        </div>

        <div className="flex justify-end lg:hidden">
          <NavbarMobile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
