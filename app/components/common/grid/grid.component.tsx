import GridItem from "./grid-item";

import type { IGrid } from "./grid.interfaces";

import { useGridStyles } from "./grid.styles";

const Grid = ({
  col,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  spacing,
  children,
  className,
}: IGrid): JSX.Element => {
  const styles = useGridStyles({
    col,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    spacing,
    className,
  });
  return <div className={styles.grid}>{children}</div>;
};

Grid.Item = GridItem;

export default Grid;
