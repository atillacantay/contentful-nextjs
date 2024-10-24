import type { TGridCols } from "@/components/common/grid/grid.interfaces";
import type { Asset } from "lib/__generated/sdk";

export type Genre =
  | "recipe"
  | "masterclass"
  | "shop"
  | "magazine"
  | "article"
  | "card-foodies"
  | "profile-foodies";

export type ContentfulGenre = "PageRecipe" | "PageArticle" | "PageMagazine";

export interface ICARD {
  genre: Genre;
  header?: string;
  description?: string;
  star?: number;
  reviews?: number;
  mediaSrc?: string;
  mediaAlt?: string;
  authorImage?: Asset;
  textColor?: string;
  date?: string;
  span?: TGridCols;
  enrolled?: number;
  lessons?: number;
  followers?: number;
  masterclass?: number;
  recipe?: number;
  [key: string]: any;
}
