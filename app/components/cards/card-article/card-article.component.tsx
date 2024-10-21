import Badge from "@/components/common/badge";
import Card from "@/components/common/card";
import Stack from "@/components/common/stack";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import { ICardArticle } from "./card-article.interfaces";

import { Link } from "@/i18n/routing";
import Article from "@/public/assets/icons/article.svg";
// import FormSaveForLaterIcon from "../form-save-for-later-icon";
// import { ModelFormSaveForLaterIcon } from "../form-save-for-later-icon/form-save-for-later-icon.model";

const CardArticle = ({
  genre,
  header,
  description,
  date,
  media,
  url = "#",
}: ICardArticle): JSX.Element => {
  return (
    <Card className="rounded-2xl w-full h-[338px]">
      <div className="absolute flex w-full justify-between top-3 z-10 px-3 items-center">
        <Badge
          color="white"
          startIcon={<Article />}
          text={genre}
          className=" px-4 py-2 bg-slate-200/30 backdrop-blur-sm shadow-[0_0_10px_rgba(0, 0, 0, 0.2)]"
        />
        {/* <FormSaveForLaterIcon {...ModelFormSaveForLaterIcon} /> */}
      </div>

      <Link
        href={`/articles/${url}`}
        title={header}
        className="relative w-full h-full object-cover before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.3)] before:z-1"
      >
        <Card.Media
          src={media?.url}
          alt={media?.title}
          width={media?.width}
          height={media?.height}
          className="w-full h-full object-cover"
        />
      </Link>
      <Card.Content
        className={`absolute bottom-0 text-white bg-gradient-to-b from-transparent to-gray`}
      >
        <Stack spacing={2} direction="col">
          <Text size="sm" className="text-white">
            {date}
          </Text>
          <a href={url} title={header}>
            <Header weight="semibold" className="text-white" size="md">
              {header}
            </Header>
          </a>
        </Stack>
      </Card.Content>
    </Card>
  );
};

export default CardArticle;
