import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

export const BuyDesc = () => (
  <div className="flex flex-col  text-center w-full mt-10 mb-4">
    <p className="text-3xl lg:text-5xl mb-1">Duckmouse</p>
    <p className=" text-slate-500">Den siste musen du noengang vil trenge.</p>
    <p>300,-</p>
  </div>
);
