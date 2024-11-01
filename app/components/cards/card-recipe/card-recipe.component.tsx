import Badge from "@/components/common/badge";
import Card from "@/components/common/card";
import Stack from "@/components/common/stack";
import Star from "@/components/common/star";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import { Link } from "@/i18n/routing";
import Recipe from "@/public/assets/icons/recipe.svg";
import type { PageRecipe } from "lib/__generated/sdk";
import { useFormatter, useTranslations } from "next-intl";

interface RecipeCardProps extends PageRecipe {
  textColor?: "black" | "white";
}

const RecipeCard = ({
  title,
  image,
  category,
  slug,
  author,
  rating,
  textColor = "black",
}: RecipeCardProps): JSX.Element => {
  const t = useTranslations();
  const format = useFormatter();
  const url = `/recipes/${category ? `${category.slug}/` : ""}${slug}`;

  return (
    <Card className="rounded-2xl w-full lg:h-[338px] flex flex-col">
      <div className="absolute flex w-full justify-between top-3 z-10 px-3 items-center">
        <Badge
          color="white"
          startIcon={<Recipe />}
          text={t("cards.recipe")}
          className=" px-4 py-2 bg-slate-200/30 backdrop-blur-sm shadow-[0_0_10px_rgba(0, 0, 0, 0.2)]"
        />
        {/* {actions ? (
          actions
        ) : (
          <FormSaveForLaterIcon
            {...(formSaveForLaterIcon || ModelFormSaveForLaterIcon)}
          />
        )} */}
      </div>

      <Link
        href={url}
        title={title}
        className="relative w-auto grow-1 h-[250px] object-cover"
      >
        <Card.Media
          className="h-full"
          src={image?.url || ""}
          alt={image?.title || title || ""}
          width={image?.width}
          height={image?.height}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </Link>

      <Card.Content>
        <Stack spacing={2} direction="col">
          <Link href={url} title={title}>
            <Header
              weight="semibold"
              className={`text-primary_dark max-h-24 overflow-hidden whitespace-nowrap text-ellipsis`}
              size="md"
            >
              {title}
            </Header>
          </Link>
          <Stack direction="row" alignItems="center" justifyContent="between">
            <Stack direction="row" alignItems="center" className="gap-2">
              <img
                src={author?.avatar?.url}
                width={24}
                height={24}
                className="rounded-full w-[24px] h-[24px]"
              />
              <Text className="text-xs" color={textColor}>
                {author?.name}
              </Text>
            </Stack>
            {rating && (
              <Stack
                className="justify-between text-xs gap-1"
                alignItems="center"
              >
                <Star rate={5} value={rating} fill="#FED236" />
                <Text className="text-xs" color={textColor}>
                  {format.number(rating)}
                </Text>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Card.Content>
    </Card>
  );
};

export default RecipeCard;
