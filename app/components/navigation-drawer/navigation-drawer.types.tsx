import { UserMenuProps } from "../user-menu/user-menu.interface";

export interface NavigationItem {
  key: string;
  link: string;
  label: string;
  selected?: boolean;
  hidden?: boolean;
}

export interface NavigationDrawerProps {
  userMenu: UserMenuProps;
  navigationItems: NavigationItem[];
}
