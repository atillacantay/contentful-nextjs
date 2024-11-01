"use client";

import CardShop from "@/components/cards/card-shop";
import Section from "@/components/cft-components/cft-section/cft-section.component";
import type { PageShop } from "lib/__generated/sdk";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";

const WrapperSwiper = dynamic(
  () => import("@/components/wrapper-swiper").then((module) => module.default),
  { ssr: false }
);

const AlsoViewedProducts = ({
  alsoViewedProducts,
}: {
  alsoViewedProducts?: PageShop[];
}) => {
  const t = useTranslations();
  return (
    alsoViewedProducts &&
    alsoViewedProducts.length > 0 && (
      <Section
        sectionTitle={{ title: "People Who Viewed This Item Also Viewed" }}
        className="my-16 px-4 lg:container lg:mx-auto"
      >
        <WrapperSwiper>
          {alsoViewedProducts.map((card: any, idx: number) => (
            <SwiperSlide key={idx} className="!w-[20%] max-sm:!w-[90%]">
              <CardShop {...card} />
            </SwiperSlide>
          ))}
        </WrapperSwiper>
      </Section>
    )
  );
};

export default AlsoViewedProducts;
