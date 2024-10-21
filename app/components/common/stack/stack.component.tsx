import { clsxm } from "@/utils/twMerge.utils";

import type { IStack } from "./stack.interfaces";

import useStackStyles from "./stack.styles";

const Stack = <T,>({
  as: Tag = "div",
  direction,
  alignItems,
  justifyContent,
  spacing,
  children,
  className,
  ...props
}: IStack & T): JSX.Element => {
  const styles = useStackStyles({
    alignItems,
    justifyContent,
    direction,
    spacing,
  });
  return (
    <Tag className={clsxm(styles.stack, className)} {...props}>
      {children}
    </Tag>
  );
};

export default Stack;
