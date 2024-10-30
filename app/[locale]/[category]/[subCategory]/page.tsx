import CtfPage from "@/components/cft-components/ctf-page";
import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import { generatePageMetadata } from "@/utils/metadata";
import { Query } from "lib/__generated/sdk";
import { client } from "lib/client";
import { Metadata, NextPage } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

interface SubCategoryPageProps {
  params: Promise<{ locale: string; subCategory: string; category: string }>;
}

const queryFunctionMap: Record<string, any> = {
  recipes: client.pageRecipeCategory,
};

const queryObjectKeyMap: Record<string, keyof Query> = {
  recipes: "pageRecipeCategoryCollection",
};

export async function generateMetadata({
  params,
}: SubCategoryPageProps): Promise<Metadata> {
  const { locale, subCategory, category } = await params;

  const queryObjectKey = queryObjectKeyMap[category];
  const queryFunction = queryFunctionMap[category];

  return generatePageMetadata(
    subCategory,
    `${category}/${subCategory}`,
    locale,
    queryObjectKey,
    queryFunction
  );
}

const SubCategoryPage: NextPage<SubCategoryPageProps> = async ({ params }) => {
  const { locale, category, subCategory } = await params;
  const { isEnabled } = await draftMode();
  const activeLocale = mapLocaleToContentfulLocale(locale as string);

  const queryFunction = queryFunctionMap[category];

  if (!queryFunction) {
    return notFound();
  }

  const data = await queryFunction({
    slug: subCategory,
    preview: isEnabled,
    locale: activeLocale,
  });

  const pageDataKey = queryObjectKeyMap[category];
  const page = data?.[pageDataKey]?.items?.[0];

  if (!page) {
    return notFound();
  }

  return <CtfPage page={page} />;
};

export default SubCategoryPage;
