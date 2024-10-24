import CardArticle from "@/components/cards/card-article";
import CardRecipe from "@/components/cards/card-recipe";
import Grid from "@/components/common/grid";
import type { ContentfulGenre, Genre, ICARD } from "@/types/common";
import { clsxm } from "@/utils/twMerge.utils";
import { ItemShowcase } from "lib/__generated/sdk";

const genreMap: Record<ContentfulGenre, Genre> = {
  PageRecipe: "recipe",
  PageArticle: "article",
};

const cardComponents: Record<string, any> = {
  recipe: CardRecipe,
  article: CardArticle,
};

const getCardComponentByGenre = (card: ICARD): JSX.Element => {
  const CardComponent = cardComponents[card.genre];
  return CardComponent ? <CardComponent {...card} /> : <></>;
};

const modelToCards = (cards: ICARD[], className: string) =>
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
  const items = itemsCollection?.items.filter(Boolean) || [];

  const mappedItems: ICARD[] = items.map((item) => ({
    genre: genreMap[item.__typename!],
    header: item.title,
    description: item.author?.name,
    star: item.rating,
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
