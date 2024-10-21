import Avatar from "@/components/common/avatar";
import Card from "@/components/common/card";
import Stack from "@/components/common/stack";
import Star from "@/components/common/star";
import Text from "@/components/common/typography/text";

import { clsxm } from "@/utils/twMerge.utils";
import type { IFoodieReviewCard } from "./card-review.interfaces";

const CardReview = ({
  userName,
  rate,
  comment,
  showImages,
  className,
  contentClassName,
  assets,
  created,
  avatarUrl,
}: IFoodieReviewCard): JSX.Element => {
  return (
    <Card className={clsxm("!shadow-custom_shadow_1", className)}>
      <Card.Content className={clsxm("p-8", contentClassName)}>
        <Stack alignItems="center" spacing={2} className="mb-4">
          {avatarUrl ? (
            <Avatar src={avatarUrl} size={12} rounded="full" />
          ) : (
            <span className="w-12 h-12 bg-black/10 dark:bg-white/10 rounded-full"></span>
          )}
          <Stack direction="col" spacing={2}>
            <Text>{userName}</Text>
            <Stack alignItems="center" className="gap-1">
              <Star rate={1} value={1} fill="rgb(219,161,69)" />
              <Text className="text-xs">{rate}</Text>
            </Stack>
          </Stack>
        </Stack>
        <Text className="mb-4">{comment}</Text>
        {showImages && (
          <Stack alignItems="center" spacing={4} className="mb-4">
            {assets?.map((asset, key) =>
              asset ? (
                <img
                  key={key}
                  src={asset}
                  alt={`review-asset-${key}`}
                  height={110}
                  className="w-14 h-14 rounded-xl object-cover"
                  // srcSetWidths={[110]}
                />
              ) : (
                <></>
              )
            )}
          </Stack>
        )}
        <Text size="sm">{created}</Text>
      </Card.Content>
    </Card>
  );
};

export default CardReview;
