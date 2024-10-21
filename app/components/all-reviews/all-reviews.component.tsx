"use client";

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
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IAllReviews, IReview } from "./all-reviews.interfaces";

const LIMIT_PER_LOAD = 5;

const AllReviews = ({
  modalLabel,
  reviews,
  labelSortAsc,
  labelSortDesc,
  buttonLabel,
  stars,
  reviewDetails,
  className,
  buttonClassName,
}: IAllReviews): JSX.Element => {
  const [isAllReviewsModalOpen, setIsAllReviewsModalOpen] =
    useState<boolean>(false);
  const refReviews = useRef<HTMLDivElement>(null);
  const [sort, setSort] = useState<string>("desc");
  const [limit, setLimit] = useState<number>(LIMIT_PER_LOAD);

  const SortInput = ({ className }: { className: string }) => (
    <div className={"relative " + className}>
      <select
        className="w-full peer border rounded-full border-primary_red ltr:pl-6 rtl:pr-6 py-4 ltr:pr-16 rtl:pl-16 appearance-none focus:outline-none cursor-pointer text-sm
        dark:bg-goki_dark_card dark:text-white 
        "
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="desc">{labelSortDesc}</option>
        <option value="asc">{labelSortAsc}</option>
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
          (reviewA: IReview, reviewB: IReview) => reviewB.rate - reviewA.rate
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

  const render = (
    <div data-cmp="all-reviews" className={className}>
      <>
        <Button
          variant="outlined"
          size="lg"
          className={clsxm("text-primary_red font-medium", buttonClassName)}
          onClick={() => setIsAllReviewsModalOpen(true)}
        >
          {buttonLabel}
        </Button>

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
                          rate={reviewDetail.rate}
                          value={reviewDetail.rate}
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
                className="divide-y divide-custom_divider2 dark:divide-custom2_dark  px-4 md:px-8 pt-7"
              >
                {sortedReviews.map((review, index) => (
                  <CardReview
                    key={index}
                    userName={review.userName}
                    comment={review.comment}
                    rate={review.rate}
                    showImages={review.showImages}
                    assets={review.images}
                    created={review.created}
                    avatarUrl={review.avatarUrl}
                    className="!shadow-none lg:bg-transparent my-4 p-0"
                    contentClassName="max-sm:p-1"
                  />
                ))}
              </Stack>
            </Stack>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );

  return (
    <>
      {render}
      {Array.from(document?.getElementsByClassName("portal-all-reviews"))?.map(
        (el) => createPortal(render, el)
      )}
    </>
  );
};

export default AllReviews;
