import ContentfulImage from "@/components/cft-components/cft-image";
import type { IAvatar } from "./avatar.interfaces";

import useAvatarStyle from "./avatar.styles";

const Avatar = ({
  src,
  size,
  rounded,
  className,
  ...rest
}: IAvatar): JSX.Element => {
  const style = useAvatarStyle({ size, rounded, className });
  return (
    <div className={style.avatar}>
      <ContentfulImage
        className={style.avatarImg}
        src={src}
        alt="Avatar"
        draggable={"false"}
        {...rest}
      />
    </div>
  );
};

export default Avatar;
