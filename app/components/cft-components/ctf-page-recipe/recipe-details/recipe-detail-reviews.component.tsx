import CardReview from "@/components/card-review";
import Stack from "@/components/common/stack";
import Star from "@/components/common/star";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import { clsxm } from "@/utils/twMerge.utils";
import { getSession } from "@auth0/nextjs-auth0";
import type { PageRecipe, RecipeReview } from "lib/__generated/sdk";
import { getFormatter, getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";

const FormWriteAReview = dynamic(
  () => import("@/components/form-write-a-review")
);
const AllReviews = dynamic(() => import("@/components/all-reviews"));

interface RecipeDetailReviewsProps {
  recipe: PageRecipe;
  allReviews?: RecipeReview[];
  allReviewsCount?: number;
}

const RecipeDetailReviews = async ({
  recipe,
  allReviews,
  allReviewsCount,
}: RecipeDetailReviewsProps) => {
  const { rating } = recipe;
  const format = await getFormatter();
  const t = await getTranslations();
  const session = await getSession();

  const ActionButtons = () => (
    <>
      {session && (
        <FormWriteAReview
          recipe={recipe}
          modalLabel={t("common.writeAReview")}
        />
      )}
      <AllReviews
        recipe={recipe}
        allReviewsCount={allReviewsCount}
        modalLabel={t("common.allReviews", {
          count: format.number(Number(allReviewsCount)),
        })}
      />
    </>
  );

  return (
    <Stack direction="col">
      <Stack alignItems="center" className="mb-8">
        <Stack spacing={2} className="flex-1">
          <Header as="h3" weight="medium" size="xxl">
            {t("common.reviews")}
          </Header>

          {rating && (
            <Stack alignItems="center" className="flex-1">
              <Star rate={5} value={rating} fill="#FED236" />
              <Text weight="medium" className="ml-1 rtl:mr-1">
                {format.number(rating)}
              </Text>
            </Stack>
          )}
        </Stack>
        <Stack spacing={2} alignItems="center" className="hidden md:flex">
          <ActionButtons />
        </Stack>
      </Stack>
      <Stack spacing={4} direction="row">
        {allReviews?.map((review, index) => (
          <CardReview
            key={review._id}
            {...review}
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
        <ActionButtons />
        <div className="portal-form-write-a-review"></div>
        <div className="portal-all-reviews"></div>
        {/* In development it may be disappered but it's okay.
        When page source contains the divs above. The portal will work */}
      </Stack>
    </Stack>
  );
};

export default RecipeDetailReviews;
