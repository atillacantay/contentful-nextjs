import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import { FeaturedRecipe } from "lib/__generated/sdk";
import { client } from "lib/graphql";
import { getLocale } from "next-intl/server";
import { draftMode } from "next/headers";
import CtfFeaturedRecipe from "./cft-featured-recipe.component";

interface CtfFeaturedRecipeGqlProps {
  id: string;
}

const CtfFeaturedRecipeGql = async ({ id }: CtfFeaturedRecipeGqlProps) => {
  const locale = await getLocale();
  const { isEnabled } = await draftMode();
  const activeLocale = mapLocaleToContentfulLocale(locale);

  const data = await client.featuredRecipeQuery({
    id,
    preview: isEnabled,
    locale: activeLocale,
  });

  const featuredRecipe = data?.featuredRecipe as FeaturedRecipe;

  return <CtfFeaturedRecipe {...featuredRecipe} />;
};

export default CtfFeaturedRecipeGql;
