import Stack from "@/components/common/stack";
import Star from "@/components/common/star";
import Text from "@/components/common/typography/text";
import { clsxm } from "@/utils/twMerge.utils";

interface IRate {
  rate: number;
  reviews?: number;
  className?: string;
  hideRateText?: boolean;
  fill?: string;
  children?: React.ReactNode;
}

const Rate = ({
  rate,
  reviews,
  className,
  hideRateText,
  children,
  fill = "rgba(254,210,54,1)",
}: IRate): JSX.Element => {
  return (
    <Stack alignItems="end" className={clsxm(className)}>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((value, idx) => (
        <Star key={idx} rate={rate} value={value} fill={fill} />
      ))}
      {!hideRateText && (
        <Text size="sm" className="ml-1 rtl:mr-1">
          {rate}
        </Text>
      )}
      {reviews && (
        <Text size="sm" opacity={50} className="ml-1 rtl:mr-1">
          {reviews} Reviews
        </Text>
      )}
      {children}
    </Stack>
  );
};

export default Rate;
