"use client";

import Button from "@/components/common/button";
import Stack from "@/components/common/stack";
import { Text } from "@/components/common/typography";
import UserMenu from "@/components/user-menu";
import HOConClickOutside from "@/hocs/HOConClickOutside";
import { clsxm } from "@/utils/twMerge.utils";
import { useSelectedLayoutSegments } from "next/navigation";
import React, { useState } from "react";
import { IHeaderIconButton } from "./header.interfaces";
// import { ReactComponent as FoodiesIcon } from "@/assets/icons/foodies.svg";
import ContentfulImage from "@/components/cft-components/cft-image";
import { useRouter } from "@/i18n/routing";
import GlobeIcon from "@/public/assets/icons/globe.svg";
import UserIcon from "@/public/assets/icons/user.svg";
import { EventKeys, pushEventToDataLayer } from "@/utils/event-utils";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Page } from "lib/__generated/sdk";
import { useLocale, useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const NavigationDrawer = dynamic(
  () =>
    import("@/components/navigation-drawer").then((module) => module.default),
  { ssr: false }
);
const HeaderSearch = dynamic(
  () => import("./header-search").then((module) => module.default),
  { ssr: false }
);

interface HeaderPropsInterface {
  userMenu: React.ComponentProps<typeof UserMenu>;
  shopPagePath: string;
  headerSearch: Omit<
    React.ComponentProps<typeof HeaderSearch>,
    "wrapperDivProps"
  >;
  navigationItems: Page[];
}

const HeaderComponent = ({
  userMenu,
  headerSearch,
  navigationItems,
}: HeaderPropsInterface) => {
  const t = useTranslations();
  const currentLocale = useLocale();
  const { push } = useRouter();
  const { user } = useUser();
  const urlSegments = useSelectedLayoutSegments();

  const handleLocaleChange = async () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";

    pushEventToDataLayer(EventKeys.LANGUAGE_CHANGED, { language: newLocale });

    push(`/${urlSegments.join("/")}`, { locale: newLocale });
  };

  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = (): void => {
    setUserMenuOpen((state) => !state);
  };

  const HeaderIconButton = ({
    icon: Icon,
    mobileIcon: MobileIcon,
    ...props
  }: IHeaderIconButton): JSX.Element => {
    props.className = clsxm("w-6 h-6 bg-transparent", props.className);
    return (
      <Button.Icon {...(props.href ? { as: "a" } : {})} {...props}>
        <Icon
          className={clsxm(
            "w-6 h-6 text-black dark:text-white",
            MobileIcon && "hidden md:block",
            props.className
          )}
        />
        {MobileIcon && (
          <MobileIcon
            className={clsxm(
              "w-6 h-6 text-black dark:text-white",
              "md:hidden",
              props.className
            )}
          />
        )}
      </Button.Icon>
    );
  };

  return (
    <header
      data-cmp="header-component"
      className="flex items-center grow print:hidden"
    >
      <HeaderSearch
        wrapperDivProps={{
          className: "grow mx-4 ltr:md:ml-8 rtl:md:mr-8",
        }}
        {...headerSearch}
      />

      {/* Desktop */}
      <Stack
        className="hidden md:flex space-x-6 rtl:space-x-reverse ltr:md:ml-8 rtl:md:mr-8
            group-[&:has(#search-active)]/layout:hidden
            "
        alignItems="center"
      >
        <Stack
          onClick={handleLocaleChange}
          spacing={2}
          alignItems="center"
          className="cursor-pointer"
        >
          <Text weight="light">{t("common.oppositeLanguage")}</Text>
          <GlobeIcon fontSize={24} className="text-black dark:text-white" />
        </Stack>

        <HOConClickOutside on={() => setUserMenuOpen(false)}>
          <div>
            {(() => {
              if (user && user.picture)
                return (
                  <ContentfulImage
                    src={user.picture}
                    width={32}
                    height={32}
                    onClick={toggleUserMenu}
                    className="cursor-pointer rounded-full h-[32px] w-[32px] object-cover"
                    alt={user.name || "avatar"}
                    unoptimized
                  />
                );

              if (user && !user.picture && user.name)
                return (
                  <svg
                    className="cursor-pointer"
                    onClick={toggleUserMenu}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.1"
                      cx="16"
                      cy="16"
                      r="16"
                      fill="#C42929"
                    />
                    <text
                      x="50%"
                      y="17"
                      dominant-baseline="middle"
                      text-anchor="middle"
                      fill="#C42929"
                      fontSize={12}
                    >
                      {user.name[0] + user.name[1] || ""}
                    </text>
                  </svg>
                );

              return (
                <HeaderIconButton icon={UserIcon} onClick={toggleUserMenu} />
              );
            })()}
            {userMenuOpen && (
              <Stack
                direction="col"
                className="hidden md:flex absolute top-32 ltr:right-16 rtl:left-16 w-80"
              >
                <UserMenu {...userMenu} />
              </Stack>
            )}
          </div>
        </HOConClickOutside>
      </Stack>

      {/* Mobile */}
      <Stack
        className="md:hidden space-x-4 rtl:space-x-reverse"
        alignItems="center"
      >
        <Text className="uppercase" onClick={handleLocaleChange}>
          {t("common.oppositeLanguageShort")}
        </Text>

        <div className="border-r border-custom_divider dark:border-custom2_dark  h-4" />

        <NavigationDrawer
          userMenu={userMenu}
          navigationItems={navigationItems}
        />
      </Stack>
    </header>
  );
};

export default HeaderComponent;
