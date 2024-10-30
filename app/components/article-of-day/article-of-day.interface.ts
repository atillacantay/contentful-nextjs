import type { PageArticle } from "lib/__generated/sdk";

export interface IArticleOfDay extends PageArticle {
  textColor?: string;
  star?: number;
  reviews?: number;
  date?: string;
  contentBefore?: JSX.Element;
  verticalImage?: boolean;
}
