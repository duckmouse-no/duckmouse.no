import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Desc = () => (
  <div className="flex flex-col text-left w-full mb-2 mt-5">
    <p>Specs:</p>
    <div className="flex flex-col ml-3">
      <p>- blå</p>
      <p>- 1000 dpi</p>
      <p>- 3 knapper</p>
      <p>- skrollehjul</p>
      <p>- vedlig tøff</p>
      <p>- 1 meter lang kabel</p>
      <p>- inneholder en flytende and!</p>
    </div>
  </div>
);
