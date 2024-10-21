import { FC, ForwardedRef, forwardRef } from "react";

import Stack from "@/components/common/stack";
import Text from "@/components/common/typography/text";

// import { ReactComponent as HelpIcon } from "@/assets/icons/help.svg";
import LoginIcon from "@/public/assets/icons/login.svg";
import LogoutIcon from "@/public/assets/icons/logout.svg";
import MealPlannerIcon from "@/public/assets/icons/meal-planner.svg";
import NotificationIcon from "@/public/assets/icons/notification.svg";
import SaveIcon from "@/public/assets/icons/save.svg";
import SettingsIcon from "@/public/assets/icons/settings.svg";
import ShoppingListIcon from "@/public/assets/icons/shopping-list.svg";
import UserIcon from "@/public/assets/icons/user.svg";

import { clsxm } from "@/utils/twMerge.utils";
import { useUser } from "@auth0/nextjs-auth0/client";
import { MenuItemProps, UserMenuProps } from "./user-menu.interface";

const MenuItemContent: FC<Omit<MenuItemProps, "link">> = ({
  icon: Icon,
  label,
  className,
  iconClassName,
  labelClassName,
}) => (
  <Stack className={clsxm("cursor-pointer gap-2 py-4", className)}>
    <Icon className={clsxm("w-6 h-6 text-primary_red", iconClassName)} />
    <Text size="md" weight="medium" className={labelClassName}>
      {label}
    </Text>
  </Stack>
);

export const MenuItem: FC<MenuItemProps> = ({
  icon,
  link,
  label,
  onClick,
  linkClassName,
  className,
  iconClassName,
  labelClassName,
}) => (
  <a
    href={link}
    onClick={onClick}
    className={linkClassName}
    title={label}
    aria-label={label}
  >
    <MenuItemContent
      icon={icon}
      label={label}
      className={className}
      iconClassName={iconClassName}
      labelClassName={labelClassName}
    />
  </a>
);

const MenuButtonItem: FC<Omit<MenuItemProps, "link">> = ({ icon, label }) => (
  <button type="submit" className="w-full">
    <MenuItemContent icon={icon} label={label} />
  </button>
);

const UserMenu = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<UserMenuProps>
>(
  (
    {
      myProfileLabel,
      myProfileURL,
      notificationLabel,
      notificationURL,
      shoppingListLabel,
      shoppingListURL,
      saveForLaterLabel,
      saveForLaterURL,
      mealPlannerLabel,
      mealPlannerURL,
      accountSettingsLabel,
      accountSettingsURL,
      // helpLabel,
      // helpURL,
      loginLabel,
      loginURL,
      registerLabel,
      registerURL,
      registerLoginLabel,
      logoutLabel,
      logoutURL,
      combinedRegisterLogin,
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { user } = useUser();

    return (
      <div ref={ref} className="bg-white rounded-2xl dark:bg-goki_dark_card ">
        <Stack
          className="p-4 py-2 divide-y divide-custom_divider2 dark:divide-custom_divider4"
          direction="col"
        >
          {user ? (
            <>
              <MenuItem
                icon={UserIcon}
                label={myProfileLabel}
                link={myProfileURL}
              />
              {
                <MenuItem
                  icon={NotificationIcon}
                  label={notificationLabel}
                  link={notificationURL}
                />
              }
            </>
          ) : (
            <>
              {combinedRegisterLogin ? (
                <MenuItem
                  icon={UserIcon}
                  label={registerLoginLabel}
                  link={registerURL}
                  className="bg-primary_red px-4 rounded-full w-fit"
                  iconClassName="text-white"
                  labelClassName="text-white"
                />
              ) : (
                <>
                  <MenuItem
                    icon={UserIcon}
                    label={registerLabel}
                    link={registerURL}
                  />
                  <MenuItem
                    icon={LoginIcon}
                    label={loginLabel}
                    link={loginURL}
                  />
                </>
              )}
            </>
          )}
        </Stack>

        {user && (
          <Stack
            className="p-4 py-2 border-y border-custom_divider5 divide-y divide-custom_divider2 dark:divide-custom_divider4"
            direction="col"
          >
            <MenuItem
              icon={ShoppingListIcon}
              label={shoppingListLabel}
              link={shoppingListURL}
            />
            <MenuItem
              icon={SaveIcon}
              label={saveForLaterLabel}
              link={saveForLaterURL}
            />
            <MenuItem
              icon={MealPlannerIcon}
              label={mealPlannerLabel}
              link={mealPlannerURL}
            />
          </Stack>
        )}

        {user && (
          <Stack
            className="p-4 py-2 divide-y divide-custom_divider2 dark:divide-custom_divider4"
            direction="col"
          >
            <MenuItem
              icon={SettingsIcon}
              label={accountSettingsLabel}
              link={accountSettingsURL}
            />
            {/* <MenuItem icon={HelpIcon} label={helpLabel} link={helpURL} /> */}
            <MenuItem icon={LogoutIcon} label={logoutLabel} link={logoutURL} />
          </Stack>
        )}
      </div>
    );
  }
);

export default UserMenu;
