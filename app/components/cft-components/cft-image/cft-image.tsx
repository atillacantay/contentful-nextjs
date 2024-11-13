"use client";

import Image, { ImageProps } from "next/image";

export interface ContentfulImageProps extends Omit<ImageProps, "alt"> {
  alt?: string;
  format?: string;
}

const contentfulLoader = ({
  src,
  width,
  quality,
  format = "webp",
}: ContentfulImageProps) => {
  return `${src}?w=${width}&q=${quality || 75}&fm=${format}`;
};

export default function ContentfulImage({
  src,
  width,
  height,
  title,
  ...rest
}: ContentfulImageProps) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={title || ""}
      loader={contentfulLoader}
      {...rest}
    />
  );
}
