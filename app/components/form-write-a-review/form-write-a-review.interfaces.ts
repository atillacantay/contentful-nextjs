export interface ArgsFormWriteAReview {
  buttonLabel: string;
  modalLabel: string;
  details: {
    rating: number;
    ratingLabel: string;
    imageURL: string;
    title: string;
    avatarURL: string;
    author: string;
  };
  className?: string;
  buttonClassName?: string;
  formLabels: {
    overallRating: string;
    ingredients: string;
    accuracy: string;
    difficulty: string;
    taste: string;
    yourReview: string;
    yourReviewInputPlaceholder: string;
    photos: string;
    photosUploadLimit: string;
    clearAll: string;
    submit: string;
  };
  apiData: {
    authorId: number;
    parentId: number;
    relatedId: number;
    relatedObjectType: "goodyKitchen.recipe";
    cultureCode: "en-US" | "ar-SA";
  };
}
