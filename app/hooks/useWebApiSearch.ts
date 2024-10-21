import { useCallback, useEffect, useMemo, useState } from "react";
import useWebApi from "./useWebApi";

export const debounce = <T>(
  callback: (...args: never[]) => void,
  wait: number,
  immediateCallback: (...args: never[]) => void
): T => {
  let timeoutId: number | undefined = undefined;
  return ((...args: never[]) => {
    immediateCallback();
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  }) as T;
};

type ResponseType = {
  searchRequest?: {
    page: {
      current: number;
      pageSize: number;
    };
    searchText: string;
    categoryNodeId: number;
  };
  current?: number;
  pageSize?: number;
  totalResults: number;
  dictionary?: {
    "custom.CreateNewCollection": string;
  };
  result: {
    score: number;
    item: {
      authorFullname: string;
      authorImage: string;
      authorName: string;
      backgroundImage: string;
      category: string;
      cookingTime: string;
      description: string;
      difficulty: string;
      documentCulture: string;
      documentTags: string;
      favoritesNumberText: string;
      followersNumberText: string;
      followingsNumberText: string;
      fullName: string;
      guid: string;
      image: string;
      images: string[];
      inCurrentUserCollection: boolean;
      ingredientID: number;
      isFollowed: false;
      isGoodyKitchenRecipe: boolean;
      isOwner: boolean;
      isPasta: boolean;
      label: string;
      mealType: string;
      name: string;
      nodeAlias: string;
      nodeGuid: string;
      nodeId: number;
      nodeOrder: number;
      nodeParentId: number;
      numberOfVideos: number;
      picture: string;
      productIsNew: false;
      productNetWeight: number;
      productNetWeightWithUnit: string;
      productQrCode: number;
      productUnit: string;
      rating: number;
      submittedRecipesNumberText: string;
      title: string;
      url: string;
      userId: number;
    };
    searchCategoryType: string;
  }[];
};

const useWebApiSearch = (resultAddingType: "replace" | "add" = "add") => {
  const { data, error, isLoading, post, setIsLoading } = useWebApi<
    ResponseType
  >({
    result: [],
    totalResults: 0,
  });

  const [results, setResults] = useState<ResponseType["result"]>([]);

  useEffect(() => {
    setResults([
      ...(resultAddingType === "add" && results?.length ? results : []),
      ...(data.result || []),
    ]);
  }, [data]);

  const search = (
    path: string,
    searchText: string,
    params = {
      currentPage: 1,
      pageSize: 3,
      mealType: undefined,
    } as {
      currentPage: number;
      pageSize: number;
      mealType?: string;
    },
    callback?: () => void
  ) => {
    return post(path, {
      page: { current: params.currentPage, pageSize: params.pageSize },
      searchText,
      mealType: params.mealType,
    }).finally(callback);
  };

  return {
    search: useCallback(
      debounce<typeof search>(search, 500, () => setIsLoading(true)),
      []
    ),
    plainSearch: useCallback(search, [post]),
    results,
    totalCount: useMemo(() => data?.totalResults, [data]),
    currentPage: useMemo(() => data?.current, [data]),
    error,
    isLoading,
  };
};

export default useWebApiSearch;
