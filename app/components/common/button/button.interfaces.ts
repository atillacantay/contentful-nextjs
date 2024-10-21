export interface IButtonBase
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export interface IButton extends IButtonBase {
  as?: React.ElementType;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "text" | "contained" | "outlined";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "black" | "white";
  fullWidth?: boolean;
  htmlFor?: string;
  href?: string;
  target?: string;
  title?: string;
}

export interface IIconButton extends IButton {}

export type IButtonStylesFnArgs = Partial<
  Pick<IButton, "variant" | "size" | "color" | "fullWidth">
>;
export interface IButtonStyles {
  base: string;
  button: string;
  iconButton: string;
}
