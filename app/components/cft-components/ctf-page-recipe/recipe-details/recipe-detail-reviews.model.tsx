import { ModelAllReviews } from "@/components/all-reviews/all-reviews.model";
import { ModelFormWriteAReview } from "@/components/form-write-a-review/form-write-a-review.model";

export const ModelRecipeDetailReviews = {
  formWriteAReview: ModelFormWriteAReview,
  allReviews: {
    ...ModelAllReviews,
    buttonClassName: "max-md:w-full",
  },
};
