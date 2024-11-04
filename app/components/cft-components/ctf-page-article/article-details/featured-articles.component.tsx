"use client";

import CardArticle from "@/components/cards/card-article";
import Section from "@/components/cft-components/cft-section/cft-section.component";
import { PageArticle } from "lib/__generated/sdk";
import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";

const WrapperSwiper = dynamic(
  () => import("@/components/wrapper-swiper").then((module) => module.default),
  { ssr: false }
);

const FeaturedArticles = ({
  featuredArticles,
}: {
  featuredArticles?: PageArticle[];
}) => {
  return (
    featuredArticles &&
    featuredArticles.length > 0 && (
      <div className="px-4 lg:container lg:mx-auto lg:mb-28">
        <Section
          className="pt-8 lg:pt-16 pb-5 md:[&_.navigation-sub-prev]:hidden md:[&_.navigation-sub-next]:hidden"
          sectionTitle={{
            title: "You May Also Like",
            btnTitle: "Explore All",
          }}
          sectionClassName="[&_a]:hidden"
        >
          <WrapperSwiper>
            {featuredArticles.map((cardArticle) => (
              <SwiperSlide
                key={cardArticle._id}
                className="!min-w-[250px] !w-[19%] max-sm:!w-[90%]"
              >
                <CardArticle {...cardArticle} />
              </SwiperSlide>
            ))}
          </WrapperSwiper>
        </Section>
      </div>
    )
  );
};

export default FeaturedArticles;
