import { clsxm } from "@/utils/twMerge.utils";
import type { IIconButton } from "./button.interfaces";

import { useButtonStyle } from "./button.styles";

const IconButton = ({
  as: Tag = "button",
  size,
  children,
  className,
  ...props
}: IIconButton): JSX.Element => {
  const styles = useButtonStyle({
    size,
  });
  return (
    <Tag
      className={clsxm(styles.base, styles.iconButton, className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default IconButton;
