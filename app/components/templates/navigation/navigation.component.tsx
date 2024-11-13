import type { Maybe } from "graphql/jsutils/Maybe";
import type { MainNavigation as MainNavigationType } from "lib/__generated/sdk";
import NavigationItem from "./navigation-item";

const MainNavigation = (props: Maybe<MainNavigationType> | undefined) => {
  const navigations = props?.itemsCollection?.items;

  return (
    <nav
      id="goki-navigation"
      className="
      max-md:hidden 
      print:hidden 
      block bottom-0 left-0 
      dark:bg-goki_dark 
      w-full 
      py-2 md:py-4 
      border-b border-custom2 dark:border-custom2_dark 
      fixed md:static 
      bottom-0 md:bottom-[unset] 
      bg-white md:bg-primary_red 
      z-30 
      max-md:group-has-[.drawer-cmp-is-shown]/layout:hidden
      "
    >
      <ul className="lg:container mx-auto flex items-center justify-around space-x-0 capitalize">
        {navigations?.map((item) => (
          <NavigationItem key={item?.sys.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
