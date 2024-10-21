import { clsxm } from "@/utils/twMerge.utils";

import type { ICardContent } from "./card.interfaces";

import useCardStyle from "./card.styles";

const CardContent = ({ children, className }: ICardContent): JSX.Element => {
  const styles = useCardStyle();
  return <div className={clsxm(styles.cardContent, className)}>{children}</div>;
};

export default CardContent;
