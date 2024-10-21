export interface IText
  extends React.HTMLAttributes<HTMLParagraphElement & HTMLSpanElement & HTMLAnchorElement> {
  as?: 'p' | 'span' | 'small' | 'a';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'black' | 'white' | string;
  opacity?: 0 | 50 | 100;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  href?: string;
  title?: string;
}

export type TTextStylesFnArgs = Pick<
  IText,
  'size' | 'weight' | 'color' | 'opacity' | 'className'
>;
