import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Mouse = () => (
  <div className="flex flex-col justify-center items-center w-5/6 m-auto">
    <StaticImage
      src="../../images/wire2.png"
      alt="wire"
      width={200}
      className="mix-blend-multiply min-h-mouse lg:min-h-mouseLG w-1 lg:w-1.5"
      placeholder="none"
    />
    <StaticImage
      src="../../images/mouse2.png"
      alt="Duckmouse"
      width={200}
      className="w-150 lg:w-200"
      placeholder="none"
    />
  </div>
);
