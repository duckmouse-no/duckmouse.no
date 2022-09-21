import React, { useState } from "react";
import img1 from "../../images/mouse2.png";
import img2 from "../../images/dm2.jpg";
import img3 from "../../images/dm1.jpg";

interface CaruselProps {
  setShowWire: (boolean) => void;
}

export const Carousel = ({ setShowWire }: CaruselProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = [
    { image: img1, alt: "Duckmouse from above" },
    { image: img2, alt: "Duckmouse logo" },
    { image: img3, alt: "Alternative Duckmouse logo" },
  ];

  const getClassName = (imageIndex: number) => {
    if (imageIndex === selectedImageIndex)
      return "w-100 h-100 border-btnA border-2 cursor-pointer";

    return "w-100 h-100 hover:border-btnA border-2 border-white cursor-pointer";
  };

  return (
    <div>
      <div className="w-350 h-[320px] m-auto">
        <img
          src={images[selectedImageIndex].image}
          alt="Preview Image"
          className="w-150 m-auto mt-0"
        />
      </div>
      <div className="flex felx-row justify-around">
        {images.map((img, i) => (
          <div
            key={i}
            className={getClassName(i)}
            onClick={() => {
              setSelectedImageIndex(i);
              setShowWire(!i);
            }}
          >
            <img src={img.image} alt={img.alt} className="h-full m-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};
