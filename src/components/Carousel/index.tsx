import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import img1 from "../../images/mouse2.png";
import img2 from "../../images/logo.png";
import img3 from "../../images/bg.png";

interface CaruselProps {
  callback: Function;
}

export const Carousel = ({ callback }: CaruselProps) => {
  const array = [img1, img2];

  const [img, setImg] = useState(0);

  const [img1className, setimg1className] = useState(
    "w-100 h-100 border-btnY hover:border border"
  );
  const [img2className, setimg2className] = useState(
    "w-100 h-100 border-btnY hover:border"
  );
  const [img3className, setimg3className] = useState(
    "w-100 h-100 border-btnY hover:border"
  );

  return (
    <div className="">
      <div className="w-350 h-350 m-auto">
        <img
          src={array[img]}
          alt="Duckmouse"
          className="w-150 m-auto mt-0"
          placeholder="none"
        />
      </div>
      <div className="flex felx-row justify-around">
        <div
          className={img1className}
          onClick={() => {
            setImg(0);
            setimg1className("w-100 h-100 border-btnY hover:border border");
            setimg2className("w-100 h-100 border-btnY hover:border");
            setimg3className("w-100 h-100 border-btnY hover:border");
            callback(true);
          }}
        >
          <img
            src={img1}
            alt="Duckmouse"
            className="h-full m-auto"
            placeholder="none"
          />
        </div>
        <div
          className={img2className}
          onClick={() => {
            setImg(1);
            setimg1className("w-100 h-100 border-btnY hover:border");
            setimg2className("w-100 h-100 border-btnY hover:border border");
            setimg3className("w-100 h-100 border-btnY hover:border");
            callback(false);
          }}
        >
          <img
            src={img2}
            alt="Duckmouse"
            className="h-full m-auto"
            placeholder="none"
          />
        </div>
        <div
          className={img3className}
          onClick={() => {
            setImg(2);
            setimg1className("w-100 h-100 border-btnY hover:border");
            setimg2className("w-100 h-100 border-btnY hover:border");
            setimg3className("w-100 h-100 border-btnY hover:border border");
            callback(false);
          }}
        >
          <img
            src={img3}
            alt="Duckmouse"
            className="h-full m-auto"
            placeholder="none"
          />
        </div>
      </div>
    </div>
  );
};
