export interface ISectionTitle {
  title: string;
  description?: string;
  btnTitle?: string;
  btnLink?: string;
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  textColor?: string;
}
