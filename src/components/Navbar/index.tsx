import React from "react";
import logo from "../../images/logo.png";

export const Navbar = () => (
  <nav className="w-screen pt-3 pb-2 shadow-md flex justify-center">
    <p className="text-center text-xl flex-initial">duckmouse.no</p>
    <img
      className="h-8 rounded-full flex-initial ml-2"
      src={logo}
      alt="logo"
    ></img>
  </nav>
);
