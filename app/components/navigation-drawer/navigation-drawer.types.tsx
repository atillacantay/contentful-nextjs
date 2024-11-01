import { Page } from "lib/__generated/sdk";
import { UserMenuProps } from "../user-menu/user-menu.interface";

export interface NavigationDrawerProps {
  userMenu: UserMenuProps;
  navigationItems: Page[];
}
