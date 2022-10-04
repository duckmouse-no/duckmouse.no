import React from "react";
import { Button } from "../Button";
import { Description } from "../Desc";

export const About = () => (
  <div className="flex flex-col w-full">
    <p className="text-2xl m-auto md:m-0 font-bold mt-8">duckmouse</p>
    <p className="text-m italic font-medium my-2 m-auto md:m-0">
      click clack quack quack! 🐤
    </p>

    <p className="font-bold m-auto md:m-0">199,-</p>

    <div className="flex flex-row m-auto md:m-0 md:my-5 my-5">
      <Button
        label="Kjøp"
        size="l"
        type="squere"
        active
        onClick={() =>
          location.replace("http://46.101.120.64/create-checkout-session")
        }
      ></Button>
    </div>

    <Description />
  </div>
);
