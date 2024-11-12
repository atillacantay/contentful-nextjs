"use client";

import Text from "@/components/common/typography/text";
import { Link, usePathname } from "@/i18n/routing";
import ArticlesIcon from "@/public/assets/icons/articles.svg";
import ExploreIcon from "@/public/assets/icons/explore.svg";
import FoodiesIcon from "@/public/assets/icons/foodies.svg";
import MasterclassIcon from "@/public/assets/icons/masterclass.svg";
import PastapediaLogo from "@/public/assets/icons/pastapedia-logo.svg";
import RecipeIcon from "@/public/assets/icons/recipe.svg";
import ShoppingBagIcon from "@/public/assets/icons/shopping-bag.svg";
import { clsxm } from "@/utils/twMerge.utils";
import type { Page } from "lib/__generated/sdk";
import { useParams } from "next/navigation";

const iconsMap: Record<string, any> = {
  home: ExploreIcon,
  recipes: RecipeIcon,
  foodies: FoodiesIcon,
  shop: ShoppingBagIcon,
  "master-classes": MasterclassIcon,
  magazines: ArticlesIcon,
  pastapedia: PastapediaLogo,
};

interface NavigationItemProps {
  item: Page;
}

const NavigationItem = ({ item }: NavigationItemProps) => {
  const { category } = useParams<{ category: string }>();
  const pathname = usePathname();
  if (!item) return;
  const slug = item.slug || "";
  const url = `/${slug === "home" ? "" : slug}`;
  const pageName = item.pageName || "";
  const selected =
    slug === category ||
    (slug === "home" && pathname === `/`) ||
    (slug === "magazines" && category === "articles");
  const Icon = iconsMap[slug];
  const shouldUseLogo = ["pastapedia"].includes(slug);

  return (
    <Link href={url} className={clsxm("group", selected && "is-selected")}>
      <li
        className={clsxm(
          "flex items-center justify-center flex-col lg:flex-row cursor-pointer h-14 md:p-4 lg:space-x-2 rtl:space-x-reverse",
          "md:group-[.is-selected]:bg-white md:group-[.is-selected]:border md:dark:group-[.is-selected]:bg-primary_red md:dark:group-[.is-selected]:border-0 group-[.is-selected]:rounded-full"
        )}
      >
        {Icon && (
          <span>
            <Icon
              className={clsxm(
                "w-6 h-6 text-black md:text-white",
                "group-[.is-selected]:text-primary_red",
                "md:dark:group-[.is-selected]:text-white",
                "dark:text-white",
                shouldUseLogo && "w-auto h-[87px]"
              )}
            />
          </span>
        )}

        {!shouldUseLogo && pageName && (
          <Text
            className={clsxm(
              "text-black md:text-white",
              "group-[.is-selected]:text-primary_red",
              "md:dark:group-[.is-selected]:text-white",
              "dark:text-white",
              "text-[0.5rem] md:text-xs lg:text-base",
              "mt-1 md:mt-0"
            )}
            weight="medium"
          >
            {pageName}
          </Text>
        )}
      </li>
    </Link>
  );
};

export default NavigationItem;
