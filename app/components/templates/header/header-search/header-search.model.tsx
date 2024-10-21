import * as modelPersonalizedSearchResult from "@/components/common/form-elements/search/search.constants";
import type HeaderSearch from "./header-search.component";

export const ModelHeaderSearch: React.ComponentProps<typeof HeaderSearch> = {
  searchPagePath: "/search-results",
  desktopSearchInputProps: {
    searchButtonLabel: "Search",
    placeholder: "Find Recipes, products, foodies, masterclasses and more...",
  },
  mobileSearchProps: {
    placeholder: "Find Recipes, products, foodies, masterclasses and more...",
  },
  filterSettings: [
    {
      webApiPath: "",
      label: "All",
      hidden: true,
      resultMap: {
        title: "name",
        media: "image",
        rating: "favoritesNumberText",
        url: "url",
      },
    },
    {
      webApiPath: "search/recipes?cultureCode=en-US",
      icon: "recipe",
      label: "Recipes",
      selected: true,
      searchCategoryType: "recipe",
      resultMap: {
        title: "name",
        media: "image",
        rating: "rating",
        description: "authorFullname",
        authorImage: "authorImage",
        url: "url",
      },
    },
    {
      webApiPath: "search/masterclass?cultureCode=en-US",
      icon: "masterclass",
      label: "Masterclass",
      searchCategoryType: "masterclass",
      resultMap: {
        title: "title",
        media: "image",
        url: "url",
        lessons: "numberOfVideos",
        description: "authorName",
        label: "label",
      },
    },
    {
      webApiPath: "search/foodys?cultureCode=en-US",
      icon: "foodies",
      label: "Foodie",
      searchCategoryType: "foodys",
      resultMap: {
        title: "fullName",
        media: "picture",
        url: "url",
        followers: "followersNumberText",
      },
    },
    {
      webApiPath: "search/product?cultureCode=en-US",
      icon: "product",
      label: "Product",
      searchCategoryType: "product",
      resultMap: {
        title: "name",
        media: "image",
        rating: "favoritesNumberText",
        description: "productNetWeightWithUnit",
        url: "url",
      },
    },
  ],
  personalizedSearchResult: {
    personalizedSearchData: [],
    popularCuisines: modelPersonalizedSearchResult.popularCuisines,
  },
};
