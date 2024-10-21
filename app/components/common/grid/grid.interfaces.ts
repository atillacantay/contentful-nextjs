export type TGridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface IGrid {
  xs?: TGridCols;
  sm?: TGridCols;
  md?: TGridCols;
  lg?: TGridCols;
  xl?: TGridCols;
  xxl?: TGridCols;
  col?: TGridCols;
  spacing?: 0 | 2 | 4 | 6 | 8;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

export interface IGridItem {
  span?: TGridCols;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

export type IGridStylesFnArg = Partial<
  Pick<
    IGrid,
    "col" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "spacing" | "className"
  >
>;

export type IGridItemStylesFnArg = Partial<
  Pick<IGridItem, "span" | "className">
>;
