import { Link } from "gatsby";
import React from "react";

export const Navbar = () => (
  <nav className="w-screen py-4 border-b-2 flex place-content-evenly">
    <ul className="flex flex-row gap-8">
      <li className="text-gray-900">
        <Link to="/">duckmouse</Link>
      </li>
      <li className="text-gray-600">
        <Link to="/om-oss">om oss</Link>
      </li>
      <li className="text-gray-600">
        <Link to="/om-oss">faq</Link>
      </li>
    </ul>
  </nav>
);
