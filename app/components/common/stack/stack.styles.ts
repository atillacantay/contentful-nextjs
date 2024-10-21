import { TStackStylesArgs, IStackStyles } from './stack.interfaces';

const stackConfig = {
  direction: {
    row: 'flex-row',
    col: 'flex-col',
    'col-reverse': 'flex-col-reverse',
    'row-reverse': 'flex-row-reverse',
  },
  alignItems: {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  },
  justifyContent: {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  },
  gap: {
    0: 'gap-0',
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  },
};

const useStackStyles = ({
  direction = 'row',
  alignItems = 'stretch',
  justifyContent = 'start',
  spacing = 0,
}: TStackStylesArgs): IStackStyles => {
  return {
    stack: `flex ${stackConfig.direction[direction]} ${stackConfig.alignItems[alignItems]} ${stackConfig.justifyContent[justifyContent]} ${stackConfig.gap[spacing]}`,
  };
};

export default useStackStyles;
