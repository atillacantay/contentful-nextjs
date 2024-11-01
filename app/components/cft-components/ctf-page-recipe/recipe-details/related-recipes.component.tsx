"use client";

import CardRecipe from "@/components/cards/card-recipe";
import Section from "@/components/cft-components/cft-section/cft-section.component";
import type { PageRecipe } from "lib/__generated/sdk";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";

const WrapperSwiper = dynamic(
  () => import("@/components/wrapper-swiper").then((module) => module.default),
  { ssr: false }
);

const cardComponents: Record<string, any> = {
  PageRecipe: CardRecipe,
};

const getCardComponentByGenre = (card: PageRecipe): JSX.Element => {
  const CardComponent = cardComponents[card.__typename!];
  return CardComponent ? <CardComponent {...card} /> : <></>;
};

const modelToCards = (cards: PageRecipe[]) =>
  cards.map((card: PageRecipe) => (
    <SwiperSlide key={card._id} className="!w-[20%] max-sm:!w-[90%]">
      {getCardComponentByGenre(card)}
    </SwiperSlide>
  ));

const RelatedRecipes = ({
  relatedRecipes,
}: {
  relatedRecipes?: PageRecipe[];
}) => {
  const t = useTranslations();
  return (
    relatedRecipes &&
    relatedRecipes.length > 0 && (
      <Section
        sectionTitle={{ title: t("common.relatedTopics") }}
        className="my-10 px-4 lg:container lg:mx-auto"
      >
        <WrapperSwiper>{modelToCards(relatedRecipes)}</WrapperSwiper>
      </Section>
    )
  );
};

export default RelatedRecipes;
