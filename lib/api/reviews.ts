import { AllReviewsResponse } from "@/api/all-reviews/[slug]/route";
import { RecipeReviewsQueryVariables } from "lib/__generated/sdk";
import { apiClient } from "./client";

export const getReviews = async ({
  slug,
  limit,
}: RecipeReviewsQueryVariables) => {
  const url = `api/all-reviews/${slug}${limit ? `?limit=${limit}` : ""}`;
  return await apiClient<AllReviewsResponse>(url);
};
