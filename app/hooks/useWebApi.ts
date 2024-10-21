import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useCallback, useState } from "react";

// const axios = {
//   post: (data, { page: { current, pageSize }, searchText }) =>
//     Promise.resolve({
//       data: {
//         searchRequest: {
//           page: {
//             current: 1,
//             pageSize: 12,
//           },
//           searchText: "cake",
//           categoryNodeId: 0,
//         },
//         current: current,
//         pageSize: 12,
//         totalResults: 23,
//         dictionary: {
//           "custom.CreateNewCollection": "Create New Collection",
//         },
//         result: Array(10)
//           .fill({
//             score: 0.819441186170567,
//             item: {
//               name: current + "Watermelon cake",
//               image: "/src/assets/img/avatar.jpg",
//               description:
//                 "A must try recipe &quot;Watermelon cake&quot; a masterpiece unmatched and would be perfect with cream",
//               mealType: "Desserts",
//               difficulty: "Beginner",
//               cookingTime: "50min",
//               documentTags: "cake, Watermelon",
//               url: "/en/recipes/desserts/watermelon-cake",
//               guid: "2cdc1ec1-4dab-46cc-a81e-2908187473b9",
//               nodeOrder: 10,
//               favoritesNumberText: "0",
//               isGoodyKitchenRecipe: true,
//               authorFullname: current + "Goody Kitchen",
//               authorImage: "/src/assets/img/avatar.jpg",
//               isOwner: false,
//               inCurrentUserCollection: false,
//               category: "desserts",
//               isPasta: false,
//               rating: 0,
//             },
//             searchCategoryType: "recipe",
//           })
//           .splice(0, Math.min(23 - pageSize * (current - 1), 10)),
//       },
//     }),
// };

const useWebApi = <T>(initialValue: T) => {
  const [data, setData] = useState<T>(initialValue);
  const [requestCounter, setRequestCounter] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const post = async (
    path: string,
    data?: any,
    field?: string,
    onSuccess?: (result: AxiosResponse<any, any>) => void,
    headers?: AxiosRequestConfig<any>
  ) => {
    setIsLoading(true);
    setRequestCounter((x) => x + 1);
    const api = () =>
      headers
        ? axios.post("/webapi/" + path, data, headers)
        : axios.post("/webapi/" + path, data);
    return api()
      .then((result) => {
        setData(field ? result.data[field] : result.data);
        onSuccess?.(result);
      })
      .catch((error) => {
        setError(error as Error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const put = async (path: string, data?: any, field?: string) => {
    setIsLoading(true);
    setRequestCounter((x) => x + 1);
    axios
      .put("/webapi/" + path, data)
      .then((result) => {
        setData(field ? result.data[field] : result.data);
      })
      .catch((error) => {
        setError(error as Error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const get = async (
    path: string,
    field?: string,
    onSuccess?: (result: AxiosResponse<any, any>) => void
  ) => {
    setIsLoading(true);
    setRequestCounter((x) => x + 1);

    axios
      .get("/webapi/" + path)
      .then((result) => {
        setData(field ? result.data[field] : result.data);
        onSuccess?.(result);
      })
      .catch((error) => {
        setError(error as Error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteApi = async (
    path: string,
    { onSuccess }: { onSuccess?: (result: AxiosResponse<any, any>) => void }
  ) => {
    setIsLoading(true);
    setRequestCounter((x) => x + 1);
    axios
      .delete("/webapi/" + path)
      .then((result) => {
        onSuccess?.(result);
      })
      .catch((error) => {
        setError(error as Error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateDataDirectly = useCallback((updatedData: Partial<T>) => {
    setData((prev) => ({ ...prev, ...updatedData }));
  }, []);

  return {
    requestCounter,
    data,
    error,
    isLoading,
    post,
    put,
    get,
    deleteApi,
    setIsLoading,
    updateDataDirectly,
  };
};

export default useWebApi;
