export interface MenuItemProps {
  icon: React.FC<React.SVGProps<SVGElement>>;
  link: string;
  label: string;
  onClick?: () => void;
  linkClassName?: string;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
}

export interface UserMenuProps {
  userAvatar: string;
  userAvatarSVGName: string;
  myProfileLabel: string;
  myProfileURL: string;
  notificationLabel: string;
  notificationURL: string;
  shoppingListLabel: string;
  shoppingListURL: string;
  saveForLaterLabel: string;
  saveForLaterURL: string;
  mealPlannerLabel: string;
  mealPlannerURL: string;
  accountSettingsLabel: string;
  accountSettingsURL: string;
  helpLabel: string;
  helpURL: string;
  loginLabel: string;
  loginURL: string;
  registerLabel: string;
  registerURL: string;
  registerLoginLabel: string;
  logoutLabel: string;
  logoutURL: string;
  combinedRegisterLogin?: boolean;
}
