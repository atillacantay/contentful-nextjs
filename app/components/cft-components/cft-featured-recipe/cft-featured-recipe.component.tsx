import { FeaturedRecipe } from "lib/__generated/sdk";
import RecipeOfDay from "../../recipe-of-day";

const CtfFeaturedRecipe = async (featuredRecipe: FeaturedRecipe) => {
  if (!featuredRecipe.recipe) return;

  return <RecipeOfDay {...featuredRecipe.recipe} />;
};

export default CtfFeaturedRecipe;
