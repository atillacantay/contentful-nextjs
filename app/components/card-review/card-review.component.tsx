import ContentfulImage from "@/components/cft-components/cft-image";
import Avatar from "@/components/common/avatar";
import Card from "@/components/common/card";
import Stack from "@/components/common/stack";
import Star from "@/components/common/star";
import Text from "@/components/common/typography/text";
import { clsxm } from "@/utils/twMerge.utils";
import { RecipeReview } from "lib/__generated/sdk";
import { useFormatter, useLocale } from "next-intl";

interface CardReviewProps extends RecipeReview {
  className?: string;
  contentClassName?: string;
}

const CardReview = ({
  author,
  ratingOverall,
  content,
  className,
  contentClassName,
  imagesCollection,
  sys,
}: CardReviewProps): JSX.Element => {
  const format = useFormatter();
  const locale = useLocale();
  const { firstPublishedAt } = sys;
  const images = imagesCollection?.items.filter(Boolean);

  return (
    <Card className={clsxm("!shadow-custom_shadow_1", className)}>
      <Card.Content className={clsxm("p-8", contentClassName)}>
        <Stack alignItems="center" spacing={2} className="mb-4">
          {author?.avatar?.url ? (
            <Avatar
              src={author.avatar.url}
              size={12}
              alt={author.avatar.description || author.name || "User Avatar"}
              width={48}
              height={48}
              rounded="full"
            />
          ) : (
            <span className="w-12 h-12 bg-black/10 dark:bg-white/10 rounded-full"></span>
          )}
          <Stack direction="col" spacing={2}>
            <Text>{author?.name}</Text>
            {ratingOverall && (
              <Stack alignItems="center" className="gap-1">
                <Star rate={1} value={1} fill="#FED236" />
                <Text className="text-xs">
                  {format.number(ratingOverall, {
                    numberingSystem: locale === "ar" ? "arab" : undefined,
                  })}
                </Text>
              </Stack>
            )}
          </Stack>
        </Stack>
        <Text className="mb-4">{content}</Text>
        {images?.length ? (
          <Stack alignItems="center" spacing={4} className="mb-4">
            {images.map(
              (image) =>
                image && (
                  <ContentfulImage
                    key={image.sys.id}
                    src={image.url || ""}
                    alt={
                      image.description ||
                      image.title ||
                      `review-asset-${image.sys.id}`
                    }
                    width={110}
                    height={110}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                )
            )}
          </Stack>
        ) : null}
        <Text size="sm">
          {format.dateTime(new Date(firstPublishedAt), {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            numberingSystem: locale === "ar" ? "arab" : undefined,
          })}{" "}
          |{" "}
          {format.dateTime(new Date(firstPublishedAt), {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            numberingSystem: locale === "ar" ? "arab" : undefined,
          })}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default CardReview;
