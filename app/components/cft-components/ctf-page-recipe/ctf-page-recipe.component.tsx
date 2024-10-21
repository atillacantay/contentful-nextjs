import { PageRecipe } from "lib/__generated/sdk";
import RecipeDetail from "./recipe-details";

interface CtfPageRecipeProps {
  page: PageRecipe;
}

const CtfPageRecipe = ({ page }: CtfPageRecipeProps) => {
  return (
    <>
      <RecipeDetail recipe={page} />
    </>
  );
};

export default CtfPageRecipe;
