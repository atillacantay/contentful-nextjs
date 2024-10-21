import { clsxm } from "@/utils/twMerge.utils";

import IconButton from "./button-icon.component";

import type { IButton } from "./button.interfaces";
import { useButtonStyle } from "./button.styles";

const Button = ({
  as: Tag = "button",
  startIcon,
  endIcon,
  variant,
  size,
  color,
  fullWidth,
  children,
  className,
  ...props
}: IButton): JSX.Element => {
  const styles = useButtonStyle({
    variant,
    size,
    color,
    fullWidth,
  });
  return (
    <Tag
      className={clsxm(
        styles.base,
        styles.button,
        Tag === "button" && "focus:outline-none",
        className
      )}
      {...props}
    >
      {startIcon && <span className="mr-2 rtl:ml-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2 rtl:mr-2">{endIcon}</span>}
    </Tag>
  );
};

Button.Icon = IconButton;

export default Button;
