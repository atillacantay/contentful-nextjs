import useWebApi from "./useWebApi";

const recipeSearchUrl = "search";

export interface RecipeSearchIngredient {
  id: number;
  name: string;
}

type ResponseType = RecipeSearchIngredient[];

const useRecipeSearch = (cultureName: string) => {
  const { data, error, isLoading, post } = useWebApi<ResponseType | null>([]);

  const getIngredients = async (name: string) => {
    await post(
      `${recipeSearchUrl}/ingredient?name=${name}&cultureCode=${cultureName}`,
      undefined
    );
  };

  return {
    getIngredients,
    data,
    error,
    isLoading,
  };
};

export default useRecipeSearch;
