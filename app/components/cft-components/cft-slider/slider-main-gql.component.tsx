import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import type { Slider as SliderType } from "lib/__generated/sdk";
import { client } from "lib/client";
import { getLocale } from "next-intl/server";
import { draftMode } from "next/headers";
import Slider from "./slider-main.component";

interface SliderMainGqlProps {
  id: string;
}

const SliderMainGql = async ({ id }: SliderMainGqlProps) => {
  const locale = await getLocale();
  const { isEnabled } = await draftMode();
  const activeLocale = mapLocaleToContentfulLocale(locale);

  const data = await client.slider({
    id,
    preview: isEnabled,
    locale: activeLocale,
  });

  const slider = data?.sliderCollection?.items?.[0] as SliderType;
  const slides = slider?.sliderItemCollection?.items;

  return <Slider slides={slides} />;
};

export default SliderMainGql;
