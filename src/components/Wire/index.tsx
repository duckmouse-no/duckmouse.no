import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

interface WireProps {
  show: boolean;
}

export const Wire = ({ show }: WireProps) => {
  let className =
    "mix-blend-multiply md:min-h-mouseLG min-h-mouse w-2 mr-28 invisible md:visible";

  if (!show) {
    className = "mix-blend-multiply md:min-h-mouseLG min-h-mouse w-1 invisible";
  }

  return (
    <div className="m-auto">
      <StaticImage
        src="../../images/wire2.png"
        alt="wire"
        width={200}
        className={className}
        placeholder="none"
      />
    </div>
  );
};
