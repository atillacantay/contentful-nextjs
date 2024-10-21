export interface ISearchResultItem {
  key: string;
  title: string;
  media: string;
  rating: string;
  url?: string;
}

export interface PersonalizedSearchData {
  key: 'recentSearches' | 'trendingNow' | 'popularCuisines';
  title: string;
  hidden?: boolean,
  webApiPath?: string;
}
