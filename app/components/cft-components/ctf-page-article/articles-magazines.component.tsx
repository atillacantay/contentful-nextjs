"use client";

import ArticleOfDay from "@/components/article-of-day";
import CardArticle from "@/components/cards/card-article";
import Section from "@/components/cft-components/cft-section/cft-section.component";
import Grid from "@/components/common/grid";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import WrapperSwiper from "@/components/wrapper-swiper";
// import IconEye from "@/public/assets/icons/eye.svg";
import media from "@/public/assets/img/avatar.jpg";
import { clsxm } from "@/utils/twMerge.utils";
import { PageArticle } from "lib/__generated/sdk";
import { SwiperSlide } from "swiper/react";

const ArticlesMagazines = ({
  articleOfDay,
  type = "articles",
}: {
  articleOfDay: PageArticle;
  type?: "articles" | "magazines";
}) => (
  <>
    <div className="container mx-auto max-sm:px-4 pt-6">
      {/* <NavigationSub {...navigationSub} /> */}

      <div className="pt-4">
        <div
          className="flex flex-row flex-wrap items-baseline md:gap-[3.5rem] max-sm:gap-[1.5rem] group
          pb-4
          [&>.is-selected]:relative 
          [&>.is-selected]:after:absolute 
          md:[&>.is-selected]:after:mt-[17px] 
          max-sm:[&>.is-selected]:after:mt-[15px] 
          [&>.is-selected]:after:block 
          [&>.is-selected]:after:w-full 
          [&>.is-selected]:after:h-1 
          [&>.is-selected]:after:border-b 
          [&>.is-selected]:after:border-primary_red
        [&>.is-selected>a]:text-primary
        [&>div>a]:font-light
        [&>.is-selected>a]:font-semibold
        "
        >
          <Header
            className="text-[1.5rem] text-primary_dark grow max-sm:w-[100%]"
            weight="semibold"
          >
            Articles & Magazines
          </Header>
          <div
            className={clsxm("place-end", type === "articles" && "is-selected")}
          >
            <Text as="a" href="#" title="">
              Articles
            </Text>
          </div>
          <div
            className={clsxm(
              "place-end max-sm:ltr:ml-8 max-sm:rtl:mr-8",
              type === "magazines" && "is-selected"
            )}
          >
            <Text as="a" href="#" title="">
              Magazines
            </Text>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <div className="md:container md:mx-auto md:max-sm:px-4">
      <div className="cursor-default mt-8 [&_.image-section]:lg:w-[44%] [&_.body-section]:lg:w-[56%]">
        <ArticleOfDay
          {...articleOfDay}
          verticalImage={type === "magazines"}
          contentBefore={
            type === "articles" ? (
              <div className="mb-[6.5rem] max-sm:hidden">
                <div className="flex justify-between items-center">
                  <Header
                    size="xxl"
                    className="text-white grow"
                    weight="semibold"
                  >
                    Article Of The Day
                  </Header>
                  {/* <Text className="text-white align-middle leading-[1.5rem]">
                    <IconEye
                      width={20}
                      height={17}
                      className="inline-block ltr:mr-2 rtl:ml-2 align-sub"
                    />
                    250 Read This Article
                  </Text> */}
                </div>
              </div>
            ) : (
              <>
                <Header
                  size="xxl"
                  className="text-white grow"
                  weight="semibold"
                >
                  Our Latest Issue
                </Header>
                <Text className="text-white font-light pt-4 pb-8 md:pb-16 md:w-3/4">
                  Every season, Goody Kitchen Features their Latest Innovative
                  Recipes and Delicious Creations from our Foodie Community!
                </Text>
                <hr className="md:hidden w-full border-[#FFFFFF23] pb-4" />
              </>
            )
          }
        />
      </div>
    </div>
    <div className="container mx-auto max-sm:px-4">
      {/* What's New */}
      <Section
        className="pt-16 pb-5"
        sectionTitle={{ title: "What's New", btnTitle: "Explore All" }}
        showXItemsOnMobile={1}
        showMobileButton={true}
      >
        <div className="max-sm:hidden">
          <WrapperSwiper>
            {Array(6)
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
                <SwiperSlide key={key} className="!w-[250px] max-sm:!w-[90%]">
                  <CardArticle {...cardArticle} />
                </SwiperSlide>
              ))}
          </WrapperSwiper>
        </div>

        <div className="hidden max-sm:block">
          <Grid col={1} spacing={4}>
            {Array(4)
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
                <Grid.Item key={key} span={1}>
                  <CardArticle {...cardArticle} />
                </Grid.Item>
              ))}
          </Grid>
        </div>
      </Section>

      {type === "articles" ? (
        <Section
          className="pt-16 pb-[5.5rem]"
          sectionTitle={{
            title: "Articles You Will Love",
            btnTitle: "Explore All",
          }}
          showXItemsOnMobile={1}
          showMobileButton={true}
        >
          <div className="max-sm:hidden">
            <WrapperSwiper>
              {Array(6)
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
                  <SwiperSlide key={key} className="!w-[250px] max-sm:!w-[90%]">
                    <CardArticle {...cardArticle} />
                  </SwiperSlide>
                ))}
            </WrapperSwiper>
          </div>

          <div className="hidden max-sm:block">
            <Grid col={1} spacing={4}>
              {Array(3)
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
                  <Grid.Item key={key} span={1}>
                    <CardArticle {...cardArticle} />
                  </Grid.Item>
                ))}
            </Grid>
          </div>
        </Section>
      ) : (
        <Section
          className="pt-16 pb-5"
          sectionTitle={{
            title: "Previous Magazines (14)",
            btnTitle: "Explore All",
          }}
          sectionClassName="[&_a]:hidden"
          showXItemsOnMobile={4}
          showMobileButton={true}
        >
          <Grid lg={5} md={3} col={1} spacing={4}>
            {Array(14)
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
                <Grid.Item
                  key={key}
                  span={1}
                  className="show-x-items-on-mobile"
                >
                  <CardArticle {...cardArticle} />
                </Grid.Item>
              ))}
          </Grid>
        </Section>
      )}
    </div>
  </>
);

export default ArticlesMagazines;
