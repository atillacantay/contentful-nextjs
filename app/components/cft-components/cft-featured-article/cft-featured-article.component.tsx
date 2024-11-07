import ArticleOfDay from "@/components/article-of-day";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import IconEye from "@/public/assets/icons/eye.svg";
import type { FeaturedArticle } from "lib/__generated/sdk";
import { headers } from "next/headers";

const CtfFeaturedArticle = async (featuredArticle: FeaturedArticle) => {
  const headerList = await headers();
  const pathname = headerList.get("x-pathname");
  const pathSegments = pathname?.split("/");
  const pageType = pathSegments?.[1];

  if (!featuredArticle.article) return;

  if (pageType && ["articles"].includes(pageType)) {
    return (
      <div className="cursor-default mt-8 [&_.image-section]:lg:w-[44%] [&_.body-section]:lg:w-[56%]">
        <ArticleOfDay
          {...featuredArticle.article}
          contentBefore={
            <div className="mb-[6.5rem] max-sm:hidden">
              <div className="flex justify-between items-center">
                <Header
                  size="xxl"
                  className="text-white grow"
                  weight="semibold"
                >
                  Article Of The Day
                </Header>
                <Text className="text-white align-middle leading-[1.5rem]">
                  <IconEye
                    width={20}
                    height={17}
                    className="inline-block ltr:mr-2 rtl:ml-2 align-sub"
                  />
                  250 Read This Article
                </Text>
              </div>
            </div>
          }
        />
      </div>
    );
  }

  return <ArticleOfDay {...featuredArticle.article} />;
};

export default CtfFeaturedArticle;
