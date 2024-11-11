import { AllReviewsResponse } from "@/api/all-reviews/[slug]/route";
import { RecipeReviewsQueryVariables } from "lib/__generated/sdk";
import { apiClient } from "./client";

export const getReviews = async ({ slug }: RecipeReviewsQueryVariables) => {
  const url = `api/all-reviews/${slug}`;
  return await apiClient<AllReviewsResponse>(url);
};

export interface NewReviewVariables {
  authorId: number;
  relatedId: string;
  content: string;
  ratingOverall: number;
  ratingIngredients: number;
  ratingAccuracy: number;
  ratingDifficulty: number;
  ratingTaste: number;
  images: File[];
}

export const addReview = async (formData: FormData) => {
  const url = `api/reviews/add`;
  return await apiClient(url, {
    body: formData,
    method: "POST",
    headers: {},
  });
};
