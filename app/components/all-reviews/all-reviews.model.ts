import type AllReviews from "./all-reviews.component";
import { IReview } from "./all-reviews.interfaces";

export const reviews: IReview[] = Array(50)
  .fill(0)
  .map(() => ({
    userName: "john doe",
    comment:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima tempora dolores explicabo reprehenderit ea sit quaerat quia dignissimos aperiam.",
    rate: parseFloat((Math.random() * 4 + 1).toFixed(1)),
    showImages: true,
    images: ["mediaRecipe", "mediaRecipe", "mediaRecipe"],
    created: "12/10/2022 | 01:00 PM",
    avatarUrl: "media",
  }));

export const ModelAllReviews: React.ComponentProps<typeof AllReviews> = {
  modalLabel: `All Reviews (${reviews.length})`,
  reviews,
  labelSortAsc: "Sort from lowest to highest",
  labelSortDesc: "Sort from highest to lowest",
  buttonLabel: `Show All ${reviews.length} Review`,
  stars: [
    { rating: "5 Stars", percentage: 40 },
    { rating: "4 Stars", percentage: 25 },
    { rating: "3 Stars", percentage: 20 },
    { rating: "2 Stars", percentage: 10 },
    { rating: "1 Star", percentage: 5 },
  ],
  reviewDetails: [
    { key: "ingredients", label: "Ingredients", rate: 5 },
    { key: "accuracy", label: "Accuracy", rate: 4 },
    { key: "difficulty", label: "Difficulty", rate: 3.9 },
    { key: "taste", label: "Taste", rate: 2 },
  ],
  className: "",
  buttonClassName: "",
};
