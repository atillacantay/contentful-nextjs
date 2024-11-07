import ContentfulImage from "@/components/cft-components/cft-image";
import Button from "@/components/common/button";
import Card from "@/components/common/card";
import Markdown from "@/components/common/markdown";
import Stack from "@/components/common/stack";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import Rate from "@/components/rate";
import ShareSocialMedia from "@/components/share-social-media";
import HeaderMini from "@/components/templates/header/header-mini-component";
import Followers from "@/public/assets/icons/followers.svg";
import Heart from "@/public/assets/icons/heart-outline.svg";
import MasterclassIcon from "@/public/assets/icons/masterclass.svg";
import Recipe from "@/public/assets/icons/recipe.svg";
import { clsxm } from "@/utils/twMerge.utils";
import { getSession } from "@auth0/nextjs-auth0";
import { PageArticle } from "lib/__generated/sdk";
import { getFormatter, getTranslations } from "next-intl/server";
import FeaturedArticles from "./featured-articles.component";

const ArticlePage = async ({ article }: { article: PageArticle }) => {
  const {
    sys,
    title,
    subtitle,
    image,
    content,
    rating,
    readDurationInMin,
    author,
    featuredArticlesCollection,
  } = article;
  const { firstPublishedAt } = sys;
  const featuredArticles = featuredArticlesCollection?.items;
  const t = await getTranslations();
  const format = await getFormatter();
  const session = await getSession();

  return (
    <>
      <div className="lg:py-6 sm-layout-header-hidden md:bg-white md:border-b border-black/8">
        <Stack
          direction="col"
          className="h-2/6 pb-4 md:pb-8 lg:flex-row lg:gap-4 md:container md:mx-auto"
        >
          <div className="relative overflow-hidden lg:w-1/2 max-lg:mb-8 min-h-[150px]">
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
              width={image?.width}
              height={image?.height}
              alt={image?.description || title || "Article Image"}
            />
          </div>
          <div className="flex-1 max-lg:px-4">
            <Stack
              alignItems="center"
              justifyContent="between"
              className="mb-4"
            >
              {rating && (
                <Rate rate={rating} hideRateText>
                  <Text
                    size="md"
                    weight="light"
                    className="ltr:ml-2 rtl:mr-2 leading-3"
                  >
                    {t("common.overallRatingWithCount", {
                      rating: format.number(Number(rating)),
                    })}
                  </Text>
                </Rate>
              )}
              <Stack className="max-lg:hidden">
                <Button
                  className="font-medium text-primary_red"
                  startIcon={<Heart fontSize={24} />}
                >
                  {t("common.save")}
                </Button>
              </Stack>
            </Stack>
            <Header
              weight="semibold"
              className="text-[32px] text-primary_dark mb-4 leading-[41.18px]"
            >
              {title}
            </Header>
            <Text weight="light" className="text-black/40">
              {t("common.readInMinutes", {
                duration: format.number(Number(readDurationInMin)),
              })}{" "}
              |{" "}
              {format.dateTime(new Date(firstPublishedAt), {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Text>

            <Text weight="medium" className="mt-4 mb-8 text-primary_dark">
              {subtitle}
            </Text>

            <Card className="my-4  max-lg:text-center w-full md:p-4 rounded-2xl bg-transparent shadow-none max-sm:bg-white max-sm:rounded-lg max-sm:shadow-[0px_4px_10px_0px_rgba(0,0,0,.04)] max-sm:p-4">
              <Card.Content className={`text-white`}>
                <Text size="2xl" weight="semibold">
                  Meet The Author
                </Text>
                <div className="flex max-lg:flex-col max-lg:items-center">
                  <a href="#" title="" className="ltr:mr-4 rtl:ml-4 pt-4 pb-2">
                    <Card.Media
                      src={author?.avatar?.url || ""}
                      width={author?.avatar?.width}
                      height={author?.avatar?.height}
                      alt={
                        author?.avatar?.description ||
                        author?.name ||
                        "Author Image"
                      }
                      className="w-[112px] rounded-full"
                    />
                  </a>

                  <div className="mt-4 max-sm:-mx-4">
                    <Text as="a" href="#" title="" weight="light">
                      {author?.name}
                    </Text>
                    <Text size="md" weight="light">
                      “Mexican Cuisine have lots of secrets and tips, fun and
                      delicious”
                    </Text>
                    <Stack
                      className="w-full pt-6 lg:space-x-6 rtl:space-x-reverse max-lg:justify-around"
                      direction="row"
                    >
                      <Stack alignItems="center" className="text-md gap-1">
                        <MasterclassIcon className="text-[#C42929] text-lg w-6 h-6" />
                        <Text
                          className="text-nowrap max-md:text-sm text-[#C42929] max-sm:text-xs underline decoration-[0.25px]"
                          weight="light"
                          size="md"
                        >
                          8 Lessons
                        </Text>
                      </Stack>
                      <Stack alignItems="center" className="text-md gap-1">
                        <Recipe className="text-[#C42929] text-md w-6 h-6" />
                        <Text
                          className="text-nowrap max-md:text-sm text-[#C42929] max-sm:text-xs underline decoration-[0.25px]"
                          weight="light"
                          size="md"
                        >
                          56 Recipes
                        </Text>
                      </Stack>
                      <Stack alignItems="center" className="text-md gap-1">
                        <Followers className="text-[#C42929] text-md w-6 h-6" />
                        <Text
                          className="text-nowrap max-md:text-sm text-[#C42929] max-sm:text-xs underline decoration-[0.25px]"
                          weight="light"
                          size="md"
                        >
                          32 Followers
                        </Text>
                      </Stack>
                    </Stack>
                  </div>
                </div>
              </Card.Content>
            </Card>

            <Stack
              alignItems="center"
              justifyContent="between"
              className="max-lg:hidden"
            >
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
                <Text weight="light">Share</Text>
              </ShareSocialMedia>
            </Stack>
          </div>
        </Stack>
      </div>
      <div
        className="md:bg-white w-full md:mt-8  max-sm:px-4
    [&>.is-closed]:after:bg-gradient-to-b 
    [&>.is-closed]:after:from-transparent 
  [&>.is-closed]:after:to-white
    [&>.is-closed]:after:block 
    [&>.is-closed]:after:w-full 
    [&>.is-closed]:after:absolute 
    [&>.is-closed]:after:h-full 
    [&>.is-closed]:after:bottom-0
    [&>.is-closed]:after:to-80%
    [&>.is-closed]:after:-left-4
    max-sm:[&>.is-closed]:after:w-[calc(100%+16px)] 
    max-sm:[&>.is-closed]:after:-left-4
    [&>.is-closed]:max-h-[15rem]
    [&>.is-closed]:overflow-hidden
    relative
  "
      >
        <div
          className={clsxm(
            "text-wrap break-words container mx-auto md:py-8",
            !session && "is-closed"
          )}
        >
          <Markdown body={content} />
        </div>
      </div>
      {session && <FeaturedArticles featuredArticles={featuredArticles} />}
    </>
  );
};

export default ArticlePage;
