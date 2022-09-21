import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { EmailForm } from "../EmailForm";

export const Footer = () => (
  <footer className="w-screen bg-gray-100 md:h-72 h-full p-16 md:px-4 lg:px-16">
    <div className="md:w-750 m-auto md:flex md:flex-row">
      <div className="w-full">
        <h2 className="font-bold text-xl mb-4">Lenker</h2>
        <ul className="flex flex-row gap-8">
          <li className="text-md">
            <Link to="/om-oss">Om Oss</Link>
          </li>
          <li className="text-md">
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="sm:w-full mt-8 md:mt-0">
        <h2 className="font-bold text-xl mb-4">Nyhetsbrev</h2>
        <EmailForm />
      </div>
    </div>

    <hr className="mt-14 md:mt-12 mb-4" />

    <div className="md:w-750 m-auto text-center sm:text-left">
      <StaticImage
        src="../../images/stripe.png"
        alt="Powered By Stripe"
        className="w-32"
      />
      <p className="text-xs text-slate-500 mb-1 mt-8 sm:float-right sm:mt-2">
        duckmouse.no / 2022
      </p>
    </div>
  </footer>
);
