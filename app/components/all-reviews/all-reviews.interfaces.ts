import type { PageRecipe } from "lib/__generated/sdk";
export interface IAllReviews {
  recipe: PageRecipe;
  allReviewsCount?: number;
  modalLabel: string;
  className?: string;
  buttonClassName?: string;
}

export interface IReview {
  images: string[];
  showImages: boolean | undefined;
  userName: string;
  comment: string;
  rate: number;
  created: string;
  avatarUrl: string;
}
