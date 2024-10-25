import ContentfulImage from "@/components/cft-components/cft-image";
import Avatar from "@/components/common/avatar";
import Button from "@/components/common/button";
import Card from "@/components/common/card";
import Stack from "@/components/common/stack";
import Star from "@/components/common/star";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import RecipeInfo from "@/components/recipe-info";
import { PageRecipe } from "lib/__generated/sdk";
import { useFormatter } from "next-intl";

const RecipeOfDay = ({
  title,
  author,
  rating,
  sys,
  image,
  description,
  cookingTimeMinutes,
  persons,
  difficulty,
  calories,
}: PageRecipe): JSX.Element => {
  const format = useFormatter();
  const { publishedAt } = sys;

  return (
    <Card className="bg-primary rounded-none lg:rounded-2xl">
      <Card.Content className="p-0 lg:py-8 lg:px-6">
        <Stack
          direction="col"
          spacing={4}
          className="lg:flex-row lg:items-center"
        >
          <div className="lg:rounded-2xl overflow-hidden lg:w-2/5">
            <ContentfulImage
              src={image?.url || ""}
              alt={image?.description}
              width={image?.width}
              height={image?.height}
              className="block w-full object-cover object-center aspect-square"
            />
          </div>
          <div className="lg:w-3/5 max-lg:mx-4 max-lg:mb-8">
            <Stack
              direction="col"
              spacing={2}
              className="border-b border-custom_divider4 pb-4"
            >
              <Text size="sm" className="lg:order-first pr-2 text-white">
                {format.dateTime(new Date(publishedAt), {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </Text>
              <Header as="h2" size="xxl" className="font-bold text-white">
                {title}
              </Header>
              <Stack className="justify-between" alignItems="center">
                <Stack alignItems="center" justifyContent="start" spacing={2}>
                  <Avatar
                    src={author?.avatar?.url || ""}
                    size={6}
                    rounded="full"
                    width={author?.avatar?.width}
                    height={author?.avatar?.height}
                    alt={
                      author?.avatar?.description ||
                      author?.name ||
                      "User Avatar"
                    }
                  />
                  <Text className="text-xs text-white" weight="medium">
                    By {author?.name}
                  </Text>
                </Stack>
                {rating && (
                  <Stack
                    className="justify-between text-xs"
                    alignItems="center"
                  >
                    <Star rate={5} value={rating} fill="#FED236" />
                    <Text className="ltr:ml-1 rtl:mr-1 text-xs text-white">
                      {rating}
                    </Text>
                  </Stack>
                )}
              </Stack>
            </Stack>
            <Text className="mt-4 mb-8 text-white" size="md" weight="medium">
              {description}
            </Text>
            <RecipeInfo
              prepTime={cookingTimeMinutes}
              serving={persons}
              level={difficulty}
              calories={calories}
              textClassName="text-white"
            />
            <Button
              variant="contained"
              color="white"
              size="xl"
              fullWidth
              className="lg:w-auto mt-8 text-black text-base"
            >
              Try It Now
            </Button>
          </div>
        </Stack>
      </Card.Content>
    </Card>
  );
};

export default RecipeOfDay;
