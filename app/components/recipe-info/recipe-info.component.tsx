import Grid from "@/components/common/grid";
import Text from "@/components/common/typography/text";
import { clsxm } from "@/utils/twMerge.utils";
import { IRecipeInfo, RecipeInfoItem } from "./recipe-info.interface";

const GridItem = ({
  label,
  value,
  className,
  textClassName,
}: RecipeInfoItem) => (
  <Grid.Item className={className}>
    <Text weight="medium" className={clsxm("text-center mb-1", textClassName)}>
      {label}
    </Text>
    <Text weight="semibold" className={clsxm("text-center", textClassName)}>
      {value}
    </Text>
  </Grid.Item>
);

const RecipeInfo = ({
  prepTime,
  serving,
  level,
  calories,
  textClassName,
  borderColor = "custom_divider4",
  className,
}: IRecipeInfo): JSX.Element => {
  // Mapping of color names to Tailwind classes for dynamic styling
  const afterClasses: Record<string, string> = {
    custom_divider4: "lg:after:bg-custom_divider4",
    custom2: "lg:after:bg-custom2",
  };

  // Select the correct class based on the `borderColor` prop
  const afterClass = afterClasses[borderColor];

  // Generate classes string, applying dynamic background and border colors
  const commonClasses = clsxm(
    `lg:relative lg:after:absolute lg:after:content-[""] lg:after:top-2/4 ltr:lg:after:right-0 rtl:lg:after:left-0 lg:after:h-6 lg:after:w-[1px] lg:after:-translate-y-1/2`,
    afterClass,
    {
      [`border-${borderColor}`]: borderColor,
    }
  );

  const items: RecipeInfoItem[] = [
    {
      label: "Prep Time",
      value: prepTime,
      className: clsxm(
        "pb-4 lg:pb-0 border-b lg:border-b-0 border-r rtl:border-l rtl:lg:border-l-0 rtl:border-r-0 lg:border-r-0",
        commonClasses
      ),
    },
    {
      label: "Serving",
      value: serving,
      className: clsxm("pb-4 lg:pb-0 border-b lg:border-b-0", commonClasses),
    },
    {
      label: "Level",
      value: level,
      className: clsxm(
        "pt-4 lg:pt-0 border-r rtl:border-l rtl:lg:border-l-0 rtl:border-r-0 lg:border-r-0",
        commonClasses
      ),
    },
    { label: "Calories", value: calories, className: "pt-4 lg:pt-0" },
  ];

  return (
    <Grid
      col={2}
      lg={4}
      className={`border-t border-b py-4 px-8 border-custom_divider4 ${className}`}
    >
      {items.map((item) => (
        <GridItem
          key={item.label}
          label={item.label}
          value={item.value}
          className={item.className}
          textClassName={textClassName}
        />
      ))}
    </Grid>
  );
};

export default RecipeInfo;
