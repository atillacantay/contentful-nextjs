import type { IGridItem } from '../grid.interfaces';

import { useGridItemStyles } from './grid-item.styles';

const GridItem = ({ span, children, className }: IGridItem): JSX.Element => {
  const styles = useGridItemStyles({ span, className });
  return <div className={styles.gridItem}>{children}</div>;
};

export default GridItem;
