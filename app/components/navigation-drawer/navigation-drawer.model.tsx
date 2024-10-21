import { ModelUserMenu } from "../user-menu";
import type NavigationDrawer from "./navigation-drawer.component";

export const ModelNavigationDrawer: React.ComponentProps<typeof NavigationDrawer> = {
  userMenu: ModelUserMenu,
  navigationItems: [
    { key: "home", link: "#", selected: false, label: "Home" },
    { key: "recipes", link: "#", selected: true, label: "Recipes" },
    { key: "foodies", link: "#", selected: false, label: "Foodies" },
    { key: "shop", link: "#", selected: false, label: "Shop" },
    { key: "masterclass", link: "#", selected: false, label: "Masterclass" },
    { key: "magazine", link: "#", selected: false, label: "Magazine" },
    { key: "pastapedia", link: "#", label: "Pastapedia" },
  ],
};
