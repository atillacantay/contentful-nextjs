import { IText } from "./text.interfaces";
import { useTextStyles } from "./text.styles";

const Text = ({
  as: Tag = "p",
  weight,
  size,
  color,
  opacity,
  children,
  className,
  ...args
}: IText): JSX.Element => {
  const styles = useTextStyles({
    weight,
    size,
    color,
    opacity,
    className,
  });
  return (
    <Tag {...args} className={styles.text}>
      {children}
    </Tag>
  );
};

export default Text;
