import Stack from "@/components/common/stack";

import Minus from "@/public/assets/icons/minus.svg";
import Plus from "@/public/assets/icons/plus.svg";
import { clsxm } from "@/utils/twMerge.utils";
import { IQuantitySelector } from "./quantity-selector.interface";

const QuantitySelector = ({
  value,
  className,
  onDecrease,
  onIncrease,
  disabled,
}: IQuantitySelector) => {
  return (
    <Stack
      justifyContent="between"
      alignItems="center"
      className={clsxm(
        "border rounded-full py-2 px-4 gap-4 select-none",
        className,
        disabled && "pointer-events-none bg-slate-100",
        !disabled && "border-primary_red"
      )}
    >
      <Minus
        className="text-primary_red cursor-pointer"
        width={24}
        height={24}
        onClick={onDecrease}
      />
      <span className="dark:text-white">{value}</span>
      <Plus
        className="text-primary_red cursor-pointer"
        width={24}
        height={24}
        onClick={onIncrease}
      />
    </Stack>
  );
};
export default QuantitySelector;
