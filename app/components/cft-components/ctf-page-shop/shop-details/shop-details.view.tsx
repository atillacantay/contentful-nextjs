import Button from "@/components/common/button";
import CollapsibleMenu from "@/components/common/collapsible-menu";
import type { CollapsibleMenuItem } from "@/components/common/collapsible-menu/collapsible-menu.interface";
import Markdown from "@/components/common/markdown";
import Stack from "@/components/common/stack";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import Rate from "@/components/rate";
import Heart from "@/public/assets/icons/heart-outline.svg";
import type { PageShop } from "lib/__generated/sdk";
import { useTranslations } from "next-intl";
import { Fragment } from "react";
import AlsoViewedProducts from "./also-viewed-products.component";
import ProductImage from "./product-image.component";

interface ShopDetailsProps {
  product: PageShop;
}

const ShopDetails = ({ product }: ShopDetailsProps) => {
  const t = useTranslations();
  const {
    name,
    rating,
    description,
    productNetWeight,
    ingredients,
    specialty,
    storageRequirements,
    alsoViewedCollection,
    calories,
    carbs,
    fat,
    protein,
    sugar,
    fiber,
  } = product;
  const alsoViewedProducts = alsoViewedCollection?.items.filter(Boolean);

  const propertiesMap = new Map([
    [productNetWeight?.toString(), "common.size"],
    [ingredients, "common.ingredients"],
    [specialty, "common.specialty"],
    [storageRequirements, "common.storageRequirements"],
  ]);

  const nutritionsMap = new Map([
    [calories, "common.calories"],
    [carbs, "common.carbs"],
    [fat, "common.fat"],
    [protein, "common.protein"],
    [sugar, "common.sugar"],
    [fiber, "common.fiber"],
  ]);

  const collapsibleMenu: CollapsibleMenuItem[] = [
    {
      key: "other",
      header: t("common.other"),
      content: Array.from(propertiesMap.entries()).map(([value, label]) => (
        <Fragment key={label}>
          <b>{t(label)}</b>
          <br />
          <Markdown body={value} />
          <br />
        </Fragment>
      )),
    },
    {
      key: "nutritional-facts",
      header: t("common.nutritionalFacts"),
      content: Array.from(nutritionsMap.entries()).map(([value, label]) => (
        <Fragment key={label}>
          <ul className="list-disc space-y-2 list-inside">
            <li>
              {t(label)} <b>{value}</b>
            </li>
          </ul>
        </Fragment>
      )),
    },
  ];

  return (
    <>
      <div className="dark:lg:bg-goki_dark lg:bg-white">
        <Stack
          direction="col"
          className="lg:container lg:mx-auto  lg:py-8 h-2/6 lg:flex-row gap-8 lg:border-b lg:border-black/8"
        >
          <ProductImage product={product} />

          <div className="flex-1 max-lg:px-4">
            <Stack
              alignItems="center"
              justifyContent="between"
              className="mb-4"
            >
              {rating && <Rate rate={rating} />}
              <Stack className="max-lg:hidden">
                <Button
                  className="font-medium text-primary_red"
                  startIcon={<Heart fontSize={24} />}
                >
                  {t("common.save")}
                </Button>
              </Stack>
            </Stack>
            <Header weight="medium" className="text-[32px] mb-4">
              {name}
            </Header>

            <Text weight="medium" className="mb-4 lg:mb-8">
              {description}
            </Text>

            {/* <FormShopDetailsQuantity  /> */}

            <Stack>
              <CollapsibleMenu items={collapsibleMenu} />
            </Stack>
          </div>
        </Stack>
      </div>
      <AlsoViewedProducts alsoViewedProducts={alsoViewedProducts} />
      <Stack className="px-4 lg:container lg:mx-auto mb-11 lg:mb-7">
        <></>
        {/* <RecipeDetailReviews {...recipeDetailReviews} /> */}
      </Stack>
    </>
  );
};

export default ShopDetails;
