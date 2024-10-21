import useWebApi from "./useWebApi";

export interface ShoppingListIngredient {
  userId: number;
  ingredientId: number;
  quantity: number;
  unit: string;
  productId?: number;
  productAmount?: number;
}

const useIngredientShoppingList = () => {
  const { data: results, error, isLoading, post } = useWebApi([]);

  const add = async (data: ShoppingListIngredient[], callback?: () => void) => {
    const result = await post(
      "shopping-list/add?cultureCode=en-US",
      data,
      undefined,
      callback
    );
    return result;
  };

  return {
    add,
    results,
    error,
    isLoading,
  };
};

export default useIngredientShoppingList;
