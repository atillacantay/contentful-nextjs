import type { ICardStyle } from "./card.interfaces";

const useCardStyle = (): ICardStyle => {
  return {
    card: "relative bg-white dark:bg-goki_dark_card rounded-2xl shadow-md overflow-hidden",
    cardHeader: "relative px-3 pt-4 w-full max-w-full",
    cardMedia: "block w-full object-cover max-w-full",
    cardContent: "px-3 py-4 w-full max-w-full",
  };
};

export default useCardStyle;
