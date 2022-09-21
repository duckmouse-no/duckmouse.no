import { Link } from "gatsby";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("/");

  useState(() => {
    const pathname = window.location.pathname;
    setSelectedTab(pathname);
  }, []);

  return (
    <nav className="w-screen py-4 shadow-md flex place-content-evenly">
      <ul className="flex flex-row gap-8">
        <li
          className={
            selectedTab === "/" ? "text-black font-medium" : "text-gray-600"
          }
        >
          <Link to="/" onClick={() => setSelectedTab("home")}>
            duckmouse
          </Link>
        </li>
        <li
          className={
            selectedTab === "/om-oss"
              ? "text-gray-900 font-medium"
              : "text-gray-600"
          }
        >
          <Link to="/om-oss" onClick={() => setSelectedTab("om-oss")}>
            om oss
          </Link>
        </li>
        <li
          className={
            selectedTab === "/faq"
              ? "text-gray-900 font-medium"
              : "text-gray-600"
          }
        >
          <Link to="/faq" onClick={() => setSelectedTab("faq")}>
            faq
          </Link>
        </li>
      </ul>
    </nav>
  );
};
