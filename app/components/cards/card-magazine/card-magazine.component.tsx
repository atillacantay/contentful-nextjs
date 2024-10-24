import Card from "@/components/common/card";
import Stack from "@/components/common/stack";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import { ICardMagazine } from "./card-magazine.interfaces";

import { Link } from "@/i18n/routing";
import { useFormatter } from "next-intl";

const CardMagazine = ({
  header,
  date,
  media,
  url = "",
}: ICardMagazine): JSX.Element => {
  const format = useFormatter();

  return (
    <Card className="rounded-2xl w-full h-[338px]">
      <Link
        href={`${url}`}
        title={header}
        target="_blank"
        className="relative w-full h-full object-cover before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.3)] before:z-1"
      >
        <Card.Media
          src={media?.url}
          alt={media?.title}
          width={media?.width}
          height={media?.height}
          className="w-full h-full object-cover"
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
        />
      </Link>
      <Card.Content className="absolute bottom-0 text-white bg-gradient-to-b from-transparent to-gray">
        <Stack spacing={2} direction="col">
          {date && (
            <Text size="sm" className="text-white">
              {format.dateTime(new Date(date), {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Text>
          )}
          <Link href={url} title={header} target="_blank">
            <Header weight="semibold" className="text-white" size="md">
              {header}
            </Header>
          </Link>
        </Stack>
      </Card.Content>
    </Card>
  );
};

export default CardMagazine;
