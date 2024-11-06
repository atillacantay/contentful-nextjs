import { RecipeReview } from "lib/__generated/sdk";

export const calculateStarPercentages = (reviews: RecipeReview[]) => {
  const starCounts: Record<number, number> = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  reviews.forEach((review) => {
    if (review.ratingOverall) {
      starCounts[review.ratingOverall] += 1;
    }
  });

  const totalReviews = reviews.length;

  const starPercentages = {
    1: totalReviews > 0 ? (starCounts[1] / totalReviews) * 100 : 0,
    2: totalReviews > 0 ? (starCounts[2] / totalReviews) * 100 : 0,
    3: totalReviews > 0 ? (starCounts[3] / totalReviews) * 100 : 0,
    4: totalReviews > 0 ? (starCounts[4] / totalReviews) * 100 : 0,
    5: totalReviews > 0 ? (starCounts[5] / totalReviews) * 100 : 0,
  };

  return starPercentages;
};

export const calculateRates = (reviews: RecipeReview[]) => {
  const rates = {
    ratingIngredients: 0,
    ratingAccuracy: 0,
    ratingDifficulty: 0,
    ratingTaste: 0,
  };

  reviews.forEach((review) => {
    rates.ratingIngredients += review.ratingIngredients || 0;
    rates.ratingAccuracy += review.ratingAccuracy || 0;
    rates.ratingDifficulty += review.ratingDifficulty || 0;
    rates.ratingTaste += review.ratingTaste || 0;
  });

  const reviewCount = reviews.length;
  return {
    ratingIngredients:
      reviewCount > 0 ? rates.ratingIngredients / reviewCount : 0,
    ratingAccuracy: reviewCount > 0 ? rates.ratingAccuracy / reviewCount : 0,
    ratingDifficulty:
      reviewCount > 0 ? rates.ratingDifficulty / reviewCount : 0,
    ratingTaste: reviewCount > 0 ? rates.ratingTaste / reviewCount : 0,
  };
};
