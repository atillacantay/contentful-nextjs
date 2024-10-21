import CtfPage from "@/components/cft-components/ctf-page";
import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import { generatePageMetadata } from "@/utils/metadata";
import { Page } from "lib/__generated/sdk";
import { client } from "lib/client";
import { Metadata, NextPage } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: { locale: string; category: string };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  return generatePageMetadata(params.category, params.category, params.locale);
}

const CategoryPage: NextPage<CategoryPageProps> = async ({ params }) => {
  const { locale, category } = params;
  const { isEnabled } = draftMode();
  const activeLocale = mapLocaleToContentfulLocale(locale as string);
  const data = await client.page({
    slug: category,
    preview: isEnabled,
    locale: activeLocale,
  });

  const page = data?.pageCollection?.items?.[0] as Page;
  if (!page) {
    return notFound();
  }

  return <CtfPage page={page} />;
};

export default CategoryPage;
