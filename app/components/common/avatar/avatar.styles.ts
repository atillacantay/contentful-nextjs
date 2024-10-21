import { clsxm } from "@/utils/twMerge.utils";

import type { IAvatarStyles, TAvatarStylesFnArgs } from "./avatar.interfaces";

const avatarConfig = {
  rounded: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  },
  size: {
    6: "w-6 h-6",
    8: "w-8 h-8",
    10: "w-10 h-10",
    12: "w-12 h-12",
    16: "w-16 h-16",
  },
};

const useAvatarStyle = ({
  rounded = "md",
  size = 6,
  className,
}: TAvatarStylesFnArgs): IAvatarStyles => {
  return {
    avatar: clsxm(
      "relative overflow-hidden bg-white dark:bg-goki_dark shadow-md shrink-0",
      avatarConfig.rounded[rounded],
      avatarConfig.size[size],
      className
    ),
    avatarImg: "block w-full object-cover max-w-full h-full",
  };
};

export default useAvatarStyle;
