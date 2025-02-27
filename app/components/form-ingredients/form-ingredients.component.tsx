"use client";

import { ComponentProps, useState } from "react";

import Button from "@/components/common/button";
import Card from "@/components/common/card";
import QuantitySelector from "@/components/common/quantity-selector";
import Stack from "@/components/common/stack";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import FormIngredientsList from "./form-ingredients-list";

import ChevronDown from "@/public/assets/icons/chevron-down-outline.svg";
import ChevronUp from "@/public/assets/icons/chevron-up-outline.svg";

import useIngredientShoppingList from "@/hooks/useIngredientShoppingList";
import { clsxm } from "@/utils/twMerge.utils";
import type { Ingredient } from "lib/__generated/sdk";
import { useTranslations } from "next-intl";

interface IFormIngredients extends ComponentProps<"div"> {
  className?: string;
  noQuantitySelector?: boolean;
  servingSize?: number;
  ingredients?: Ingredient[];
  noMobileView?: boolean;
}

const FormIngredients = ({
  className,
  servingSize,
  noQuantitySelector,
  ingredients,
  noMobileView,
  ...props
}: IFormIngredients): JSX.Element => {
  const { add } = useIngredientShoppingList();
  const t = useTranslations();
  const [isFooterOpen, setIsFooterOpen] = useState(false);
  const [servingSizeState, setServingSizeState] = useState(servingSize || 0);

  const handleDecrease = () => {
    setServingSizeState((prevServingSize) =>
      prevServingSize > 1 ? prevServingSize - 1 : prevServingSize
    );
  };

  const handleIncrease = () => {
    setServingSizeState((prevServingSize) => prevServingSize + 1);
  };

  // const addAllIngredientsToShoppingList = async () => {
  //   const shoppingListIngredients: ShoppingListIngredient[] = ingredients.map(
  //     (ingredient) => ({
  //       userId: 4130, // will be implemented after authentication
  //       ingredientId: ingredient._id,
  //       quantity: ingredient.quantity * servingSizeState,
  //       unit: ingredient.unit,
  //     })
  //   );

  //   await add(shoppingListIngredients);
  // };

  const MobileFormIngredients = () => (
    <Stack
      id="mobile-ingredients-footer"
      direction="col"
      className={clsxm(
        className,
        "fixed w-full bottom-0 left-0 z-[60] bg-white dark:bg-goki_dark",
        isFooterOpen ? "h-screen top-0" : ""
      )}
      {...props}
    >
      <Stack
        justifyContent="between"
        alignItems="center"
        className={clsxm(
          "p-4 pb-0",
          isFooterOpen
            ? "pb-4 pt-11 border-b border-black/10 dark:border-white/10"
            : ""
        )}
      >
        <Stack direction="col">
          <Text weight="medium">{t("common.ingredients")}</Text>

          {servingSizeState ? (
            <Stack alignItems="center" className="gap-2">
              <Text size="sm">{t("common.servingSize")}</Text>
              <QuantitySelector
                value={servingSizeState}
                onDecrease={handleDecrease}
                onIncrease={handleIncrease}
              />
            </Stack>
          ) : (
            <></>
          )}
        </Stack>
        <Stack
          className="cursor-pointer"
          onClick={() => setIsFooterOpen(!isFooterOpen)}
        >
          {isFooterOpen ? (
            <ChevronDown className="h-6 w-6 dark:text-white" />
          ) : (
            <ChevronUp className="h-6 w-6 dark:text-white" />
          )}
        </Stack>
      </Stack>

      <Stack className="flex-1 max-h-[calc(100vh-231px)] pb-4">
        {isFooterOpen && ingredients && ingredients.length > 0 ? (
          <Stack className="pt-6 px-4 overflow-scroll w-full">
            <FormIngredientsList
              ingredients={ingredients}
              servingSize={servingSizeState}
            />
          </Stack>
        ) : null}
      </Stack>
      <Stack className="px-4 pb-4 hidden">
        <Button
          variant="contained"
          className="bg-primary_red dark:bg-white dark:text-black"
          size="xl"
          fullWidth
        >
          {t("common.addAllToShoppingList")}
        </Button>
      </Stack>
    </Stack>
  );

  return (
    <div data-cmp="form-ingredients" className="flex-1">
      {!noMobileView && (
        <Stack className="lg:hidden">
          <MobileFormIngredients />
        </Stack>
      )}

      <Card
        className={clsxm(
          className,
          !noMobileView && "hidden lg:block",
          "shadow-[0_0_30px_0_rgba(0,0,0,0.1)] p-4"
        )}
      >
        <Card.Header>
          <Stack
            justifyContent="between"
            alignItems="center"
            className="border-b-2 pb-4 border-[rgba(255,255,255,0.08)]"
          >
            <Header as="h3" weight="medium" size="xxl">
              {t("common.ingredients")}
            </Header>

            {servingSizeState ? (
              <div className="flex items-center gap-2">
                <Text size="sm">
                  {t("common.servingSize")}{" "}
                  {noQuantitySelector && servingSizeState}
                </Text>
                {!noQuantitySelector && (
                  <QuantitySelector
                    value={servingSizeState}
                    onDecrease={handleDecrease}
                    onIncrease={handleIncrease}
                  />
                )}
              </div>
            ) : (
              <></>
            )}
          </Stack>
        </Card.Header>
        <Card.Content>
          {ingredients && ingredients.length > 0 ? (
            <div className="mb-8">
              <FormIngredientsList
                ingredients={ingredients}
                servingSize={servingSizeState}
              />
            </div>
          ) : null}
          <Button
            variant="contained"
            className="hidden bg-primary_red dark:bg-white dark:text-black"
            size="xl"
            fullWidth
            // onClick={addAllIngredientsToShoppingList}
          >
            {t("common.addAllToShoppingList")}
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default FormIngredients;
