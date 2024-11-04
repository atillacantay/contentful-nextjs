import CtfPage from "@/components/cft-components/ctf-page";
import CtfPageArticle from "@/components/cft-components/ctf-page-article";
import CtfPageRecipe from "@/components/cft-components/ctf-page-recipe";
import CtfPageShop from "@/components/cft-components/ctf-page-shop";
import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import { generatePageMetadata } from "@/utils/metadata";
import { Query } from "lib/__generated/sdk";
import { client } from "lib/client";
import { Metadata, NextPage } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

interface SlugPageProps {
  params: Promise<{ locale: string; slug: string[]; category: string }>;
}

const componentMap: Record<string, any> = {
  recipes: CtfPageRecipe,
  shop: CtfPageShop,
  magazines: CtfPageArticle,
};

const categoryComponentMap: Record<string, any> = {
  recipes: CtfPage,
};

const queryFunctionMap: Record<string, any> = {
  recipes: client.pageRecipe,
  shop: client.pageShop,
  magazines: client.pageArticle,
};

const queryObjectKeyMap: Record<string, keyof Query> = {
  recipes: "pageRecipeCollection",
  shop: "pageShopCollection",
  magazines: "pageArticleCollection",
};

const categoryQueryFunctionMap: Record<string, any> = {
  recipes: client.pageRecipeCategory,
};

const categoryQueryObjectKeyMap: Record<string, keyof Query> = {
  recipes: "pageRecipeCategoryCollection",
};

const PagesDontHaveCategory = ["magazines"];

const isCategoryPage = (slugs: string[], category: string) =>
  !PagesDontHaveCategory.includes(category) && slugs.length === 1;

const getSlug = (slugs: string[], category: string) =>
  isCategoryPage(slugs, category) ? slugs[0] : slugs[slugs.length - 1];

const getQueryFunction = (slugs: string[], category: string) =>
  isCategoryPage(slugs, category)
    ? categoryQueryFunctionMap[category]
    : queryFunctionMap[category];

const getQueryObjectKey = (slugs: string[], category: string) =>
  isCategoryPage(slugs, category)
    ? categoryQueryObjectKeyMap[category]
    : queryObjectKeyMap[category];

export async function generateMetadata({
  params,
}: SlugPageProps): Promise<Metadata> {
  const { locale, slug: slugArray, category } = await params;
  const slug = getSlug(slugArray, category);
  const queryObjectKey = getQueryObjectKey(slugArray, category);
  const queryFunction = getQueryFunction(slugArray, category);

  return generatePageMetadata(
    slug,
    `${category}/${slugArray.join("/")}`,
    locale,
    queryObjectKey,
    queryFunction
  );
}

const SlugPage: NextPage<SlugPageProps> = async ({ params }) => {
  const { locale, slug: slugArray, category } = await params;
  const { isEnabled } = await draftMode();
  const activeLocale = mapLocaleToContentfulLocale(locale as string);
  const slug = getSlug(slugArray, category);
  const queryFunction = getQueryFunction(slugArray, category);

  if (!queryFunction) {
    return notFound();
  }

  const data = await queryFunction({
    slug,
    preview: isEnabled,
    locale: activeLocale,
  });

  const pageDataKey = getQueryObjectKey(slugArray, category);
  const page = data?.[pageDataKey]?.items?.[0];

  if (!page) {
    return notFound();
  }

  const PageComponent = isCategoryPage(slugArray, category)
    ? categoryComponentMap[category]
    : componentMap[category];
  return <PageComponent page={page} />;
};

export default SlugPage;
