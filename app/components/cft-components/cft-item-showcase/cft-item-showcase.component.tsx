import CardArticle from "@/components/cards/card-article";
import CardRecipe from "@/components/cards/card-recipe";
import Grid from "@/components/common/grid";
import type { TGridCols } from "@/components/common/grid/grid.interfaces";
import { clsxm } from "@/utils/twMerge.utils";
import { ItemShowcase } from "lib/__generated/sdk";
export interface ICARD {
  genre:
    | "PageRecipe"
    | "masterclass"
    | "shop"
    | "article"
    | "card-foodies"
    | "profile-foodies";
  header?: string;
  description?: string;
  star?: number;
  reviews?: number;
  mediaSrc?: string;
  mediaAlt?: string;
  textColor: string;
  date?: string;
  span?: TGridCols;
  enrolled?: number;
  lessons?: number;
  followers?: number;
  masterclass?: number;
  recipe?: number;
  [key: string]: any;
}

const cardComponents: Record<string, any> = {
  PageRecipe: CardRecipe,
  PageArticle: CardArticle,
};

const getCardComponentByGenre = (card: ICARD): JSX.Element => {
  const CardComponent = cardComponents[card.genre];
  return CardComponent ? <CardComponent {...card} /> : <></>;
};

const modelToCards = (cards: ICARD, className: string) =>
  cards.map((card: ICARD, idx: number) => (
    <Grid.Item
      key={idx}
      className={clsxm(
        "col-span-1 " + (card.genre === "masterclass" ? "lg:col-span-2" : ""),
        className
      )}
    >
      {getCardComponentByGenre(card)}
    </Grid.Item>
  ));

const CtfItemShowcase = (props: ItemShowcase) => {
  const { itemsCollection } = props;
  const items = itemsCollection?.items.filter(Boolean);

  const mappedItems: ICARD[] = items?.map((item) => ({
    genre: item.__typename,
    header: item.title,
    description: item.author?.name,
    star: 5,
    media: item.image,
    authorImage: item.author?.avatar,
    url: item.slug,
  }));

  return (
    <>
      <Grid lg={5} md={2} col={1} spacing={4}>
        {modelToCards(mappedItems, "show-x-items-on-mobile")}
      </Grid>
    </>
  );
};

export default CtfItemShowcase;
