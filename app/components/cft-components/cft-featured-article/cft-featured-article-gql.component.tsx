import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import { FeaturedArticle } from "lib/__generated/sdk";
import { client } from "lib/client";
import { getLocale } from "next-intl/server";
import CtfFeaturedArticle from "./cft-featured-article.component";

interface CftCtfFeaturedArticleGqlProps {
  id: string;
}

const CtfFeaturedArticleGql = async ({ id }: CftCtfFeaturedArticleGqlProps) => {
  const locale = await getLocale();
  const activeLocale = mapLocaleToContentfulLocale(locale);

  const data = await client.featuredArticleQuery({
    id,
    preview: true,
    locale: activeLocale,
  });

  const featuredArticle = data?.featuredArticle as FeaturedArticle;

  return (
    <>
      <CtfFeaturedArticle {...featuredArticle} />
    </>
  );
};

export default CtfFeaturedArticleGql;
