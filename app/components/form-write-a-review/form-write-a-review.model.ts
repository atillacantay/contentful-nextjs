import mediaRecipe from "@/public/assets/img/recipe.png";
import type FormWriteAReview from "./form-write-a-review.component";

export const ModelFormWriteAReview: React.ComponentProps<
  typeof FormWriteAReview
> = {
  buttonLabel: "Write a Review",
  modalLabel: "Write a Review",
  details: {
    rating: 3.9,
    ratingLabel: "3.9 Overall",
    imageURL: mediaRecipe.src,
    title: "Spinach Lasagna with Chicken & Mushrooms",
    avatarURL: mediaRecipe.src,
    author: "By Goody Kitchen",
  },
  formLabels: {
    overallRating: "Overall Rating",
    ingredients: "Ingredients",
    accuracy: "Accuracy",
    difficulty: "Difficulty",
    taste: "Taste",
    yourReview: "Your Review",
    yourReviewInputPlaceholder: "Share your experience with our community...",
    photosUploadLimit: " < 5MB",
    photos: "Photos",
    clearAll: "Clear All",
    submit: "Submit Review",
  },
  apiData: {
    authorId: 0,
    parentId: -1,
    relatedId: 0,
    relatedObjectType: "goodyKitchen.recipe",
    cultureCode: "en-US",
  },
};
