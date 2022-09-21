import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

export const MouseTitle = () => (
  <div className="flex flex-col  text-left w-full mb-2">
    <p className="text-4xl lg:text-6xl">Duckmouse</p>
    <p className="text-m">Den siste musen du noengang vil trenge.</p>
    <p>300,-</p>
  </div>
);
