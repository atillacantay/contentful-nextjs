import ComponentResolver from "@/components/shared/component-resolver";
import { mapLocaleToContentfulLocale } from "@/utils/local-mapping";
import type { Section as SectionType } from "lib/__generated/sdk";
import { client } from "lib/client";
import { getLocale } from "next-intl/server";
import { draftMode } from "next/headers";
import Section from "./cft-section.component";

interface CtfSectionProps {
  id: string;
}

const CtfSectionGql = async ({ id }: CtfSectionProps) => {
  const locale = await getLocale();
  const { isEnabled } = await draftMode();
  const activeLocale = mapLocaleToContentfulLocale(locale);

  const data = await client.sectionQuery({
    id,
    preview: isEnabled,
    locale: activeLocale,
  });

  const section = data?.section as SectionType;
  const typeName = section.content?.__typename?.toLocaleLowerCase();
  const isFeaturedItem =
    typeName && ["featuredarticle", "featuredrecipe"].includes(typeName);

  return (
    <>
      <Section
        sectionTitle={{
          title: section.title || "",
          btnTitle: section.buttonText,
          btnLink: section.buttonLink,
        }}
        showXItemsOnMobile={3}
        showMobileButton={true}
        sectionClassName={isFeaturedItem ? "max-sm:px-4" : ""}
        className={
          isFeaturedItem
            ? "md:container md:mx-auto pb-14"
            : "container mx-auto max-sm:px-4 pt-6 pb-14"
        }
      >
        <ComponentResolver component={section.content} />
      </Section>
    </>
  );
};

export default CtfSectionGql;
