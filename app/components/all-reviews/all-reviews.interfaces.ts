import { StarRating } from "../review-histogram/review-histogram.interfaces";
export interface IAllReviews {
  buttonLabel: string;
  modalLabel: string;
  reviews: IReview[];
  labelSortAsc: string;
  labelSortDesc: string;
  stars: StarRating[];
  reviewDetails: {
    key: string;
    label: string;
    rate: number;
  }[];
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
