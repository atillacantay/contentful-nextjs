import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import { ItemShowcase } from "lib/__generated/sdk";
import { client } from "lib/client";
import { getLocale } from "next-intl/server";
import CtfItemShowcase from "./cft-item-showcase.component";

interface CftPageProps {
  id: string;
}

const CtfItemShowcaseGql = async ({ id }: CftPageProps) => {
  const locale = await getLocale();
  const activeLocale = mapLocaleToContentfulLocale(locale);

  const data = await client.itemShowcaseQuery({
    id,
    preview: true,
    locale: activeLocale,
  });

  const itemShowcase = data?.itemShowcase as ItemShowcase;

  return (
    <>
      <CtfItemShowcase {...itemShowcase} />
    </>
  );
};

export default CtfItemShowcaseGql;
