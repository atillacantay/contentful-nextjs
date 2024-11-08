import { AllReviewsResponse } from "@/api/all-reviews/[slug]/route";
import { RecipeReviewsQueryVariables } from "lib/__generated/sdk";
import { apiClient } from "./client";

export const getReviews = async ({ slug }: RecipeReviewsQueryVariables) => {
  const searchParams = new URLSearchParams();
  const url = `api/all-reviews/${slug}`;
  return await apiClient<AllReviewsResponse>(url);
};
