import React, { useState } from "react";
import { getClassName } from "./classNameHelper";

interface ButtonProps {
  label: string;
  size?: "s" | "m" | "l" | "xl";
  type?: "squere" | "round";
  active?: true | false;
  onClick: () => void;
}

export const Button = ({
  label,
  size = "m",
  type = "round",
  active = true,
  onClick,
}: ButtonProps) => {
  const [className, setClassName] = useState(getClassName(size, type, active));

  const handleMouseDown = () => {
    if (active) {
      setClassName(className + " mt-3px -mb-3px drop-shadow-btnC");
    }
  };

  const handleMouseUp = () => {
    if (active) {
      setClassName(getClassName(size, type, active));
    }
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onPointerLeave={handleMouseUp}
      onClick={onClick}
      className={className}
    >
      {label}
    </button>
  );
};
