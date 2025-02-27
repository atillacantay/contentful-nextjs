import ContentfulImage from "@/components/cft-components/cft-image";
import Avatar from "@/components/common/avatar";
import Button from "@/components/common/button";
import Stack from "@/components/common/stack";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import Rate from "@/components/rate";
import RecipeInfo from "@/components/recipe-info";
import ShareSocialMedia from "@/components/share-social-media";
import HeaderMini from "@/components/templates/header/header-mini-component";

import Calendar from "@/public/assets/icons/calendar-clear-outline.svg";
import Heart from "@/public/assets/icons/heart-outline.svg";
import type { PageRecipe } from "lib/__generated/sdk";
import { useFormatter, useTranslations } from "next-intl";

const RecipeDetailHeader = ({
  image,
  title,
  description,
  author,
  cookingTimeMinutes,
  persons,
  difficulty,
  calories,
  rating,
}: PageRecipe): JSX.Element => {
  const t = useTranslations();
  const format = useFormatter();

  return (
    <Stack direction="col" className="h-2/6 pb-8 lg:flex-row lg:gap-4">
      <div className="relative overflow-hidden lg:w-1/2 max-lg:mb-8">
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        <Stack className="absolute w-full lg:hidden">
          <HeaderMini />
        </Stack>
        <ContentfulImage
          className="block w-full lg:rounded-2xl"
          src={image?.url || ""}
          priority
          width={image?.width}
          height={image?.height}
          alt={image?.description || title || "Recipe Image"}
        />
      </div>
      <div className="flex-1 max-lg:px-4">
        <Stack alignItems="center" justifyContent="between" className="mb-4">
          {rating && (
            <Rate rate={rating} hideRateText>
              <Text
                size="md"
                weight="light"
                className="ltr:ml-2 rtl:mr-2 leading-3"
              >
                {format.number(rating)}
              </Text>
            </Rate>
          )}

          <Stack className="max-lg:hidden ltr:ml-auto rtl:mr-auto">
            <Button
              className="font-medium text-primary_red"
              startIcon={<Heart fontSize={24} />}
            >
              {t("common.save")}
            </Button>
          </Stack>
        </Stack>
        <Header weight="medium" className="text-[32px] text-primary_dark mb-4">
          {title}
        </Header>
        <Stack
          alignItems="center"
          justifyContent="start"
          className="gap-2 mb-4"
        >
          <Avatar
            src={author?.avatar?.url || ""}
            size={8}
            width={author?.avatar?.width}
            height={author?.avatar?.height}
            rounded="full"
            alt={author?.avatar?.description || author?.name || "Author Avatar"}
          />
          <Text weight="medium" className="text-primary_dark">
            {author?.name}
          </Text>
        </Stack>

        <Text weight="medium" className="mb-12 text-primary_dark">
          {description}
        </Text>
        <RecipeInfo
          prepTime={cookingTimeMinutes}
          serving={persons}
          level={difficulty}
          calories={calories}
          textClassName="text-primary_dark"
          borderColor="custom2"
          className="lg:border-x lg:rounded-xl border-custom_divider2"
        />
        <Stack
          alignItems="center"
          justifyContent="between"
          className="mt-12 max-lg:hidden"
        >
          <Button
            className="font-medium text-primary_red ltr:pl-[2px] rtl:pr-[2px]"
            startIcon={<Calendar fontSize={24} />}
          >
            Add to Meal Planner
          </Button>
          <ShareSocialMedia
            className="[&_a]:w-10 [&_a]:h-10"
            icons={[
              "color-facebook",
              "color-twitter",
              "color-whatsapp",
              "color-email",
              "color-link",
            ]}
          >
            <Text>Share</Text>
          </ShareSocialMedia>
        </Stack>
      </div>
    </Stack>
  );
};

export default RecipeDetailHeader;
