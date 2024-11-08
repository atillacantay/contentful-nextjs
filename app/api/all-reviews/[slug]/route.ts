import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import { Query, RecipeReview } from "lib/__generated/sdk";
import { getCurrentLocale } from "lib/api/utils";
import { client } from "lib/graphql";
import { getTranslations } from "next-intl/server";
import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { calculateRates, calculateStarPercentages } from "./utils";

export interface AllReviewsResponse {
  reviews: RecipeReview[];
  stars: {
    rating: string;
    percentage: number;
  }[];
  reviewDetails: {
    key: string;
    label: string;
    rate: string;
  }[];
}

export const GET = async (
  _: NextRequest,
  context: { params: Promise<{ slug: string }> }
) => {
  const slug = (await context.params).slug;

  if (!slug) {
    return NextResponse.error();
  }

  const locale = await getCurrentLocale();
  const t = await getTranslations({ locale });
  const activeLocale = mapLocaleToContentfulLocale(locale as string);
  const { isEnabled } = await draftMode();
  const data = await client.recipeReviews({
    slug,
    locale: activeLocale,
    preview: isEnabled,
  });
  const reviews = (data as Query).recipeReviewCollection?.items;

  if (!reviews) {
    return NextResponse.error();
  }

  const starPercentages = calculateStarPercentages(reviews);
  const stars = [
    {
      rating: t("common.starsWithCount", { count: 5 }),
      percentage: Number(starPercentages[5].toFixed()),
    },
    {
      rating: t("common.starsWithCount", { count: 4 }),
      percentage: Number(starPercentages[4].toFixed()),
    },
    {
      rating: t("common.starsWithCount", { count: 3 }),
      percentage: Number(starPercentages[3].toFixed()),
    },
    {
      rating: t("common.starsWithCount", { count: 2 }),
      percentage: Number(starPercentages[2].toFixed()),
    },
    {
      rating: t("common.starsWithCount", { count: 1 }),
      percentage: Number(starPercentages[1].toFixed()),
    },
  ];

  const rates = calculateRates(reviews);
  const reviewDetails = [
    {
      key: "ingredients",
      label: t("common.ingredients"),
      rate: rates.ratingIngredients.toFixed(1),
    },
    {
      key: "accuracy",
      label: t("common.accuracy"),
      rate: rates.ratingAccuracy.toFixed(1),
    },
    {
      key: "difficulty",
      label: t("common.difficulty"),
      rate: rates.ratingDifficulty.toFixed(1),
    },
    {
      key: "taste",
      label: t("common.taste"),
      rate: rates.ratingTaste.toFixed(1),
    },
  ];

  return NextResponse.json<AllReviewsResponse>({
    reviews,
    stars,
    reviewDetails,
  });
};
