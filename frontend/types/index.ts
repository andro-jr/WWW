import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  backgroundStyles: string;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  isDisabled?: boolean;
}
