import React from "react";
import logo from "../../images/logo.png";

export const Navbar = () => (
  <nav className="w-screen pt-2 pb-2 shadow-md flex place-content-evenly">
    <div className="lg:pl-1/4">
      <p className="text-center text-xl pt-1 hidden lg:inline">duckmouse.no</p>
      <img
        className="h-8 rounded-full lg:ml-2 inline"
        src={logo}
        alt="logo"
      ></img>
    </div>
    <p className="text-center text-slate-500 text-xl pt-1">Om oss</p>
  </nav>
);
