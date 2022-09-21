import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "../components/Footer";
import favicon from "../images/logo.png";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";

export const Layout = ({ children }) => (
  <React.Fragment>
    <Helmet
      meta={[
        {
          name: "description",
          content: "duckmouse - en veldig tøff datamus",
        },
      ]}
    >
      <meta charSet="utf-8" />
      <title>duckmouse.no</title>
      <link rel="icon" href={favicon} />
    </Helmet>
    <div className="flex flex-col h-screen overflow-x-hidden">
      <div>
        <Hero />
        <Navbar />
        {children}
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  </React.Fragment>
);
