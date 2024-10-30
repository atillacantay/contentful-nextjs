import Card from "@/components/common/card";
import Stack from "@/components/common/stack";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";

import { Link } from "@/i18n/routing";
import type { PageArticle } from "lib/__generated/sdk";
import { useFormatter } from "next-intl";
// import FormSaveForLaterIcon from "../form-save-for-later-icon";
// import { ModelFormSaveForLaterIcon } from "../form-save-for-later-icon/form-save-for-later-icon.model";

interface CardArticleProps extends PageArticle {
  textColor?: "black" | "white";
}

const CardArticle = ({
  title,
  image,
  slug,
  sys,
  textColor = "white",
}: CardArticleProps): JSX.Element => {
  const format = useFormatter();
  const { publishedAt } = sys;

  return (
    <Card className="rounded-2xl w-full h-[338px]">
      <div className="absolute flex w-full justify-between top-3 z-10 px-3 items-center">
        {/* <FormSaveForLaterIcon {...ModelFormSaveForLaterIcon} /> */}
      </div>

      <Link
        href={`/articles/${slug}`}
        title={title}
        className="relative w-full h-full object-cover before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.3)] before:z-1"
      >
        <Card.Media
          src={image?.url || ""}
          alt={image?.title || title || ""}
          width={image?.width}
          height={image?.height}
          className="w-full h-full object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </Link>
      <Card.Content
        className={`absolute bottom-0 text-white bg-gradient-to-b from-transparent to-gray`}
      >
        <Stack spacing={2} direction="col">
          {publishedAt && (
            <Text size="sm" color={textColor}>
              {format.dateTime(new Date(publishedAt), {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Text>
          )}
          <Link href={`/articles/${slug}`} title={title}>
            <Header weight="semibold" color={textColor} size="md">
              {title}
            </Header>
          </Link>
        </Stack>
      </Card.Content>
    </Card>
  );
};

export default CardArticle;
