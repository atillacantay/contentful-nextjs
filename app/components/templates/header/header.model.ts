import { ModelNavigationDrawer } from "@/components/navigation-drawer/navigation-drawer.model";
import { ModelUserMenu } from "@/components/user-menu";
import { ModelHeaderSearch } from "./header-search/header-search.model";

export const ModelHeader = {
  userMenu: ModelUserMenu,
  websiteLangURL: "/en/search/results/",
  websiteLangLabel: "English",
  cultureNameShort: "en",
  cultureNameShortLabel: "en",
  shopPagePath: "https://www.goodykitchen.com/en/shop/",
  headerSearch: ModelHeaderSearch,
  navigationItems: ModelNavigationDrawer.navigationItems,
};
