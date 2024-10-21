import Badge from "@/components/common/badge";
import Card from "@/components/common/card";
import Stack from "@/components/common/stack";
import Star from "@/components/common/star";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import { Link } from "@/i18n/routing";
import Recipe from "@/public/assets/icons/recipe.svg";

const RecipeCard = ({
  genre,
  header,
  description,
  textColor,
  star,
  media,
  authorImage,
  url = "#",
  actions,
  formSaveForLaterIcon,
}: any): JSX.Element => {
  return (
    <Card className="rounded-2xl w-full lg:h-[338px] flex flex-col">
      <div className="absolute flex w-full justify-between top-3 z-10 px-3 items-center">
        <Badge
          color="white"
          startIcon={<Recipe />}
          text={genre}
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
        href={`/recipes/${url}`}
        title={header}
        className="relative w-auto grow-1 h-[250px] object-cover"
      >
        <Card.Media
          className="h-full"
          src={media?.url}
          alt={media?.title}
          width={media?.width}
          height={media?.height}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </Link>

      <Card.Content>
        <Stack spacing={2} direction="col">
          <a href={url} title={header}>
            <Header
              weight="semibold"
              className={`text-[${textColor}] max-h-24 overflow-hidden whitespace-nowrap text-ellipsis`}
              size="md"
            >
              {header}
            </Header>
          </a>
          <Stack direction="row" alignItems="center" justifyContent="between">
            <Stack direction="row" alignItems="center" className="gap-2">
              <img
                src={authorImage?.url}
                width={24}
                height={24}
                className="rounded-full w-[24px] h-[24px]"
              />
              <Text className="text-xs" color={textColor}>
                {description}
              </Text>
            </Stack>
            {!!star && (
              <Stack
                className="justify-between text-xs gap-1"
                alignItems="center"
              >
                <Star rate={star} value={1} fill="#FED236" />
                <Text className="text-xs" color={textColor}>
                  {star}
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
