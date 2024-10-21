import { clsxm } from "@/utils/twMerge.utils";

import CardContent from "./card-content.component";
import CardHeader from "./card-header.component";
import CardMedia from "./card-media.component";

import type { ICard } from "./card.interfaces";
import useCardStyle from "./card.styles";

const Card = ({
  as: Tag = "div",
  children,
  className,
  ...props
}: ICard & React.ComponentProps<"div">): JSX.Element => {
  const styles = useCardStyle();

  return (
    <Tag className={clsxm(styles.card, className)} {...props}>
      {children}
    </Tag>
  );
};

Card.Media = CardMedia;
Card.Header = CardHeader;
Card.Content = CardContent;

export default Card;
