import Button from "@/components/common/button";
import Stack from "@/components/common/stack";
import Star from "@/components/common/star";
import Text from "@/components/common/typography/text";
import TrendingIcon from "@/public/assets/icons/trending.svg";
import Image from "next/image";

interface ISearchResultItem {
  title: string;
  media: string;
  rating: string;
  url?: string;
  trending?: boolean;
}

const SearchResultItem = ({
  title,
  media,
  rating,
  url,
  trending = false,
}: ISearchResultItem): JSX.Element => {
  return (
    <Stack className="py-4 border-b border-custom_divider2">
      <Image
        src={media}
        alt={title}
        className="w-16 h-16 rounded-full"
        height={110}
      />
      <Stack direction="col" className="ltr:ml-4 rtl:mr-4 flex-1">
        <a href={url} className="mt-2" title={title}>
          <Text weight="medium" size="md">
            {title}
          </Text>
        </a>
        {!!rating && (
          <Stack
            alignItems="center"
            className="hidden space-x-1 rtl:space-x-reverse"
          >
            <Star
              rate={5}
              value={5}
              className="w-3 h-3 text-secondary_yellow"
            />
            <Text weight="medium" className="text-xs">
              {rating}
            </Text>
          </Stack>
        )}
      </Stack>
      {trending && (
        <Button.Icon className="bg-transparent w-6 h-6 self-center">
          <TrendingIcon className="w-6 h-6 text-primary_red" />
        </Button.Icon>
      )}
    </Stack>
  );
};

export default SearchResultItem;
