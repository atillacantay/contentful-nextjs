import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import { FeaturedArticle } from "lib/__generated/sdk";
import { client } from "lib/client";
import { getLocale } from "next-intl/server";
import { draftMode } from "next/headers";
import CtfFeaturedArticle from "./cft-featured-article.component";

interface CftCtfFeaturedArticleGqlProps {
  id: string;
}

const CtfFeaturedArticleGql = async ({ id }: CftCtfFeaturedArticleGqlProps) => {
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
