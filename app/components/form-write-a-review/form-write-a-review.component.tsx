"use client";

import ContentfulImage from "@/components/cft-components/cft-image";
import Button from "@/components/common/button";
import Modal from "@/components/common/modal";
import Spinner from "@/components/common/spinner";
import Stack from "@/components/common/stack/stack.component";
import Text from "@/components/common/typography/text";
import Rate from "@/components/rate/rate.component";
import { useMutation } from "@/hooks/useMutation";
import IconAdd from "@/public/assets/icons/add.svg";
import TrashIcon from "@/public/assets/icons/close.svg";
import { clsxm } from "@/utils/twMerge.utils";
import { useUser } from "@auth0/nextjs-auth0/client";
import { PageRecipe } from "lib/__generated/sdk";
import { addReview } from "lib/api/reviews";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

interface FormWriteAReviewProps {
  recipe: PageRecipe;
  modalLabel: string;
  className?: string;
  buttonClassName?: string;
}

const FormWriteAReview = ({
  recipe,
  modalLabel,
  className,
  buttonClassName,
}: // apiData: { authorId, parentId, relatedId, relatedObjectType, cultureCode },
FormWriteAReviewProps): JSX.Element => {
  const t = useTranslations();
  const format = useFormatter();
  const locale = useLocale();
  const user = useUser();
  const { isLoading, error, mutate } = useMutation(addReview, {
    onSuccess: () => setFormWriteAReviewShown(false),
  });

  const [isFormWriteAReviewShown, setFormWriteAReviewShown] =
    useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [ingredients, setIngredients] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<number>(0);
  const [taste, setTaste] = useState<number>(0);
  const [imagesToUpload, setImagesToUpload] = useState<Record<string, File>>(
    {}
  );
  const [userReview, setUserReview] = useState<string>("");

  const isValid = useMemo(
    () =>
      !!(
        rating ||
        accuracy ||
        difficulty ||
        taste ||
        Object.keys(imagesToUpload).length ||
        userReview.length
      ),
    [rating, accuracy, difficulty, taste, imagesToUpload, userReview]
  );

  const scores: [
    string,
    number,
    React.Dispatch<React.SetStateAction<number>>
  ][] = [
    [t("common.overallRating"), rating, setRating],
    [t("common.ingredients"), ingredients, setIngredients],
    [t("common.accuracy"), accuracy, setAccuracy],
    [t("common.difficulty"), difficulty, setDifficulty],
    [t("common.taste"), taste, setTaste],
  ];

  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = Array.from(e.target.files || []).slice(0, 1)[0];
    if (file && file.size <= 5000000) {
      // 5MB
      const imageList = Object.entries(imagesToUpload).slice(-2);
      const uri = URL.createObjectURL(file);
      imageList.push([uri, file]);
      setImagesToUpload(Object.fromEntries(imageList));
    }
  };

  const removeImage = (src: string) => {
    const list = [...Object.entries(imagesToUpload)];
    const index = list.findIndex((imagesToUpload) => imagesToUpload[0] === src);
    if (index < 0) return;
    list.splice(index, 1);
    setImagesToUpload(Object.fromEntries(list));
  };

  const clearAll = () => {
    setRating(0);
    setIngredients(0);
    setAccuracy(0);
    setDifficulty(0);
    setTaste(0);
    setImagesToUpload({});
    setUserReview("");
  };

  useEffect(() => {
    if (isFormWriteAReviewShown === false) clearAll();
  }, [isFormWriteAReviewShown]);

  const submit = async () => {
    if (!isValid) return;
    const formData = new FormData();
    if (user.user?.sub) {
      formData.append("authorId", user.user.sub);
    }
    formData.append("content", userReview);
    formData.append("relatedId", recipe.sys.id);
    formData.append("ratingOverall", rating.toString());
    formData.append("ratingIngredients", ingredients.toString());
    formData.append("ratingAccuracy", accuracy.toString());
    formData.append("ratingDifficulty", difficulty.toString());
    formData.append("ratingTaste", taste.toString());
    Object.values(imagesToUpload).map((file, index) => {
      formData.append(`images-${index}`, file, file.name);
    });

    try {
      mutate(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const renderModal = (
    <Modal
      show={isFormWriteAReviewShown}
      title={modalLabel}
      onClose={() => setFormWriteAReviewShown(false)}
      align="middle"
    >
      <Modal.Body className="max-sm:bg-[rgb(250,250,250)] dark:max-sm:bg-goki_dark border-t dark:border-custom2_dark pt-10">
        <div className="bg-light-600 pb-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
          {recipe.image && (
            <ContentfulImage
              src={recipe.image.url || ""}
              alt={recipe.image.description || recipe.title || "Recipe Image"}
              width={recipe.image.width}
              height={recipe.image.height}
              className="md:w-[100px] md:h-[100px] object-cover rounded-xl"
              sizes="(min-width: 768px) 200px, 100vw"
            />
          )}
          <div className="grow flex flex-col space-y-2 md:space-y-3">
            {recipe.rating && (
              <Rate rate={recipe.rating} hideRateText>
                <Text
                  size="sm"
                  weight="light"
                  className="ltr:ml-2 rtl:mr-2 leading-3"
                >
                  {t("common.overallRatingWithCount", {
                    rating: format.number(Number(recipe.rating), {
                      numberingSystem: locale === "ar" ? "arab" : undefined,
                    }),
                  })}
                </Text>
              </Rate>
            )}
            <Text weight="semibold" size="sm">
              {recipe.title}
            </Text>
            <div className="flex items-center">
              {recipe.author?.avatar && (
                <div className="relative overflow-hidden bg-white dark:bg-goki_dark shadow-md shrink-0 rounded-full w-6 h-6">
                  <ContentfulImage
                    className="block w-full object-cover max-w-full h-full"
                    src={recipe.author?.avatar.url || ""}
                    width={recipe.author.avatar.width}
                    height={recipe.author.avatar.height}
                    alt={
                      recipe.author?.avatar.description ||
                      recipe.author.name ||
                      "User Avatar"
                    }
                    draggable="false"
                  />
                </div>
              )}
              <Text className="ltr:ml-2 rtl:mr-2 text-xs">
                {recipe.author?.name}
              </Text>
            </div>
          </div>
        </div>

        <>
          {scores.map(([label, state, setState], key) => (
            <div
              className="py-8 max-sm:space-y-4 border-b dark:border-custom2_dark flex md:items-center max-sm:flex-col"
              key={"star-div" + key}
            >
              <Text weight="semibold" className="grow">
                {label}
              </Text>
              <div className="flex [&:hover_div:not(:hover)>svg]:text-[#FED236]">
                {[1, 2, 3, 4, 5].map((num, key) => (
                  <div
                    key={"star" + key}
                    onClick={() => setState(num)}
                    className={`ltr:pr-4 rtl:pl-4 [&:hover~div>svg]:!text-[#e8e8e8]`}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`cursor-pointer hover:text-[#FED236] ${
                        num <= state ? "text-[#FED236]" : "text-[#e8e8e8]"
                      }`}
                    >
                      <g clipPath="url(#clip0_870_38290)">
                        <path
                          d="M14.3938 1.17313C14.6188 0.4745 15.2688 0 16 0C16.7313 0 17.3813 0.4745 17.6063 1.17313L20.7313 11H30.3375C31.2563 11 32 11.7438 32 12.6625C32 13.1938 31.7438 13.6938 31.2563 14.0063L23.1625 19.8937L26.3375 30.325C26.5938 31.1625 25.9688 32 25.1 32C24.8125 32 24.5312 31.9063 24.3062 31.725L16 25.2687L7.69375 31.725C7.46875 31.9063 7.13125 32 6.9 32C6.02875 32 5.40625 31.1625 5.65938 30.325L8.8375 19.8937L0.68875 14.0063C0.25625 13.6938 0 13.1938 0 12.6625C0 11.7438 0.74375 11 1.66188 11H11.2688L14.3938 1.17313Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_870_38290">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>

        <div className="py-8 space-y-4 border-b dark:border-custom2_dark">
          <Text weight="semibold">{t("common.yourReview")}</Text>
          <textarea
            className=" w-full rounded-xl border border-[rgba(25,25,25,1)] p-4 dark:bg-custom2_dark dark:text-[rgba(255,255,255,0.5)] focus:outline-none"
            placeholder={t("common.yourReviewInputPlaceholder")}
            value={userReview}
            onChange={(e) => setUserReview(e.target.value)}
          ></textarea>
        </div>

        <div className="py-8 space-y-4">
          <Text weight="semibold">{t("common.photos")}</Text>
          <Stack alignItems="center" spacing={4} className="mb-4">
            {Object.entries(imagesToUpload).map(([src], key) => (
              <span className="relative" key={key}>
                <img
                  src={src}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-xl object-cover peer hover:filte hover:grayscale cursor-pointer"
                  onClick={() => removeImage(src)}
                />
                <TrashIcon
                  className="hidden peer-hover:block absolute top-[14px] left-[14px] text-white pointer-events-none"
                  width={28}
                  height={28}
                />
              </span>
            ))}
            {Object.entries(imagesToUpload)?.length > 2 ? (
              <></>
            ) : (
              <>
                <label
                  htmlFor="input-file"
                  className="inline-block rounded-full bg-primary_red_alt p-4 cursor-pointer !w-fit"
                >
                  <IconAdd width={24} height={24} className="inline" />
                  <span className="inline text-primary_red text-sm pl-1">
                    {t("common.photosUploadLimit")}
                  </span>
                </label>
                <input
                  id="input-file"
                  type="file"
                  className="hidden"
                  onChange={addImage}
                  accept="image/png, image/jpeg, image/jpg"
                  key={Object.entries(imagesToUpload)?.length}
                />
              </>
            )}
          </Stack>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-between border-t dark:border-custom2_dark items-center">
        <Button
          className="text-primary_red underline cursor-pointer px-0"
          onClick={clearAll}
        >
          {t("common.clearAll")}
        </Button>
        {error ? (
          <Text className="text-primary_red">{error?.message}</Text>
        ) : (
          <></>
        )}
        <Button
          variant="contained"
          className={clsxm(
            "place-self-end text-base",
            isValid && "bg-primary_red",
            (!isValid || isLoading) && "bg-black/25 cursor-default"
          )}
          size="lg"
          type="submit"
          disabled={!isValid || isLoading}
          onClick={submit}
        >
          {isLoading && <Spinner size={6} />}

          {t("common.submitReview")}
        </Button>
      </Modal.Footer>
    </Modal>
  );

  useEffect(() => {
    if (typeof document !== "undefined") {
      const portalRoot = document.getElementById("portal-form-write-a-review");
      if (portalRoot && isFormWriteAReviewShown) {
        createPortal(renderModal, portalRoot);
      }
    }
  }, [isFormWriteAReviewShown, renderModal]);

  return (
    <div data-cmp="form-write-a-review" className={className}>
      <Button
        variant="contained"
        size="lg"
        className={clsxm(
          "inline text-white max-md:w-full bg-primary_red max-sm:py-4",
          buttonClassName
        )}
        onClick={() => setFormWriteAReviewShown(true)}
      >
        {t("common.writeAReview")}
      </Button>
      {isFormWriteAReviewShown && renderModal}
    </div>
  );
};

export default FormWriteAReview;
