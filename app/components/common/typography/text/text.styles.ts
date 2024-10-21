import { clsxm } from "@/utils/twMerge.utils";
import { TTextStylesFnArgs } from "./text.interfaces";

const textConfig = {
  weight: {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  },
  size: {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl",
  },
  color: {
    black: "text-black dark:text-white",
    white: "text-white",
  },
  opacity: {
    0: "opacity-0",
    50: "opacity-50",
    100: "opacity-100",
  },
  uppercase: "uppercase",
  capitalize: "capitalize",
};

export const useTextStyles = ({
  weight = "normal",
  size = "md",
  color = "black",
  opacity = 100,
  className,
}: TTextStylesFnArgs): { text: string } => {
  return {
    text: clsxm(
      textConfig.weight[weight],
      textConfig.size[size],
      //  @ts-expect-error color can be any string
      textConfig.color[color],
      textConfig.opacity[opacity],
      className
    ),
  };
};
