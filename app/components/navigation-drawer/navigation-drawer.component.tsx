import { FC, SVGProps, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import IconButton from "@/components/common/button/button-icon.component";
import Logo from "@/components/common/logo";
import Modal from "@/components/common/modal";
import Stack from "@/components/common/stack";
import UserMenu from "@/components/user-menu";
import { MenuItem } from "@/components/user-menu/user-menu.component";

import ArticlesIcon from "@/public/assets/icons/articles.svg";
import CloseIcon from "@/public/assets/icons/close.svg";
import ExploreIcon from "@/public/assets/icons/explore.svg";
import FoodiesIcon from "@/public/assets/icons/foodies.svg";
import HamburgerMenuIcon from "@/public/assets/icons/hamburger-menu.svg";
import MasterclassIcon from "@/public/assets/icons/masterclass.svg";
import PastapediaIcon from "@/public/assets/icons/pastapedia-small.svg";
import RecipeIcon from "@/public/assets/icons/recipe.svg";
import ShoppingBagIcon from "@/public/assets/icons/shopping-bag.svg";

import { extractLanguageFromUrl } from "@/utils/url.utils";
import { NavigationDrawerProps } from "./navigation-drawer.types";

const navIcons: Record<string, FC<SVGProps<SVGElement>>> = {
  home: ExploreIcon,
  recipes: RecipeIcon,
  foodies: FoodiesIcon,
  shop: ShoppingBagIcon,
  masterclass: MasterclassIcon,
  magazine: ArticlesIcon,
  pastapedia: PastapediaIcon,
};

const NavigationDrawer: FC<NavigationDrawerProps> = ({
  userMenu,
  navigationItems,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [domReady, setDomReady] = useState(false);
  const portalTarget = document?.querySelector(
    "#layout-header-after"
  ) as Element;
  const language = extractLanguageFromUrl(userMenu?.loginURL);

  useEffect(() => {
    setDomReady(true);
  }, []);

  return (
    <>
      <IconButton
        className="bg-transparent dark:text-white size-6"
        name="hamburger-menu"
        aria-label="hamburger-menu"
        onClick={() => setIsDrawerOpen(true)}
      >
        <HamburgerMenuIcon />
      </IconButton>

      {domReady
        ? createPortal(
            <Modal
              show
              title={" "}
              onClose={() => setIsDrawerOpen(false)}
              data-no-html
              align="right"
              baseClassName={`[&>div]:dark:bg-goki_dark_card transform transition-transform duration-300 ${
                isDrawerOpen ? "translate-y-0" : "translate-y-full"
              }`}
              className="bg-white dark:bg-goki_dark_card [&>div]:dark:bg-goki_dark_card"
            >
              <Modal.Header className="flex flex-1 items-center justify-between dark:bg-goki_dark_card">
                <a href={`/${language || "en"}`} title="Goody Kitchen">
                  <Logo />
                </a>

                <IconButton
                  className="p-0"
                  onClick={() => setIsDrawerOpen(false)}
                  title="hamburger-close"
                >
                  <CloseIcon fontSize={24} />
                </IconButton>
              </Modal.Header>
              <Modal.Body className="pt-16 p-4">
                <>
                  <Stack
                    direction="col"
                    className="p-4 mt-0.5 bg-white dark:bg-goki_dark_card"
                  >
                    {navigationItems
                      ?.filter((navItem) => !navItem.hidden)
                      .map((navItem) => (
                        <MenuItem
                          {...navItem}
                          key={navItem.key}
                          icon={navIcons[navItem.key]}
                          className="py-2 items-center transform transition-transform hover:translate-x-5 hover:!text-primary dark:text-white"
                          labelClassName={`font-normal text-2xl ${
                            navItem.selected ? "!text-primary" : "!text-inherit"
                          }`}
                          iconClassName={`
                            ${
                              navItem.selected
                                ? "!text-primary"
                                : "!text-inherit"
                            }`}
                        />
                      ))}
                  </Stack>
                  <UserMenu {...userMenu} combinedRegisterLogin />
                </>
              </Modal.Body>
            </Modal>,
            portalTarget
          )
        : null}
    </>
  );
};

export default NavigationDrawer;
