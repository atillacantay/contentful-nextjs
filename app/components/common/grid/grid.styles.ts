import { clsxm } from "@/utils/twMerge.utils";
import { IGridStylesFnArg } from "./grid.interfaces";

const gridConfig = {
  col: {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12",
  },
  xs: {
    1: "xs:grid-cols-1",
    2: "xs:grid-cols-2",
    3: "xs:grid-cols-3",
    4: "xs:grid-cols-4",
    5: "xs:grid-cols-5",
    6: "xs:grid-cols-6",
    7: "xs:grid-cols-7",
    8: "xs:grid-cols-8",
    9: "xs:grid-cols-9",
    10: "xs:grid-cols-10",
    11: "xs:grid-cols-11",
    12: "xs:grid-cols-12",
  },
  sm: {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
    5: "sm:grid-cols-5",
    6: "sm:grid-cols-6",
    7: "sm:grid-cols-7",
    8: "sm:grid-cols-8",
    9: "sm:grid-cols-9",
    10: "sm:grid-cols-10",
    11: "sm:grid-cols-11",
    12: "sm:grid-cols-12",
  },
  md: {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
    7: "md:grid-cols-7",
    8: "md:grid-cols-8",
    9: "md:grid-cols-9",
    10: "md:grid-cols-10",
    11: "md:grid-cols-11",
    12: "md:grid-cols-12",
  },
  lg: {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
    7: "lg:grid-cols-7",
    8: "lg:grid-cols-8",
    9: "lg:grid-cols-9",
    10: "lg:grid-cols-10",
    11: "lg:grid-cols-11",
    12: "lg:grid-cols-12",
  },
  xl: {
    1: "xl:grid-cols-1",
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
    5: "xl:grid-cols-5",
    6: "xl:grid-cols-6",
    7: "xl:grid-cols-7",
    8: "xl:grid-cols-8",
    9: "xl:grid-cols-9",
    10: "xl:grid-cols-10",
    11: "xl:grid-cols-11",
    12: "xl:grid-cols-12",
  },
  xxl: {
    1: "xxl:grid-cols-1",
    2: "xxl:grid-cols-2",
    3: "xxl:grid-cols-3",
    4: "xxl:grid-cols-4",
    5: "xxl:grid-cols-5",
    6: "xxl:grid-cols-6",
    7: "xxl:grid-cols-7",
    8: "xxl:grid-cols-8",
    9: "xxl:grid-cols-9",
    10: "xxl:grid-cols-10",
    11: "xxl:grid-cols-11",
    12: "xxl:grid-cols-12",
  },
  gap: {
    0: "gap-0",
    2: "gap-2",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
  },
};

export const useGridStyles = ({
  col,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  spacing = 0,
  className,
}: IGridStylesFnArg): { grid: string } => {
  return {
    grid: clsxm(
      "grid auto-cols-auto auto-rows-auto",
      col && gridConfig.col[col],
      xs && gridConfig.xs[xs],
      sm && gridConfig.sm[sm],
      md && gridConfig.md[md],
      lg && gridConfig.lg[lg],
      xl && gridConfig.xl[xl],
      xxl && gridConfig.xxl[xxl],
      spacing && gridConfig.gap[spacing],
      className
    ),
  };
};
