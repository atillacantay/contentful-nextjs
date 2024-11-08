"use client";

import { AllReviewsResponse } from "@/api/all-reviews/[slug]/route";
import CardReview from "@/components/card-review";
import Button from "@/components/common/button";
import Modal from "@/components/common/modal";
import Stack from "@/components/common/stack";
import Star from "@/components/common/star";
import TypographyHeader from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import ReviewHistogram from "@/components/review-histogram/review-histogram.component";
import CloseIcon from "@/public/assets/icons/close.svg";
import SortDescIcon from "@/public/assets/icons/sort-desc.svg";
import { clsxm } from "@/utils/twMerge.utils";
import type { RecipeReview } from "lib/__generated/sdk";
import { getReviews } from "lib/api/reviews";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IAllReviews } from "./all-reviews.interfaces";

const LIMIT_PER_LOAD = 5;

const AllReviews = ({
  recipe,
  allReviewsCount,
  modalLabel,
  className,
  buttonClassName,
}: IAllReviews): JSX.Element => {
  const t = useTranslations();
  const format = useFormatter();
  const locale = useLocale();
  const [isAllReviewsModalOpen, setIsAllReviewsModalOpen] =
    useState<boolean>(false);
  const [reviews, setReviews] = useState<RecipeReview[]>([]);
  const [stars, setStars] = useState<AllReviewsResponse["stars"]>([]);
  const [reviewDetails, setReviewDetails] = useState<
    AllReviewsResponse["reviewDetails"]
  >([]);

  const refReviews = useRef<HTMLDivElement>(null);
  const [sort, setSort] = useState<string>("desc");
  const [limit, setLimit] = useState<number>(LIMIT_PER_LOAD);

  useEffect(() => {
    const getAllReviews = async () => {
      if (recipe.slug) {
        const data = await getReviews({
          slug: recipe.slug,
        });
        setReviews(data.reviews);
        setStars(data.stars);
        setReviewDetails(data.reviewDetails);
      }
    };

    if (isAllReviewsModalOpen) {
      getAllReviews();
    }
  }, [isAllReviewsModalOpen]);

  const SortInput = ({ className }: { className: string }) => (
    <div className={"relative " + className}>
      <select
        className="w-full peer border rounded-full border-primary_red ltr:pl-6 rtl:pr-6 py-4 ltr:pr-16 rtl:pl-16 appearance-none focus:outline-none cursor-pointer text-sm
        dark:bg-goki_dark_card dark:text-white 
        "
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="desc">{t("common.labelSortDesc")}</option>
        <option value="asc">{t("common.labelSortAsc")}</option>
      </select>
      <SortDescIcon
        className=":w-[40px] absolute top-[22px] ltr:right-6 rtl:left-6 pointer-events-none scale-y-[-1] peer-has-[option:first-child:checked]:!scale-y-[1]"
        width={12}
        height={12}
      />
    </div>
  );

  const sortedReviews = useMemo(
    () =>
      reviews
        ?.sort(
          (reviewA, reviewB) =>
            (reviewB.ratingOverall || 0) - (reviewA.ratingOverall || 0)
        )
        .sort(() => {
          if (sort === "desc") return 0;
          return -1;
        })
        .slice(0, limit),
    [reviews, sort, limit]
  );

  useEffect(() => {
    if (window.innerWidth >= 768) {
      refReviews.current?.scrollTo({
        top: 380,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [sort]);

  useEffect(() => {
    const modalElement = refReviews.current;
    const onWindowScroll = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target?.scrollHeight - target?.scrollTop < window.innerHeight * 1.1) {
        setLimit(limit + LIMIT_PER_LOAD);
      }
    };

    modalElement?.addEventListener("scroll", onWindowScroll);
    return () => {
      modalElement?.removeEventListener("scroll", onWindowScroll);
    };
  }, [isAllReviewsModalOpen, limit, refReviews]);

  const renderModal = (
    <Modal
      show={isAllReviewsModalOpen}
      title={modalLabel}
      onClose={() => setIsAllReviewsModalOpen(false)}
      align="middle"
      ref={refReviews}
    >
      <Modal.Header className="w-full md:mt-4">
        <div className="flex w-full justify-end relative">
          <Button
            className="self-middle max-w-min min-w-min p-0 dark:text-white max-sm:absolute max-sm:top-3"
            endIcon={<CloseIcon width={22} height={22} />}
            onClick={() => setIsAllReviewsModalOpen(false)}
          />
        </div>
        <div className="flex justify-between items-center md:mt-7 max-sm:flex-col">
          <TypographyHeader
            className="my-2 self-start text-xl md:text-2xl dark:text-white"
            as="h3"
            weight="semibold"
          >
            {modalLabel}
          </TypographyHeader>
          <SortInput className="max-sm:hidden" />
        </div>
      </Modal.Header>
      <Modal.Body noDefaultPadding>
        <Stack direction="col" className="mt-7">
          <Stack
            className="flex-col lg:flex-row px-4 md:px-8 pb-8 border-b border-custom_divider5  dark:border-custom2_dark"
            spacing={4}
          >
            <div className="w-full border rounded-2xl border-custom_divider2  dark:border-custom2_dark p-8 space-y-4">
              <ReviewHistogram percentages={stars} />
            </div>
            <div className="w-full border rounded-2xl border-custom_divider2  dark:border-custom2_dark divide-y divide-custom_divider2  dark:divide-custom2_dark  py-2 px-8">
              {reviewDetails.map((reviewDetail) => (
                <Stack
                  key={reviewDetail.key}
                  alignItems="center"
                  justifyContent="between"
                  className="py-4"
                >
                  <Text>{reviewDetail.label}</Text>
                  <Stack alignItems="center" className="gap-1">
                    <Star
                      rate={Number(reviewDetail.rate)}
                      value={Number(reviewDetail.rate)}
                      className="w-3 h-3 !text-secondary_yellow"
                    />
                    <Text>{reviewDetail.rate}</Text>
                  </Stack>
                </Stack>
              ))}
            </div>

            <SortInput className="hidden max-sm:block" />
          </Stack>

          <Stack
            direction="col"
            className="divide-y divide-custom_divider2 dark:divide-custom2_dark px-4 md:px-8 pt-7"
          >
            {sortedReviews.map((review) => (
              <CardReview
                key={review._id}
                {...review}
                className="!shadow-none lg:bg-transparent my-4 p-0"
                contentClassName="max-sm:p-1"
              />
            ))}
          </Stack>
        </Stack>
      </Modal.Body>
    </Modal>
  );

  useEffect(() => {
    if (typeof document !== "undefined") {
      const portalRoot = document.getElementById("portal-all-reviews");
      if (portalRoot && isAllReviewsModalOpen) {
        createPortal(renderModal, portalRoot);
      }
    }
  }, [isAllReviewsModalOpen, renderModal]);

  const render = (
    <div data-cmp="all-reviews" className={className}>
      <>
        <Button
          variant="outlined"
          size="lg"
          className={clsxm("text-primary_red font-medium", buttonClassName)}
          onClick={() => setIsAllReviewsModalOpen(true)}
        >
          {t("common.showAllReviewsWithCount", {
            count: format.number(Number(allReviewsCount), {
              numberingSystem: locale === "ar" ? "arab" : undefined,
            }),
          })}
        </Button>
      </>
    </div>
  );

  return (
    <div data-cmp="all-reviews" className={className}>
      <Button
        variant="outlined"
        size="lg"
        className={clsxm(
          "text-primary_red max-md:w-full font-medium",
          buttonClassName
        )}
        onClick={() => setIsAllReviewsModalOpen(true)}
      >
        {t("common.showAllReviewsWithCount", {
          count: format.number(Number(allReviewsCount), {
            numberingSystem: locale === "ar" ? "arab" : undefined,
          }),
        })}
      </Button>
      {isAllReviewsModalOpen && renderModal}
    </div>
  );
};

export default AllReviews;
