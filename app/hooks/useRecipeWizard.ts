import useWebApi from "./useWebApi";

const wizardUrl = "recipe";

export interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  unit: number;
}

export interface Instruction {
  instructionStepID: number;
  desc: string;
  stepDesc: string;
  timer: number;
  image: string;
}

export type RecipeVisibility = "public" | "private";

export interface RecipeEditData {
  recipeNodeId: number;
  recipeName: string;
  descriptions: string;
  difficultyLevel: number;
  typeOfMeal: number;
  dietaryStyle: number;
  mealTime: number;
  servingSize: number;
  ingredients: Ingredient[];
  instructions: Instruction[];
  instructionsImages: string[];
  recipeImages: string[];
  calories: number;
  visibility: RecipeVisibility;
}

interface ResponseType {
  data: RecipeEditData;
}

const useRecipeWizard = (cultureName: string) => {
  const {
    data,
    error,
    isLoading,
    post,
    get: apiGet,
  } = useWebApi<ResponseType | null>(null);

  const add = async (data: any, callback?: () => void) => {
    await post(
      `${wizardUrl}/add?cultureCode=${cultureName}`,
      data,
      undefined,
      callback
    );
  };
  const update = async (
    data: any,
    editedRecipeNodeId: string,
    callback?: () => void
  ) => {
    await post(
      `${wizardUrl}/update?nodeId=${editedRecipeNodeId}&cultureCode=${cultureName}`,
      data,
      undefined,
      callback
    );
  };

  const get = async (editedRecipeNodeId: string) => {
    await apiGet(
      `${wizardUrl}/get?nodeId=${editedRecipeNodeId}&cultureCode=${cultureName}`
    );
  };

  return {
    get,
    add,
    update,
    response: data,
    error,
    isLoading,
  };
};

export default useRecipeWizard;
