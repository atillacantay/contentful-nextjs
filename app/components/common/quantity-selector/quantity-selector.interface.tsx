export interface IQuantitySelector {
  value: number;
  className?: string;
  onDecrease: () => void;
  onIncrease: () => void;
  disabled?: boolean;
}
