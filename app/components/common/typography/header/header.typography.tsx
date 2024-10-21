import type { IHeader } from "./header.interfaces";

import { useHeaderStyles } from "./header.styles";

const Header = ({
  as: Tag = "h2",
  weight,
  size,
  color,
  opacity,
  isUpperCase,
  isCapitalize,
  children,
  className,
}: IHeader): JSX.Element => {
  const styles = useHeaderStyles({
    weight,
    size,
    color,
    opacity,
    isUpperCase,
    isCapitalize,
    className,
  });
  return <Tag className={styles.header}>{children}</Tag>;
};

export default Header;
