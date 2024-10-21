import ContentfulImage from "@/components//cft-components/cft-image";
import Avatar from "@/components/common/avatar";
import Button from "@/components/common/button";
import Card from "@/components/common/card";
import Stack from "@/components/common/stack";
import Star from "@/components/common/star";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";

import ClockIcon from "@/public/assets/icons/time-outline.svg";
import { clsxm } from "@/utils/twMerge.utils";
import { useFormatter } from "next-intl";
import { Link } from "../../../i18n/routing";
import { IArticleOfDay } from "./article-of-day.interface";

const ArticleOfDay = ({
  slug,
  title,
  subtitle,
  sys: { publishedAt },
  readDurationInMin,
  author,
  image,
  contentBefore,
  verticalImage,
}: IArticleOfDay): JSX.Element => {
  const format = useFormatter();

  return (
    <Card className="bg-[#C42929] rounded-none lg:rounded-2xl">
      <Card.Content className="p-0 lg:p-8">
        <Stack
          direction="col"
          spacing={4}
          className="lg:flex-row lg:items-center flex"
        >
          <div className="lg:rounded-2xl overflow-hidden lg:w-2/3 image-section">
            <Link href={`${slug}`} title={title}>
              <ContentfulImage
                src={image?.url || ""}
                alt={image?.description}
                width={image?.width}
                height={image?.height}
                className={clsxm(
                  "block object-cover object-center ",
                  verticalImage
                    ? "h-full mx-auto"
                    : "w-full aspect-square md:aspect-[8/5]"
                )}
              />
            </Link>
          </div>
          <div className="lg:w-1/3 mx-4 mb-8 body-section">
            {contentBefore}
            <Stack
              direction="col"
              spacing={2}
              className="border-b border-[#FFFFFF23] pb-2"
            >
              <Stack direction="row" spacing={2} className="items-center">
                <Text
                  size="sm"
                  className="lg:order-first ltr:border-r rtl:border-l ltr:pr-2 rtl:pl-2 text-white"
                  weight="light"
                >
                  {format.dateTime(new Date(publishedAt), {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </Text>
                <ClockIcon className={`text-white text-lg`} />
                <Text size="sm" weight="light" className="text-white">
                  {readDurationInMin === 1
                    ? `${readDurationInMin} min Read`
                    : `${readDurationInMin} mins Read`}
                </Text>
              </Stack>
              <Header
                as="h2"
                weight="semibold"
                size="xxl"
                className={`text-white font-['FocoTrial-Bold'] leading-[30.89px]`}
              >
                {title}
              </Header>
              <Stack className="justify-between" alignItems="center">
                <Stack
                  alignItems="center"
                  justifyContent="start"
                  className="mb-2"
                  spacing={2}
                >
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
                  <Text className="text-xs text-white" weight="light">
                    By {author?.name}
                  </Text>
                </Stack>
                <Stack
                  className="justify-between text-xs rtl:flex-row-reverse"
                  alignItems="end"
                >
                  <Star rate={5} value={5} fill="#FED236" />
                  <Text
                    className="ml-1 text-xs !leading-[9px] text-white"
                    weight="light"
                  >
                    3.9
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Text className="mt-4 text-white" size="md" weight="light">
              {subtitle}
            </Text>
            <Button
              as="a"
              href="#"
              title=""
              variant="contained"
              color="white"
              fullWidth
              className="lg:w-auto mt-8 px-6 py-4 text-black text-base"
            >
              Read More
            </Button>
          </div>
        </Stack>
      </Card.Content>
    </Card>
  );
};

export default ArticleOfDay;
