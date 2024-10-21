import {
  ISearchResultItem,
  PersonalizedSearchData,
} from "./search-result.interfaces";

export const searchResults = [
  {
    key: "spinach1",
    title: "Spinach Lasagna with Chicken & Mushrooms",
    media: "https://i.ibb.co/prDTq30/Image-3.png",
    rating: "3.9",
  },
  {
    key: "spinach2",
    title: "Spinach Lasagna with Chicken & Mushrooms",
    media: "https://i.ibb.co/prDTq30/Image-3.png",
    rating: "3.9",
  },
  {
    key: "spinach3",
    title: "Spinach Lasagna with Chicken & Mushrooms",
    media: "https://i.ibb.co/prDTq30/Image-3.png",
    rating: "3.9",
  },
];

export const recentSearches = [
  {
    key: "pasta_bolognese1",
    title: "Pasta Bolognese",
  },
  { key: "pasta_bolognese2", title: "Pasta Bolognese" },
];

export const trendingNows: ISearchResultItem[] = [
  {
    key: "pr_spinach1",
    title: "Spinach Lasagna with Chicken & Mushrooms",
    media: "https://i.ibb.co/prDTq30/Image-3.png",
    rating: "3.9",
    url: "#",
  },
  {
    key: "pr_spinach2",
    title: "Spinach Lasagna with Chicken & Mushrooms",
    media: "https://i.ibb.co/prDTq30/Image-3.png",
    rating: "3.9",
    url: "#",
  },
  {
    key: "pr_spinach3",
    title: "Spinach Lasagna with Chicken & Mushrooms",
    media: "https://i.ibb.co/prDTq30/Image-3.png",
    rating: "3.9",
    url: "#",
  },
];

export const popularCuisines = [
  {
    value: "italian",
    label: "Italian",
    imageUrl: "/src/assets/img/cuisine-italian.jpeg",
    url: "#",
  },
  {
    value: "egyptian",
    label: "Egyptian",
    imageUrl: "/src/assets/img/cuisine-egyptian.jpeg",
    url: "#",
  },
  {
    value: "turkish",
    label: "Turkish",
    imageUrl: "/src/assets/img/cuisine-turkish.jpeg",
    url: "#",
  },
  {
    value: "khaliji",
    label: "Khaliji",
    imageUrl: "/src/assets/img/cuisine-khaliji.jpeg",
    url: "#",
  },
  {
    value: "mexican",
    label: "Mexican",
    imageUrl: "/src/assets/img/cuisine-mexican.jpeg",
    url: "#",
  },
  {
    value: "american",
    label: "American",
    imageUrl: "/src/assets/img/cuisine-american.jpeg",
    url: "#",
  },
  {
    value: "mediterranean",
    label: "Mediterranean",
    imageUrl: "/src/assets/img/cuisine-mediterranean.jpeg",
    url: "#",
  },
  {
    value: "indian",
    label: "Indian",
    imageUrl: "/src/assets/img/cuisine-indian.jpeg",
    url: "#",
  },
];

export const personalizedSearchData: PersonalizedSearchData[] = [
  {
    key: "recentSearches",
    title: "Your Recent Search",
    hidden: false,
  },
  {
    key: "trendingNow",
    title: "Trending Now",
    webApiPath: "recipe/trendingnowitems?cultureCode=en-US",
    hidden: false,
  },
  {
    key: "popularCuisines",
    title: "Popular Cuisines",
    hidden: false,
  },
];
