import { Text } from "@/components/common/typography";
import { clsxm } from "@/utils/twMerge.utils";
import type { IBadge } from "./badge.interfaces";
import { styles } from "./badge.styles";

const Badge = ({
  text,
  startIcon,
  endIcon,
  color = "black",
  className,
}: IBadge): JSX.Element => {
  return (
    <div className={clsxm(styles.badge, className)}>
      {startIcon && (
        <Text color={color} as="span" size="sm" className="mr-1 rtl:ml-1">
          {startIcon}
        </Text>
      )}
      <Text color={color} className="text-xs" weight="light">
        {text}
      </Text>
      {endIcon && (
        <Text color={color} as="span" size="sm" className="ml-1 rtl:ml-1">
          {endIcon}
        </Text>
      )}
    </div>
  );
};

export default Badge;
