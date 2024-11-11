import Stack from "@/components/common/stack";
import FormIngredients from "@/components/form-ingredients";
import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import {
  RecipeReviewOrder,
  type PageRecipe,
  type Query,
} from "lib/__generated/sdk";
import { client } from "lib/graphql";
import { getLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import PreparationSteps from "./preparation-steps.component";
import RecipeDetailHeader from "./recipe-detail-header.component";
import RecipeDetailReviews from "./recipe-detail-reviews.component";

const RelatedRecipes = dynamic(() =>
  import("./related-recipes.component").then((module) => module.default)
);

const getAllRecipeReviews = async (slug?: string) => {
  const locale = await getLocale();
  const activeLocale = mapLocaleToContentfulLocale(locale);
  const { isEnabled } = await draftMode();

  const data = await client.recipeReviews({
    slug: slug!,
    preview: isEnabled,
    locale: activeLocale,
    limit: 3,
    order: RecipeReviewOrder.SysFirstPublishedAtDesc,
  });

  return (data as Query).recipeReviewCollection;
};

const RecipeDetail = async ({ recipe }: { recipe: PageRecipe }) => {
  const allReviewsCollection = await getAllRecipeReviews(recipe.slug);
  const allReviews = allReviewsCollection?.items;
  const allReviewsCount = allReviewsCollection?.total;

  const preparationSteps = recipe.preparationStepsCollection?.items;
  const ingredients = recipe.ingredientsCollection?.items;
  const relatedRecipes = recipe.relatedRecipesCollection?.items;

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
        <RecipeDetailReviews
          recipe={recipe}
          allReviews={allReviews}
          allReviewsCount={allReviewsCount}
        />
      </div>
    </>
  );
};

export default RecipeDetail;
