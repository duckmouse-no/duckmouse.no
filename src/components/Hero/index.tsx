import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Hero = () => (
  <nav className="w-screen py-2 border-b-2 h-48 flex relative">
    <StaticImage
      src="../../images/header2.jpg"
      alt="Dam"
      style={{ position: "absolute" }}
      className="w-full h-full absolute top-0 left-0 z-0"
    />
    <div className="m-auto">
      <StaticImage
        src="../../images/dm-qual.png"
        alt="logo"
        class="rounded-full w-32"
      />
    </div>
  </nav>
);
