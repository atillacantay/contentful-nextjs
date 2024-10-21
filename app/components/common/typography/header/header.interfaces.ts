export interface IHeader extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'black' | 'white';
  opacity?: 0 | 50 | 100;
  isCapitalize?: boolean;
  isUpperCase?: boolean;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  id?: string;
}

export type THeaderStylesFnArgs = Pick<
  IHeader,
  | 'size'
  | 'weight'
  | 'color'
  | 'opacity'
  | 'isCapitalize'
  | 'isUpperCase'
  | 'className'
>;
