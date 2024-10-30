import ContentfulImage from "@/components//cft-components/cft-image";
import Button from "@/components/common/button";
import Card from "@/components/common/card";
import Stack from "@/components/common/stack";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import { Link } from "@/i18n/routing";
import type { FeaturedMagazine } from "lib/__generated/sdk";
import { useFormatter } from "next-intl";

const CtfFeaturedMagazine = (featuredMagazine: FeaturedMagazine) => {
  if (!featuredMagazine.magazine) return null;

  const { sys, title, subtitle, flipBookUrl, image } =
    featuredMagazine.magazine;
  const { publishedAt } = sys;
  const format = useFormatter();

  return (
    <div className="md:container md:mx-auto md:max-sm:px-4">
      <div className="cursor-default mt-8 [&_.image-section]:lg:w-[44%] [&_.body-section]:lg:w-[56%]">
        <Card className="bg-[#C42929] rounded-none lg:rounded-2xl">
          <Card.Content className="p-0 lg:p-8">
            <Stack
              direction="col"
              spacing={4}
              className="lg:flex-row lg:items-center flex"
            >
              <div className="lg:rounded-2xl overflow-hidden lg:w-2/3 image-section">
                <Link href={`${flipBookUrl}`} title={title} target="_blank">
                  <ContentfulImage
                    src={image?.url || ""}
                    alt={image?.description}
                    width={image?.width}
                    height={image?.height}
                    className="block object-cover object-center h-full mx-auto"
                  />
                </Link>
              </div>
              <div className="lg:w-1/3 mx-4 mb-8 body-section">
                <Header
                  size="xxl"
                  className="text-white grow"
                  weight="semibold"
                >
                  {title}
                </Header>
                <Text className="text-white font-light pt-4 pb-8 md:pb-16 md:w-3/4">
                  {subtitle}
                </Text>
                <hr className="md:hidden w-full border-[#FFFFFF23] pb-4" />
                <Stack
                  direction="col"
                  spacing={2}
                  className="border-b border-[#FFFFFF23] pb-2"
                >
                  <Stack direction="row" spacing={2} className="items-center">
                    <Text
                      size="sm"
                      className="lg:order-first text-white"
                      weight="light"
                    >
                      {format.dateTime(new Date(publishedAt), {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Text>
                  </Stack>
                  <Link href={`${flipBookUrl}`} title={title} target="_blank">
                    <Header
                      as="h2"
                      weight="semibold"
                      size="xxl"
                      className={`text-white font-['FocoTrial-Bold'] leading-[30.89px]`}
                    >
                      Our Latest Issue
                    </Header>
                  </Link>
                </Stack>
                <Text className="mt-4 text-white" size="md" weight="light">
                  Every season, Goody Kitchen Features their Latest Innovative
                  Recipes and Delicious Creations from our Foodie Community!
                </Text>
                <Button
                  as={Link}
                  href={`${flipBookUrl}`}
                  title={title}
                  variant="contained"
                  color="white"
                  fullWidth
                  target="_blank"
                  className="lg:w-auto mt-8 px-6 py-4 text-black text-base"
                >
                  Read More
                </Button>
              </div>
            </Stack>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default CtfFeaturedMagazine;
