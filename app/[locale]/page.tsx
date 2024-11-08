import CtfPage from "@/components/cft-components/ctf-page";
import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import { generatePageMetadata } from "@/utils/metadata";
import type { Page } from "lib/__generated/sdk";
import { client } from "lib/graphql";
import type { Metadata, NextPage } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  return generatePageMetadata("home", "home", (await params).locale);
}

const HomePage: NextPage<HomePageProps> = async ({ params }) => {
  const { isEnabled } = await draftMode();
  const { locale } = await params;
  const activeLocale = mapLocaleToContentfulLocale(locale as string);
  const data = await client.page({
    slug: "home",
    preview: isEnabled,
    locale: activeLocale,
  });

  const page = data?.pageCollection?.items?.[0] as Page;
  if (!page) {
    return notFound();
  }

  return <CtfPage page={page} />;
};

export default HomePage;
