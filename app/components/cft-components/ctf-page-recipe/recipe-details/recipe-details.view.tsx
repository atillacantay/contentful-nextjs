import Stack from "@/components/common/stack";
import FormIngredients from "@/components/form-ingredients";
import PreparationSteps from "./preparation-steps.component";
import RecipeDetailHeader from "./recipe-detail-header.component";
import RecipeDetailReviews from "./recipe-detail-reviews.component";

import type { PageRecipe } from "lib/__generated/sdk";
import RelatedRecipes from "./related-recipes.component";

const RecipeDetail = ({
  recipe,
  recipeDetailReviews,
}: {
  recipe: PageRecipe;
  recipeDetailReviews?: React.ComponentProps<typeof RecipeDetailReviews>;
}): JSX.Element => {
  const preparationSteps =
    recipe.preparationStepsCollection?.items.filter(Boolean);
  const ingredients = recipe.ingredientsCollection?.items.filter(Boolean);
  const relatedRecipes = recipe.relatedRecipesCollection?.items.filter(Boolean);

  return (
    <>
      <div className="lg:py-8 lg:container lg:mx-auto sm-layout-header-hidden">
        <RecipeDetailHeader {...recipe} />
      </div>
      <Stack
        direction="col"
        alignItems="start"
        className="lg:flex-row py-8 lg:container lg:mx-auto lg:border-y lg:border-t-black/10 lg:gap-24"
      >
        <div className="flex-1 max-lg:mx-4">
          <PreparationSteps preparationSteps={preparationSteps} />
        </div>
        <FormIngredients
          servingSize={recipe.persons}
          ingredients={ingredients}
        />
      </Stack>
      <RelatedRecipes relatedRecipes={relatedRecipes} />

      <div className="px-4 lg:container lg:mx-auto mb-12 lg:mb-16">
        {/* <RecipeDetailReviews {...ModelRecipeDetailReviews} /> */}
      </div>
    </>
  );
};

export default RecipeDetail;
