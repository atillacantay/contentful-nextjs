import { MealTypeCategory } from "@/components/meal-planner-cards-section/meal-planner-cards-section.types";
import useWebApi from "./useWebApi";

const mealPlannerUrl = "mealplanner";

export interface MealType {
  rule: {
    id: number;
    occurence: number;
    specificDate: string;
  };
  url: string;
  name: string;
  image: string;
  guid: string;
  favoritesNumberText: string;
  ingredientsCount: number;
  persons: number;
  cookingTimeMinutes: number;
  ingredients: string[];
}

interface ResponseType {
  date: string;
  dictionary: Record<string, string>;
  breakfast: MealType[];
  lunch: MealType[];
  dinner: MealType[];
}

interface AddRecipeData {
  mealType: string;
  recipeGuid: string;
  occurence: string;
  specificDate: string;
}

const useMealPlanner = (cultureName: string) => {
  const {
    data,
    error,
    isLoading,
    post,
    get,
    put,
    deleteApi,
    updateDataDirectly,
  } = useWebApi<ResponseType>({
    date: "",
    dictionary: {},
    breakfast: [],
    lunch: [],
    dinner: [],
  });

  const getDayRecipes = async (date: string) => {
    await get(
      `${mealPlannerUrl}/recipes?forDate=${date}&cultureCode=${cultureName}`
    );
  };

  const addRecipes = async (data: AddRecipeData[], callback?: () => void) => {
    await post(
      `${mealPlannerUrl}/add?cultureCode=${cultureName}`,
      data,
      undefined,
      callback
    );
  };

  const editRecipe = async (data: any) => {
    await put(`${mealPlannerUrl}/edit?cultureCode=${cultureName}`, data);
  };

  const removeRecipe = async (ruleId: string, mealType: MealTypeCategory) => {
    await deleteApi(
      `${mealPlannerUrl}/delete/${ruleId}?cultureCode=${cultureName}`,
      {
        onSuccess: () => {
          const updatedMealType = data[mealType].filter(
            (meal) => meal.rule.id.toString() !== ruleId
          );
          updateDataDirectly({ [mealType]: updatedMealType });
        },
      }
    );
  };

  return {
    getDayRecipes,
    addRecipes,
    editRecipe,
    removeRecipe,
    data,
    error,
    isLoading,
  };
};

export default useMealPlanner;
