export interface IStack {
  as?: keyof JSX.IntrinsicElements;
  direction?: "col-reverse" | "col" | "row-reverse" | "row";
  alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
  justifyContent?: "start" | "center" | "end" | "between" | "around" | "evenly";
  spacing?: 0 | 2 | 4 | 6 | 8;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export type TStackStylesArgs = Pick<
  IStack,
  "direction" | "alignItems" | "justifyContent" | "spacing"
>;

export interface IStackStyles {
  stack: string;
}
