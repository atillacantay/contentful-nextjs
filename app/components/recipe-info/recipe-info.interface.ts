export interface IRecipeInfo {
  prepTime?: number;
  serving?: number;
  level?: string;
  calories?: number;
  textClassName?: string;
  borderColor?: string;
  className?: string;
}

export interface RecipeInfoItem {
  label: string;
  value?: number | string;
  className: string;
  textClassName?: string;
}
