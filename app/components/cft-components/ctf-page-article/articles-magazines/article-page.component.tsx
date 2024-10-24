"use client";

import CardArticle from "@/components/cards/card-article";
import Section from "@/components/cft-components/cft-section/cft-section.component";
import RecipeDetailReviews from "@/components/cft-components/ctf-page-recipe/recipe-details/recipe-detail-reviews.component";
import Button from "@/components/common/button";
import Card from "@/components/common/card";
import Stack from "@/components/common/stack";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import Rate from "@/components/rate";
import ShareSocialMedia from "@/components/share-social-media";
import HeaderMini from "@/components/templates/header/header-mini-component";
import WrapperSwiper from "@/components/wrapper-swiper/wrapper-swiper.component";
import Followers from "@/public/assets/icons/followers.svg";
import Heart from "@/public/assets/icons/heart-outline.svg";
import MasterclassIcon from "@/public/assets/icons/masterclass.svg";
import Recipe from "@/public/assets/icons/recipe.svg";
import media from "@/public/assets/img/avatar.jpg";
import mediaChef from "@/public/assets/img/chef.png";
import { clsxm } from "@/utils/twMerge.utils";
import { SwiperSlide } from "swiper/react";

export const ArticlePage = ({
  recipeDetailReviews,
  loggedOut,
}: {
  recipeDetailReviews: React.ComponentProps<typeof RecipeDetailReviews>;
  loggedOut: boolean;
}) => (
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
          <img
            className="block w-full lg:rounded-2xl"
            src={media}
            alt={"Media Alt"}
          />
        </div>
        <div className="flex-1 max-lg:px-4">
          <Stack alignItems="center" justifyContent="between" className="mb-4">
            <Rate rate={3.9} hideRateText>
              <Text
                size="md"
                weight="light"
                className="ltr:ml-2 rtl:mr-2 leading-3"
              >
                3.9 Overall
              </Text>
            </Rate>
            <Stack className="max-lg:hidden">
              <Button
                className="font-medium text-primary_red"
                startIcon={<Heart fontSize={24} />}
              >
                Save
              </Button>
            </Stack>
          </Stack>
          <Header
            weight="semibold"
            className="text-[32px] text-primary_dark mb-4 leading-[41.18px]"
          >
            Back to school! How to boost my child’s immunity
          </Header>
          <Text weight="light" className="text-black/40">
            2 Mins Read | 12/10/2022
          </Text>

          <Text weight="medium" className="mt-4 mb-8 text-primary_dark">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ratione
            rem quod excepturi impedit laudantium sint voluptatibus reiciendis
            maxime! Amet accusantium ex fugiat, molestias assumenda deserunt. Ea
            nemo sit unde error eum consequatur harum eligendi earum, inventore
            sunt mollitia. Esse.
          </Text>

          <Card className="my-4  max-lg:text-center w-full md:p-4 rounded-2xl bg-transparent shadow-none max-sm:bg-white max-sm:rounded-lg max-sm:shadow-[0px_4px_10px_0px_rgba(0,0,0,.04)] max-sm:p-4">
            <Card.Content className={`text-white`}>
              <Text size="2xl" weight="semibold">
                Meet The Author
              </Text>
              <div className="flex max-lg:flex-col max-lg:items-center">
                <a href="#" title="" className="ltr:mr-4 rtl:ml-4 pt-4 pb-2">
                  <Card.Media
                    src={mediaChef}
                    alt="description"
                    className="w-[112px] rounded-full"
                  />
                </a>

                <div className="mt-4 max-sm:-mx-4">
                  <Text as="a" href="#" title="" weight="light">
                    Masa Bitar
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
          loggedOut && "is-closed"
        )}
      >
        {loggedOut}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat
        pellentesque purus, et imperdiet ex faucibus luctus. Sed enim ligula,
        bibendum ac urna et, maximus congue augue. Curabitur convallis enim
        enim. Phasellus et scelerisque ligula. Ut a rhoncus erat. Etiam suscipit
        mauris et mattis volutpat. Quisque nec accumsan nunc, sed semper metus.
        Duis eleifend consectetur dictum. Duis purus leo, posuere at odio sed,
        elementum ornare sem. Sed at iaculis massa. Cras tempor diam quis felis
        suscipit, vel dignissim ante sagittis. Curabitur porttitor mollis orci.
        Mauris quis est interdum, sagittis elit vitae, rhoncus dui. Duis a risus
        venenatis, venenatis dolor vel, malesuada erat. Ut porta dolor sed velit
        pharetra, non sodales eros interdum. Integer a mi a tellus tincidunt
        hendrerit. Phasellus accumsan lectus at massa placerat, in interdum eros
        tincidunt. Etiam viverra ante id lorem luctus finibus. Curabitur ipsum
        eros, blandit vel sodales sit amet, condimentum ut nisi. Phasellus
        iaculis sit amet eros at feugiat. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec volutpat pellentesque purus, et
        imperdiet ex faucibus luctus. Sed enim ligula, bibendum ac urna et,
        maximus congue augue. Curabitur convallis enim enim. Phasellus et
        scelerisque ligula. Ut a rhoncus erat. Etiam suscipit mauris et mattis
        volutpat. Quisque nec accumsan nunc, sed semper metus. Duis eleifend
        consectetur dictum. Duis purus leo, posuere at odio sed, elementum
        ornare sem. Sed at iaculis massa. Cras tempor diam quis felis suscipit,
        vel dignissim ante sagittis. Curabitur porttitor mollis orci. Mauris
        quis est interdum, sagittis elit vitae, rhoncus dui.
      </div>
    </div>
    {!loggedOut ? (
      <div className="px-4 lg:container lg:mx-auto lg:mb-28">
        <Section
          className="pt-8 lg:pt-16 pb-5 md:[&_.navigation-sub-prev]:hidden md:[&_.navigation-sub-next]:hidden"
          sectionTitle={{
            title: "You May Also Like",
            btnTitle: "Explore All",
          }}
          sectionClassName="[&_a]:hidden"
        >
          <WrapperSwiper>
            {Array(5)
              .fill({
                genre: "article",
                header: "Back to school! How to boost my childs immunity",
                description: "By Goody Kitchen",
                textColor: "white",
                reviews: 39,
                date: "Mon, 31 Jan 2023",
                mediaSrc: media,
              })
              .map((cardArticle, key) => (
                <SwiperSlide
                  key={key}
                  className="!min-w-[250px] !w-[19%] max-sm:!w-[90%]"
                >
                  <CardArticle {...cardArticle} />
                </SwiperSlide>
              ))}
          </WrapperSwiper>
        </Section>
      </div>
    ) : (
      <></>
    )}
    <div className="px-4 my-8 md:my-12 lg:mb-16 md:container md:mx-auto">
      <RecipeDetailReviews {...recipeDetailReviews} />
    </div>
  </>
);

export default ArticlePage;
