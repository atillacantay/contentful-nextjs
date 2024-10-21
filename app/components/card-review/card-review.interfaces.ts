export interface IFoodieReviewCard {
  userName: string;
  rate: number;
  comment: string;
  date?: string;
  assets?: string[];
  showImages?: boolean;
  className?: string;
  contentClassName?: string;
  created?: string;
  avatarUrl: string;
}
