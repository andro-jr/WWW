import { CustomButtonProps } from "@/types";
import React from "react";
import { text } from "stream/consumers";

const CustomButton = ({
  title,
  backgroundStyles,
  textStyles,
  handleClick,
  btnType,
  classes,
}: CustomButtonProps) => {
  return (
    <button
      className={`${backgroundStyles} ${classes}`}
      onClick={handleClick}
      type={btnType || "button"}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
    </button>
  );
};

export default CustomButton;
