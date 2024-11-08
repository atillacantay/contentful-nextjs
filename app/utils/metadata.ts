import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import {
  PageQuery,
  PageQueryVariables,
  PageRecipeQuery,
  PageRecipeQueryVariables,
  Query,
} from "lib/__generated/sdk";
import { client } from "lib/graphql";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

const WebUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

const generateUrl = (locale: string, slug: string) => {
  return new URL(
    `${locale}/${slug}`,
    process.env.NEXT_PUBLIC_BASE_URL!
  ).toString();
};

export const generatePageMetadata = async (
  pageType: string,
  slug: string,
  locale: string,
  queryObjectKey: keyof Query = "pageCollection",
  queryFunction?: (
    variables: PageRecipeQueryVariables | PageQueryVariables,
    requestHeaders?: HeadersInit | undefined
  ) => Promise<PageRecipeQuery | PageQuery>
): Promise<Metadata> => {
  const activeLocale = mapLocaleToContentfulLocale(locale as string);
  const queryFn = queryFunction || client.page;
  const [PagedataSeo] = await Promise.all([
    queryFn({
      slug: pageType,
      locale: activeLocale,
      preview: (await draftMode()).isEnabled,
    }),
  ]);

  const landingPage = (PagedataSeo as any)[queryObjectKey]?.items[0];
  if (!landingPage) {
    return notFound();
  }

  const url = generateUrl(locale as string, slug);

  const metaTags = {
    title: landingPage.seo?.title ?? landingPage?.pageName,
    description: landingPage.seo?.description,
    image: landingPage.seo?.image,
    no_index: landingPage.seo?.noIndex,
    no_follow: landingPage.seo?.noFollow,
  };

  return {
    title: metaTags.title,
    description: metaTags.description,
    metadataBase: new URL(WebUrl),
    alternates: {
      canonical: url,
      languages: {
        "en-US": "/en",
        "ar-SA": "/ar",
        "x-default": "/ar",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Goody Kitchen",
      locale: locale,
      url: url || "",
      title: metaTags.title || "",
      description: metaTags.description || undefined,
      images: {
        url: metaTags.image?.url || "",
        width: metaTags.image?.width || 0,
        height: metaTags.image?.height || 0,
        alt: metaTags.image?.description || "",
        type: metaTags.image?.contentType || "",
      },
    },
    robots: {
      follow: !metaTags?.no_follow || false,
      index: !metaTags?.no_index || false,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
};
