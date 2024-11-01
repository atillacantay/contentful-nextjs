import { useState } from "react";

import Button from "@/components/common/button";
import Stack from "@/components/common/stack";
import Text from "@/components/common/typography/text";

import AddedShoppingList from "@/public/assets/icons/added-shopping-list.svg";
import ShoppingList from "@/public/assets/icons/shopping-list.svg";

import useIngredientShoppingList from "@/hooks/useIngredientShoppingList";
import decToFrac from "@/utils/decimalToFraction";
import type { Ingredient } from "lib/__generated/sdk";
import { useTranslations } from "next-intl";

interface IFormIngredientsList {
  ingredients: Ingredient[];
  servingSize: number;
}

const FormIngredientsList = ({
  ingredients,
  servingSize,
}: IFormIngredientsList): JSX.Element => {
  const t = useTranslations();
  const { add } = useIngredientShoppingList();
  const [formIngredients] = useState(ingredients);

  // const addIngredientToShoppingList = async (ingredient: Ingredient) => {
  //   const ingredientData: ShoppingListIngredient = {
  //     userId: 4130, // will be implemented after authentication
  //     ingredientId: ingredient.ingredientId,
  //     quantity: ingredient.quantity * servingSize,
  //     unit: ingredient.unit,
  //   };
  //   await add([ingredientData]);
  // };

  return (
    <Stack as="ul" direction="col" spacing={4} className="max-lg:max-w-[430px]">
      {formIngredients?.map((ingredient) => (
        <Stack
          key={ingredient._id}
          as="li"
          alignItems="center"
          justifyContent="between"
          spacing={4}
        >
          <Text as="span">
            {servingSize && ingredient.quantity ? (
              <>
                <span>{decToFrac(ingredient.quantity * servingSize)}</span>{" "}
                <span>{ingredient.unit}</span>{" "}
              </>
            ) : (
              <></>
            )}
            {ingredient.name}
          </Text>
          {true ? (
            <Button
              variant="text"
              className="hidden text-positive px-2"
              startIcon={<AddedShoppingList />}
            >
              {t("common.added")}
            </Button>
          ) : (
            <Button
              variant="outlined"
              className="hidden text-primary_red dark:text-primary_red_dark"
              size="sm"
              startIcon={<ShoppingList />}
              // onClick={() => addIngredientToShoppingList(ingredient)}
            >
              {t("common.add")}
            </Button>
          )}
        </Stack>
      ))}
    </Stack>
  );
};

export default FormIngredientsList;
