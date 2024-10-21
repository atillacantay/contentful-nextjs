"use client";

import CardRecipe from "@/components/cards/card-recipe";
import Stack from "@/components/common/stack";
import FormIngredients from "@/components/form-ingredients";
import Section from "@/components/section";
import dynamic from "next/dynamic";
import PreparationSteps from "./preparation-steps.component";
import RecipeDetailHeader from "./recipe-detail-header.component";
import RecipeDetailReviews from "./recipe-detail-reviews.component";

import type { ICARD } from "@/components/cft-components/cft-item-showcase/cft-item-showcase.component";
import { PageRecipe } from "lib/__generated/sdk";

const SwiperSlide = dynamic(() =>
  import("swiper/react").then((module) => module.SwiperSlide)
);
const WrapperSwiper = dynamic(() =>
  import("@/components/wrapper-swiper").then((module) => module.default)
);

const cardComponents: Record<string, any> = {
  PageRecipe: CardRecipe,
};

const getCardComponentByGenre = (card: ICARD): JSX.Element => {
  const CardComponent = cardComponents[card.genre];
  return CardComponent ? <CardComponent {...card} /> : <></>;
};

const modelToCards = (cards: ICARD[]) =>
  cards.map((card: ICARD, idx: number) => (
    <SwiperSlide key={idx} className="!w-[20%] max-sm:!w-[90%]">
      {getCardComponentByGenre(card)}
    </SwiperSlide>
  ));

const RecipeDetail = ({
  recipe,
  recipeDetailReviews,
  formIngredients,
}: {
  recipe: PageRecipe;
  recipeDetailReviews?: React.ComponentProps<typeof RecipeDetailReviews>;
  formIngredients?: React.ComponentProps<typeof FormIngredients>;
}): JSX.Element => {
  const preparationSteps =
    recipe.preparationStepsCollection?.items.filter(Boolean);

  return (
    <>
      <div className="lg:py-8 lg:container lg:mx-auto sm-layout-header-hidden">
        <RecipeDetailHeader {...recipe} />
      </div>
      <Stack
        direction="col"
        alignItems="start"
        className="lg:flex-row py-8 lg:container lg:mx-auto lg:border-y lg:border-t-black/10 lg:gap-24"
      >
        <div className="flex-1 max-lg:mx-4">
          <PreparationSteps preparationSteps={preparationSteps} />
        </div>
        <FormIngredients {...formIngredients} />
      </Stack>
      <Section
        sectionTitle={{ title: "Related Topic" }}
        className="my-10 px-4 lg:container lg:mx-auto"
      >
        <></>
        {/* <WrapperSwiper>{modelToCards(CARDS)}</WrapperSwiper> */}
      </Section>
      <div className="px-4 lg:container lg:mx-auto mb-12 lg:mb-16">
        {/* <RecipeDetailReviews {...ModelRecipeDetailReviews} /> */}
      </div>
    </>
  );
};

export default RecipeDetail;
