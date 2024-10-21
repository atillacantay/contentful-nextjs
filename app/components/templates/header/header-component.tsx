"use client";

import Button from "@/components/common/button";
import Stack from "@/components/common/stack";
import { Text } from "@/components/common/typography";
import NavigationDrawer from "@/components/navigation-drawer";
import type { NavigationItem } from "@/components/navigation-drawer/navigation-drawer.types";
import UserMenu from "@/components/user-menu";
import HOConClickOutside from "@/hocs/HOConClickOutside";
import { clsxm } from "@/utils/twMerge.utils";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import React, { useState } from "react";
import HeaderSearch from "./header-search";
import { IHeaderIconButton } from "./header.interfaces";

// import { ReactComponent as FoodiesIcon } from "@/assets/icons/foodies.svg";
import GlobeIcon from "@/public/assets/icons/globe.svg";
import UserIcon from "@/public/assets/icons/user.svg";
import { EventKeys, pushEventToDataLayer } from "@/utils/event-utils";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useLocale } from "next-intl";

interface HeaderPropsInterface {
  userMenu: React.ComponentProps<typeof UserMenu>;
  websiteLangURL: string;
  websiteLangLabel: string;
  cultureNameShort: string;
  cultureNameShortLabel: string;
  shopPagePath: string;
  headerSearch: Omit<
    React.ComponentProps<typeof HeaderSearch>,
    "wrapperDivProps"
  >;
  navigationItems: NavigationItem[];
}

const HeaderComponent = ({
  userMenu,
  websiteLangURL,
  websiteLangLabel,
  cultureNameShortLabel,
  headerSearch,
  navigationItems,
}: HeaderPropsInterface) => {
  const locale = useLocale();
  const { push } = useRouter();
  const { user } = useUser();
  const urlSegments = useSelectedLayoutSegments();

  const handleLocaleChange = async (event: any) => {
    const newLocale = event === "en" ? "ar" : "en";
    push(`/${newLocale}/${urlSegments.join("/")}`);
  };

  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = (): void => {
    setUserMenuOpen((state) => !state);
  };

  const handleEvent = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();

    pushEventToDataLayer(EventKeys.LANGUAGE_CHANGED, { language: locale });
    handleLocaleChange(locale);
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
        <a
          href={websiteLangURL}
          onClick={handleEvent}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Text weight="light">{websiteLangLabel}</Text>
          <GlobeIcon fontSize={24} className="text-black dark:text-white" />
        </a>

        <HOConClickOutside on={() => setUserMenuOpen(false)}>
          <div>
            {(() => {
              if (user && user.picture)
                return (
                  <img
                    src={user.picture}
                    width={32}
                    height={32}
                    onClick={toggleUserMenu}
                    className="cursor-pointer rounded-full h-[32px] w-[32px] object-cover"
                    alt={user.name || "avatar"}
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
                      {user.name?.[0] + user.name?.[1] || ""}
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
        <a href={websiteLangURL} onClick={handleEvent}>
          <Text className="uppercase">{cultureNameShortLabel}</Text>
        </a>

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
