import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Mouse = () => (
  <div className="flex flex-col justify-center items-center w-5/6 m-auto max-w-1/3	">
    <StaticImage
      src="../../images/wire2.png"
      alt="wire"
      width={200}
      className="mix-blend-multiply min-h-1/2 w-1.5"
    />
    <StaticImage
      src="../../images/mouse2.png"
      alt="Duckmouse"
      width={200}
      className=""
      placeholder="none"
    />
  </div>
);
