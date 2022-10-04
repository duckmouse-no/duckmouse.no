import { Link } from "gatsby";
import React from "react";

export const Navbar = () => (
  <nav className="w-screen py-4 shadow-md flex place-content-evenly">
    <ul className="flex flex-row gap-8">
      <li className="text-gray-600">
        <Link to="/" activeClassName="text-black font-medium">
          duckmouse
        </Link>
      </li>
      <li className="text-gray-600">
        <Link to="/bilder" activeClassName="text-black font-medium">
          bilder
        </Link>
      </li>
      <li className="text-gray-600">
        <Link to="/om-oss" activeClassName="text-black font-medium">
          om oss
        </Link>
      </li>
      <li className="text-gray-600">
        <Link to="/faq" activeClassName="text-black font-medium">
          faq
        </Link>
      </li>
    </ul>
  </nav>
);
