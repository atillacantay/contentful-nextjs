import { useState } from "react";

import Button from "@/components/common/button";
import Stack from "@/components/common/stack";
import Text from "@/components/common/typography/text";

import AddedShoppingList from "@/public/assets/icons/added-shopping-list.svg";
import ShoppingList from "@/public/assets/icons/shopping-list.svg";

import useIngredientShoppingList from "@/hooks/useIngredientShoppingList";
import decToFrac from "@/utils/decimalToFraction";
import type { Ingredient } from "lib/__generated/sdk";
// import { Ingredient } from "./form-ingredients.interface";

interface IFormIngredientsList {
  ingredients: Ingredient[];
  servingSize: number;
  labelAdd: string;
  labelAdded: string;
}

const FormIngredientsList = ({
  ingredients,
  servingSize,
  labelAdd,
  labelAdded,
}: IFormIngredientsList): JSX.Element => {
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
            {servingSize ? (
              <>
                <span data-quantity={ingredient.quantity}>
                  {decToFrac(ingredient.quantity * servingSize)}
                </span>{" "}
                <span data-unit={ingredient.unitValue}>{ingredient.unit}</span>{" "}
              </>
            ) : (
              <></>
            )}
            {ingredient.name}
          </Text>
          {ingredient.isAdded ? (
            <Button
              variant="text"
              className="hidden text-positive px-2"
              startIcon={<AddedShoppingList />}
            >
              {labelAdded}
            </Button>
          ) : (
            <Button
              variant="outlined"
              className="hidden text-primary_red dark:text-primary_red_dark"
              size="sm"
              startIcon={<ShoppingList />}
              onClick={() => addIngredientToShoppingList(ingredient)}
            >
              {labelAdd}
            </Button>
          )}
        </Stack>
      ))}
    </Stack>
  );
};

export default FormIngredientsList;
