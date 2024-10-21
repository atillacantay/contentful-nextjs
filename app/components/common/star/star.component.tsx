import StarHalf from "@/public/assets/icons/star-half-outline.svg";
import StarFull from "@/public/assets/icons/star-new-full.svg";
import StarEmpty from "@/public/assets/icons/star-outline.svg";

interface IStar extends React.HTMLAttributes<HTMLOrSVGElement> {
  rate: number;
  value: number;
  fill?: string;
  className?: string;
  width?: number;
  height?: number;
}

const Star = ({
  rate,
  value,
  fill = "yellow",
  ...props
}: IStar): JSX.Element => {
  return rate >= value ? (
    <StarFull
      style={
        {
          color: fill,
        } as React.CSSProperties
      }
      {...props}
    />
  ) : rate >= value - 0.5 ? (
    <StarHalf
      style={
        {
          color: fill,
        } as React.CSSProperties
      }
      {...props}
    />
  ) : (
    <StarEmpty
      style={
        {
          color: fill,
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export default Star;
