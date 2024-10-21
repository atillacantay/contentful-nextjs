import { IIconButton } from '@/components/common/button/button.interfaces';

export interface IHeaderIconButton extends IIconButton {
  icon: React.ElementType;
  mobileIcon?: React.ElementType;
  className?: string;
}
