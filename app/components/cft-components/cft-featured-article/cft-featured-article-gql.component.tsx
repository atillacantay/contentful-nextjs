import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import type { FeaturedArticle } from "lib/__generated/sdk";
import { client } from "lib/graphql";
import { getLocale } from "next-intl/server";
import { draftMode } from "next/headers";
import CtfFeaturedArticle from "./cft-featured-article.component";

interface CtfFeaturedArticleGqlProps {
  id: string;
}

const CtfFeaturedArticleGql = async ({ id }: CtfFeaturedArticleGqlProps) => {
  const locale = await getLocale();
  const { isEnabled } = await draftMode();
  const activeLocale = mapLocaleToContentfulLocale(locale);

  const data = await client.featuredArticleQuery({
    id,
    preview: isEnabled,
    locale: activeLocale,
  });

  const featuredArticle = data?.featuredArticle as FeaturedArticle;

  return <CtfFeaturedArticle {...featuredArticle} />;
};

export default CtfFeaturedArticleGql;
