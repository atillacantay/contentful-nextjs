import Stack from "@/components/common/stack";
import Text from "@/components/common/typography/text";
import ArticlesIcon from "@/public/assets/icons/articles.svg";
import FoodiesIcon from "@/public/assets/icons/foodies.svg";
import MasterclassIcon from "@/public/assets/icons/masterclass.svg";
import RecipeIcon from "@/public/assets/icons/recipe.svg";
import ShoppingBagIcon from "@/public/assets/icons/shopping-bag.svg";
import { clsxm } from "@/utils/twMerge.utils";

const GetIconByLabel = ({
  icon,
  ...props
}: {
  icon?: ICategoryTag["icon"];
} & React.ComponentProps<"svg">) => {
  if (icon === "article") return <ArticlesIcon {...props} />;
  if (icon === "recipe") return <RecipeIcon {...props} />;
  if (icon === "master-classes") return <MasterclassIcon {...props} />;
  if (icon === "foodies") return <FoodiesIcon {...props} />;
  if (icon === "product") return <ShoppingBagIcon {...props} />;
};
interface ICategoryTag {
  icon?: "article" | "master-classes" | "foodies" | "product" | "recipe";
  label?: string;
  selected?: boolean;
  value?: string;
  hidden?: boolean;
}

interface ICategoryTagProps {
  tags: ICategoryTag[];
  className?: string;
  onTagSelected?: (index: number) => void;
}

const CategoryTags = ({
  tags,
  className,
  onTagSelected = () => 0,
}: ICategoryTagProps): JSX.Element => {
  return (
    <Stack
      className={
        "space-x-4 rtl:space-x-reverse overflow-auto items-center scrollbar-hide " +
        (className || "")
      }
      alignItems="baseline"
    >
      {tags.map(
        ({ icon, label, selected, hidden }, index) =>
          !hidden && (
            <Stack
              key={label}
              className={clsxm(
                "items-center cursor-pointer px-6 space-x-2 border rounded-full dark:border-goki_dark_card",
                selected && "bg-primary_red",
                !selected && "shadow-custom_shadow_2",
                icon ? "py-3" : "py-2 my-4"
              )}
              onClick={() => onTagSelected(index)}
            >
              {GetIconByLabel({ icon }) && (
                <GetIconByLabel
                  icon={icon}
                  className={clsxm(
                    "w-6 h-6 rtl:ml-2 dark:text-white",
                    selected && "text-white"
                  )}
                />
              )}
              <Text
                className={clsxm(selected && "text-white")}
                size="sm"
                weight="medium"
              >
                {label}
              </Text>
            </Stack>
          )
      )}
    </Stack>
  );
};

export default CategoryTags;
