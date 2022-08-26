import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "../components/Footer";
import favicon from "../images/logo.png";

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
    {children}
    <Footer />
  </React.Fragment>
);
