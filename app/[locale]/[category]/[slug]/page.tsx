import CtfPageArticle from "@/components/cft-components/ctf-page-article";
import CtfPageRecipe from "@/components/cft-components/ctf-page-recipe";
import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import { generatePageMetadata } from "@/utils/metadata";
import { client } from "lib/client";
import { Metadata, NextPage } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

interface SlugPageProps {
  params: Promise<{ locale: string; slug: string; category: string }>;
}

type QueryObjectKey = "pageRecipeCollection" | "pageArticleCollection";

const componentMap: Record<string, any> = {
  recipes: CtfPageRecipe,
  articles: CtfPageArticle,
};

const queryFunctionMap: Record<string, any> = {
  recipes: client.pageRecipe,
  articles: client.pageArticle,
};

const queryObjectKeyMap: Record<string, QueryObjectKey> = {
  recipes: "pageRecipeCollection",
  articles: "pageArticleCollection",
};

export async function generateMetadata({
  params,
}: SlugPageProps): Promise<Metadata> {
  const { locale, slug, category } = await params;

  const queryObjectKey = queryObjectKeyMap[category];
  const queryFunction = queryFunctionMap[category];

  return generatePageMetadata(
    slug,
    `${category}/${slug}`,
    locale,
    queryObjectKey,
    queryFunction
  );
}

const SlugPage: NextPage<SlugPageProps> = async ({ params }) => {
  const { locale, slug, category } = await params;
  const { isEnabled } = await draftMode();
  const activeLocale = mapLocaleToContentfulLocale(locale as string);
  const queryFunction = queryFunctionMap[category];

  if (!queryFunction) {
    return notFound();
  }

  const data = await queryFunction({
    slug,
    preview: isEnabled,
    locale: activeLocale,
  });

  const pageDataKey = queryObjectKeyMap[category];
  const page = data?.[pageDataKey]?.items?.[0];

  if (!page) {
    return notFound();
  }

  const PageComponent = componentMap[category];

  return <PageComponent page={page} />;
};

export default SlugPage;
