import React, { useState } from "react";

interface ButtonProps {
  label: string;
  type?: "primary" | "inactive";
}

const getClassName = (type) => {
  return type === "primary"
    ? "bg-btnA drop-shadow-btnA mb-4px mr-4px"
    : "bg-btnI drop-shadow-mdI mb-4px mr-4px cursor-default";
};

export const Button = ({ label, type = "primary" }) => {
  const [className, setClassName] = useState(getClassName(type));

  const handleClick = () => {
    if (type != "inactive") {
      setClassName("bg-btnA mt-4px ml-4px");
      setTimeout(
        () => setClassName("bg-btnA mb-4px mr-4px drop-shadow-btnA"),
        100
      );
    }
  };

  return (
    <button
      onClick={handleClick}
      className={className + " text-xl pt-4 pb-4 pl-10 pr-10"}
    >
      {label}
    </button>
  );
};
