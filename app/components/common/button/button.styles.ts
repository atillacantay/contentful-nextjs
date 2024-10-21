import { clsxm } from "@/utils/twMerge.utils";
import { IButtonStyles, IButtonStylesFnArgs } from "./button.interfaces";

export const buttonConfig = {
  base: "inline-flex items-center justify-center align-middle cursor-pointer select-none appearance-none no-underline rounded-full",
  iconButton: "rounded-full w-7 h-7 bg-white ",
  color: {
    black: "text-black",
    white: "text-white",
  },
  bgColor: {
    black: "bg-black",
    white: "bg-white",
  },
  variant: {
    contained: (color: "black" | "white") =>
      `${buttonConfig.bgColor[color]} text-white`,
    outlined: (color: "black" | "white") =>
      `bg-transparent ${buttonConfig.color[color]} border-solid border border-current`,
    text: (color: "black" | "white") =>
      `bg-transparent ${buttonConfig.color[color]}`,
  },
  size: {
    sm: "py-1 px-3",
    md: "py-2 px-4",
    lg: "py-3 px-6",
    xl: "py-4 px-6",
  },
};

export const useButtonStyle = ({
  color = "black",
  size = "md",
  variant = "text",
  fullWidth = false,
}: IButtonStylesFnArgs): IButtonStyles => {
  return {
    base: buttonConfig.base,
    button: clsxm(
      buttonConfig.variant[variant](color),
      buttonConfig.size[size],
      fullWidth && "w-full"
    ),
    iconButton: buttonConfig.iconButton,
  };
};
