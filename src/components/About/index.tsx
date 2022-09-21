import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../Button";
import { Desc } from "../Desc";

export const About = () => (
  <div className="flex flex-col w-full">
    <p className="text-6xl m-auto md:m-0">Duckmouse</p>
    <p className="text-m m-auto md:m-0">Den siste musen du noengang vil trenge.</p>

    <div className="flex flex-row m-auto md:m-0 md:my-5 my-5">
      <Button
        label="Kjøp!"
        size="l"
        type="round"
        active={true}
        onClick={() =>
          location.replace("http://46.101.120.64/create-checkout-session")
        }
      ></Button>
      <p className="ml-5 my-auto">300,-</p>
    </div>

    <Desc></Desc>
  </div>
);
