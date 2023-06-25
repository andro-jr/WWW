import { Carousel } from "@/components";
import { type } from "os";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  backgroundStyles: string;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  isDisabled?: boolean;
  classes?: string;
}

export interface FormInputProps {
  placeholder?: string;
  type?: string;
  label?: string;
  name?: string;
}

export interface SearchBarProps {
  placeholder: string;
  name?: string;
  type?: string;
  id?: string;
  onchange?: any;
  
}

export interface CarouselProps {
  title: string;
  subtitle: string;
}