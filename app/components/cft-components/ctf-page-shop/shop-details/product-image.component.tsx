"use client";

import ContentfulImage from "@/components/cft-components/cft-image";
import Stack from "@/components/common/stack";
import type { Asset, PageShop } from "lib/__generated/sdk";
import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";

const WrapperSwiper = dynamic(
  () => import("@/components/wrapper-swiper").then((module) => module.default),
  { ssr: false }
);

interface ProductImageProps {
  product: PageShop;
}

const ProductImage = ({ product }: ProductImageProps) => {
  const { imagesCollection } = product;
  const images = imagesCollection?.items;

  const Image = ({ image }: { image: Asset }) => (
    <ContentfulImage
      className="block lg:w-full max-lg:max-h-[633px] mx-auto lg:rounded-2xl"
      src={image.url || ""}
      width={image.width}
      height={image.height}
      priority
      alt={image.description || product.name || "Product Image"}
    />
  );

  return (
    images && (
      <Stack className="overflow-hidden lg:w-1/2">
        {images.length > 1 ? (
          <Stack className="[&_.navigation-sub-next]:pr-8  [&_.navigation-sub-prev]:pl-8">
            <WrapperSwiper>
              {images?.map((image, idx: number) => (
                <SwiperSlide key={idx}>
                  <Image image={image} />
                </SwiperSlide>
              ))}
            </WrapperSwiper>
          </Stack>
        ) : (
          <Image image={images[0]} />
        )}
      </Stack>
    )
  );
};

export default ProductImage;
