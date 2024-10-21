import AllReviews from "@/components/all-reviews/all-reviews.component";
import CardReview from "@/components/card-review";
import Stack from "@/components/common/stack";
import Star from "@/components/common/star";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import FormWriteAReview from "@/components/form-write-a-review/form-write-a-review.component";

import { reviews } from "@/components/all-reviews/all-reviews.model";
import { clsxm } from "@/utils/twMerge.utils";

const RecipeDetailReviews = ({
  formWriteAReview,
  allReviews,
}: {
  formWriteAReview: React.ComponentProps<typeof FormWriteAReview>;
  allReviews: React.ComponentProps<typeof AllReviews>;
}): JSX.Element => {
  const ActionButtons = () => (
    <>
      <FormWriteAReview {...formWriteAReview} modalLabel="Write a Review" />
      <AllReviews
        {...allReviews}
        modalLabel={`All Reviews (${reviews.length})`}
      />
    </>
  );

  return (
    <Stack direction="col">
      <Stack alignItems="center" className="mb-8">
        <Stack spacing={2} className="flex-1">
          <Header as="h3" weight="medium" size="xxl">
            Reviews
          </Header>
          <Stack alignItems="center" className="flex-1">
            <Star rate={5} value={5} fill="#FED236" />
            <Text weight="medium" className="ml-1 rtl:mr-1">
              {3.9}
            </Text>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems="center" className="hidden md:flex">
          <ActionButtons />
        </Stack>
      </Stack>
      <Stack spacing={4} direction="row">
        {reviews.slice(0, 3).map((review, index) => (
          <CardReview
            userName={review.userName}
            comment="abc"
            rate={review.rate}
            showImages={false}
            avatarUrl={review.avatarUrl}
            className={clsxm(
              "grow",
              index && "max-sm:hidden",
              index > 0 && "max-md:hidden",
              index == 2 && "max-lg:hidden"
            )}
          />
        ))}
      </Stack>
      <Stack spacing={4} direction="col" className="md:hidden mt-8">
        <div className="portal-form-write-a-review"></div>
        <div className="portal-all-reviews"></div>
        {/* In development it may be disappered but it's okay.
        When page source contains the divs above. The portal will work */}
      </Stack>
    </Stack>
  );
};

export default RecipeDetailReviews;
