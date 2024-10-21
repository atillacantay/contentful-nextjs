import { ContentfulImageProps } from "@/components/cft-components/cft-image/cft-image";

export interface IAvatar extends ContentfulImageProps {
  src: string;
  size?: 6 | 8 | 10 | 12 | 16;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

export type TAvatarStylesFnArgs = Pick<
  IAvatar,
  "size" | "rounded" | "className"
>;

export interface IAvatarStyles {
  avatar: string;
  avatarImg: string;
}
