import { clsxm } from "@/utils/twMerge.utils";

import ContentfulImage from "@/components/cft-components/cft-image";
import type { ICardMedia } from "./card.interfaces";
import useCardStyle from "./card.styles";

const CardMedia = ({
  src,
  alt,
  className,
  ...props
}: ICardMedia): JSX.Element => {
  const styles = useCardStyle();
  return (
    <ContentfulImage
      className={clsxm(styles.cardMedia, className)}
      src={src}
      alt={alt}
      {...props}
    />
  );
};

export default CardMedia;
