import CardArticle from "@/components/cards/card-article";
import CardMagazine from "@/components/cards/card-magazine";
import CardRecipe from "@/components/cards/card-recipe";
import CardShop from "@/components/cards/card-shop";
import Grid from "@/components/common/grid";
import { clsxm } from "@/utils/twMerge.utils";
import { ItemShowcase, ItemShowcaseItemsItem } from "lib/__generated/sdk";

const cardComponents: Record<string, any> = {
  PageRecipe: CardRecipe,
  PageArticle: CardArticle,
  PageMagazine: CardMagazine,
  PageShop: CardShop,
};

const getCardComponentByGenre = (card: ItemShowcaseItemsItem): JSX.Element => {
  const CardComponent = cardComponents[card.__typename!];
  return CardComponent ? <CardComponent {...card} /> : <></>;
};

const modelToCards = (cards: ItemShowcaseItemsItem[], className: string) =>
  cards.map((card: ItemShowcaseItemsItem, idx: number) => (
    <Grid.Item
      key={idx}
      className={clsxm(
        "col-span-1 " + card.__typename === "PageMasterclass"
          ? "lg:col-span-2"
          : "",
        className
      )}
    >
      {getCardComponentByGenre(card)}
    </Grid.Item>
  ));

const CtfItemShowcase = (props: ItemShowcase) => {
  const { itemsCollection } = props;
  const items = itemsCollection?.items.filter(Boolean) || [];

  return (
    <Grid lg={5} md={2} col={1} spacing={4}>
      {modelToCards(items, "show-x-items-on-mobile")}
    </Grid>
  );
};

export default CtfItemShowcase;
