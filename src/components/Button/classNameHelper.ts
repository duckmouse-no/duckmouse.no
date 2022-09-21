export const getClassName = (
  size: "s" | "m" | "l" | "xl",
  type: "squere" | "round",
  active: true | false
) => {
  let className = "font-medium ";

  if (size === "s") {
    className += "py-2 px-8";
  } else if (size === "m") {
    className += "text-lg py-4 px-10";
  } else if (size === "l") {
    className += "text-lg py-4 px-14";
  } else if (size === "xl") {
    className += "text-2xl py-5 px-18";
  }

  if (type === "round") {
    className += " rounded-full";
  }

  if (active) {
    className += " bg-btnA drop-shadow-btnA";
  } else if (!active) {
    className += " bg-btnI drop-shadow-btnI cursor-default";
  }

  return className;
};
