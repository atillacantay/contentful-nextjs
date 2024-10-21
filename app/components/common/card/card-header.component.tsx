import { clsxm } from "@/utils/twMerge.utils";
import type { ICardHeader } from "./card.interfaces";
import useCardStyle from "./card.styles";

const CardHeader = ({ children, className }: ICardHeader): JSX.Element => {
  const styles = useCardStyle();
  return <div className={clsxm(styles.cardHeader, className)}>{children}</div>;
};

export default CardHeader;
