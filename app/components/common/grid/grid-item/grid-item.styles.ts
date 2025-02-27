import { clsxm } from '@/utils/twMerge.utils';
import { IGridItemStylesFnArg } from '../grid.interfaces';

const gridItemConfig = {
  span: {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
    7: 'col-span-7',
    8: 'col-span-8',
    9: 'col-span-9',
    10: 'col-span-10',
    11: 'col-span-11',
    12: 'col-span-12',
  },
};

export const useGridItemStyles = ({
  span,
  className,
}: IGridItemStylesFnArg): { gridItem: string } => {
  return {
    gridItem: clsxm(span && gridItemConfig.span[span], className),
  };
};
