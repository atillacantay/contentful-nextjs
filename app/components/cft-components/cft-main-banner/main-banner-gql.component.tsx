import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import type { MainBanner as MainBannerType } from "lib/__generated/sdk";
import { client } from "lib/graphql";
import { getLocale } from "next-intl/server";
import { draftMode } from "next/headers";
import MainBanner from "./main-banner.component";

interface MainBannerGqlProps {
  id: string;
}

const MainBannerGql = async ({ id }: MainBannerGqlProps) => {
  const locale = await getLocale();
  const { isEnabled } = await draftMode();
  const activeLocale = mapLocaleToContentfulLocale(locale);

  const data = await client.mainBanner({
    id,
    preview: isEnabled,
    locale: activeLocale,
  });

  const mainBannerData = data?.mainBanner as MainBannerType;

  return <MainBanner {...mainBannerData} />;
};

export default MainBannerGql;
