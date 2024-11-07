"use client";

import Stack from "@/components/common/stack";
import { Text } from "@/components/common/typography";
import { useRouter } from "@/i18n/routing";
import GlobeIcon from "@/public/assets/icons/globe.svg";
import { EventKeys, pushEventToDataLayer } from "@/utils/event-utils";
import { useLocale, useTranslations } from "next-intl";
import { useSelectedLayoutSegments } from "next/navigation";

interface LanguageChangerProps {
  noIcon?: boolean;
}

const LanguageChanger = ({ noIcon }: LanguageChangerProps) => {
  const t = useTranslations();
  const { push } = useRouter();
  const currentLocale = useLocale();
  const urlSegments = useSelectedLayoutSegments();

  const handleLocaleChange = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";

    pushEventToDataLayer(EventKeys.LANGUAGE_CHANGED, { language: newLocale });

    push(`/${urlSegments.join("/")}`, { locale: newLocale });
  };

  return (
    <Stack className="text-white" spacing={2} onClick={handleLocaleChange}>
      <Text
        className="text-white/80 dark:text-white/80 cursor-pointer"
        weight="light"
      >
        {t("common.oppositeLanguage")}
      </Text>
      {!noIcon && (
        <GlobeIcon
          width={24}
          height={24}
          fill="white"
          className="opacity-80 cursor-pointer"
        />
      )}
    </Stack>
  );
};

export default LanguageChanger;
