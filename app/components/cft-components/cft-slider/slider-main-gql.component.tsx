import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import type { Slider as SliderType } from "lib/__generated/sdk";
import { client } from "lib/client";
import { getLocale } from "next-intl/server";
import Slider from "./slider-main.component";

interface SliderMainGqlProps {
  id: string;
}

const SliderMainGql = async ({ id }: SliderMainGqlProps) => {
  const locale = await getLocale();
  const activeLocale = mapLocaleToContentfulLocale(locale);

  const data = await client.slider({
    id,
    preview: true,
    locale: activeLocale,
  });

  const slider = data?.sliderCollection?.items?.[0] as SliderType;
  const slides = slider?.sliderItemCollection?.items?.filter(Boolean);

  return <Slider slides={slides} />;
};

export default SliderMainGql;
