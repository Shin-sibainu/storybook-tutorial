import React from "react";

type Props = {
  /** The color variant of the circle */
  variant: "green" | "yellow" | "orange";
};

/**
 * プロジェクトで使用する円のUIコンポーネント
 */
const Circle = ({ variant = "orange" }: Props) => {
  let bgColor;

  switch (variant) {
    case "orange":
      bgColor = "bg-orange-500";
      break;
    case "yellow":
      bgColor = "bg-yellow-500";
      break;
    case "green":
      bgColor = "bg-green-500";
      break;
    default:
      bgColor = "bg-orange-500";
  }

  return <div className={`${bgColor} w-14 h-14 p-2 rounded-full`}></div>;
};

export default Circle;
