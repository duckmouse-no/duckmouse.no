import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

interface WireProps {
  show: boolean;
}

export const Wire = ({ show }: WireProps) => {
  let className = "m-auto mix-blend-multiply md:min-h-mouseLG min-h-mouse w-1";

  if (!show) {
    className = "m-auto mix-blend-multiply md:min-h-mouseLG min-h-mouse w-1 invisible";
  }

  return (
    <StaticImage
      src="../../images/wire2.png"
      alt="wire"
      width={200}
      className={className}
      placeholder="none"
    />
  );
};
