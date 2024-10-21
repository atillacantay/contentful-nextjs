import { ArgsFormWriteAReview } from "@/components/form-write-a-review/form-write-a-review.interfaces";
import useWebApi from "./useWebApi";

const useReviews = () => {
  const { data, error, isLoading, post } = useWebApi<unknown>(null);

  const add = async (
    data: {
      authorId: number;
      content: string;
      parentId: number;
      relatedId: number;
      relatedObjectType: string;
      ratingOverall: number;
      ratingIngredients: number;
      ratingAccuracy: number;
      ratingDifficulty: number;
      ratingTaste: number;
      images: File[];
    },
    cultureCode: ArgsFormWriteAReview["apiData"]["cultureCode"]
  ) =>
    await post(
      "comment/add?cultureCode=" + cultureCode,
      data,
      undefined,
      undefined,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

  return {
    data,
    error,
    isLoading,
    add,
  };
};

export default useReviews;
