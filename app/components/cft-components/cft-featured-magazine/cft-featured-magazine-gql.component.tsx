import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import { FeaturedMagazine } from "lib/__generated/sdk";
import { client } from "lib/graphql";
import { getLocale } from "next-intl/server";
import { draftMode } from "next/headers";
import CtfFeaturedMagazine from "./cft-featured-magazine.component";

interface CtfFeaturedMagazineGqlProps {
  id: string;
}

const CtfFeaturedMagazineGql = async ({ id }: CtfFeaturedMagazineGqlProps) => {
  const locale = await getLocale();
  const { isEnabled } = await draftMode();
  const activeLocale = mapLocaleToContentfulLocale(locale);

  const data = await client.featuredMagazineQuery({
    id,
    preview: isEnabled,
    locale: activeLocale,
  });

  const featuredArticle = data?.featuredMagazine as FeaturedMagazine;

  return <CtfFeaturedMagazine {...featuredArticle} />;
};

export default CtfFeaturedMagazineGql;
