import { clsxm } from "@/utils/twMerge.utils";

import { THeaderStylesFnArgs } from "./header.interfaces";

const headerConfig = {
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
    xxl: "text-2xl",
    "3xl": "text-3xl",
  },
  color: {
    black: "text-black  dark:text-white",
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

export const useHeaderStyles = ({
  weight = "normal",
  size = "md",
  color = "black",
  opacity = 100,
  isUpperCase = false,
  isCapitalize = false,
  className,
}: THeaderStylesFnArgs): { header: string } => {
  return {
    header: clsxm(
      headerConfig.weight[weight],
      headerConfig.size[size],
      headerConfig.color[color],
      headerConfig.opacity[opacity],
      isUpperCase && headerConfig.uppercase,
      isCapitalize && headerConfig.capitalize,
      className
    ),
  };
};
