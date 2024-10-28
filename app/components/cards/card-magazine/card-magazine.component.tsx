import Card from "@/components/common/card";
import Stack from "@/components/common/stack";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";

import { Link } from "@/i18n/routing";
import type { PageMagazine } from "lib/__generated/sdk";
import { useFormatter } from "next-intl";

interface CardMagazineProps extends PageMagazine {
  textColor?: "black" | "white";
}

const CardMagazine = ({
  title,
  image,
  flipBookUrl,
  sys,
  textColor = "white",
}: CardMagazineProps): JSX.Element => {
  const { publishedAt } = sys;
  const format = useFormatter();

  return (
    <Card className="rounded-2xl w-full h-[338px]">
      <Link
        href={`${flipBookUrl}`}
        title={title}
        target="_blank"
        className="relative w-full h-full object-cover before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.3)] before:z-1"
      >
        <Card.Media
          src={image?.url || ""}
          alt={image?.title || title || ""}
          width={image?.width}
          height={image?.height}
          className="w-full h-full object-cover"
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
        />
      </Link>
      <Card.Content
        className={`absolute bottom-0 text-[${textColor}] bg-gradient-to-b from-transparent to-gray`}
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
          <Link href={`${flipBookUrl}`} title={title} target="_blank">
            <Header weight="semibold" color={textColor} size="md">
              {title}
            </Header>
          </Link>
        </Stack>
      </Card.Content>
    </Card>
  );
};

export default CardMagazine;
