import Badge from "@/components/common/badge";
import Card from "@/components/common/card";
import Stack from "@/components/common/stack";
import Star from "@/components/common/star";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";

import { Link } from "@/i18n/routing";
import Shop from "@/public/assets/icons/shopping-bag.svg";
import { PageShop } from "lib/__generated/sdk";
import { useFormatter, useTranslations } from "next-intl";
// import FormSaveForLaterIcon from "../form-save-for-later-icon";
// import { ModelFormSaveForLaterIcon } from "../form-save-for-later-icon/form-save-for-later-icon.model";

interface CardShopProps extends PageShop {
  textColor?: "black" | "white";
}

const CardShop = ({
  name,
  slug,
  category,
  rating,
  productNetWeight,
  productUnit,
  image,
  textColor,
}: CardShopProps): JSX.Element => {
  const t = useTranslations();
  const format = useFormatter();
  const url = `/shop/${category ? `${category.slug}/` : ""}${slug}`;

  return (
    <Card className="rounded-2xl w-full  lg:h-[338px] flex flex-col justify-between">
      <div className="absolute flex w-full justify-between top-3 z-10 px-3 items-center">
        <Badge
          color="white"
          startIcon={<Shop />}
          text={t("cards.shop")}
          className=" px-4 py-2 bg-black/20 backdrop-blur-sm shadow-[0_0_10px_rgba(0, 0, 0, 0.2)]"
        />
        {/* <FormSaveForLaterIcon {...ModelFormSaveForLaterIcon} /> */}
      </div>

      <Link
        href={url}
        title={name}
        className="relative w-auto object-cover !h-[234px] grow"
      >
        <Card.Media
          src={image?.url || ""}
          alt={image?.title || name || ""}
          width={image?.width}
          height={image?.height}
          className="h-full w-fit mx-auto"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </Link>
      <Card.Content className="border-t border-[rgba(25, 25, 25, 0.14)]">
        <Stack spacing={2} direction="col">
          <Link href={url} title={name}>
            <Header
              weight="semibold"
              className={`text-[${textColor}] max-h-24 overflow-hidden whitespace-nowrap text-ellipsis`}
              size="md"
            >
              {name}
            </Header>
          </Link>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="between"
            className="h-[24px]"
          >
            <Text color={textColor} className="text-xs">
              {productNetWeight} {productUnit}
            </Text>
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

export default CardShop;
