import { AllReviewsResponse } from "@/api/all-reviews/[slug]/route";
import { apiClient } from "./client";

interface GetReviewsParams {
  slug: string;
  limit?: number;
}

export const getReviews = async ({ slug, limit }: GetReviewsParams) => {
  const url = `api/all-reviews/${slug}${limit ? `?limit=${limit}` : ""}`;
  return await apiClient<AllReviewsResponse>(url);
};
