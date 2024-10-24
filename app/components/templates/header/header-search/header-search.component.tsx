"use client";

import Button from "@/components/common/button";
import MobileSearch from "@/components/common/form-elements/mobile-search";
import DesktopSearch from "@/components/common/form-elements/search";
import type PersonalizedSearchResult from "@/components/common/form-elements/search/personalized-search-result.component";
import HOConClickOutside from "@/hocs/HOConClickOutside";
import useWebApi from "@/hooks/useWebApi";
import useWebApiSearch from "@/hooks/useWebApiSearch";
import useWindowSize from "@/hooks/useWindowSize";
import SearchIcon from "@/public/assets/icons/search.svg";
import { EventKeys, pushEventToDataLayer } from "@/utils/event-utils";
import { clsxm } from "@/utils/twMerge.utils";
import { extractCategoryFromUrl } from "@/utils/url.utils";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getLangDir } from "rtl-detect";

const HeaderSearch = ({
  wrapperDivProps = {},
  desktopSearchInputProps,
  mobileSearchProps,
  filterSettings,
  personalizedSearchResult,
  searchPagePath,
}: {
  wrapperDivProps?: React.ComponentProps<"div">;
  desktopSearchInputProps: {
    searchButtonLabel?: string;
  } & React.ComponentProps<"input">;
  mobileSearchProps: Pick<
    React.ComponentProps<typeof MobileSearch>,
    "placeholder"
  >;
  filterSettings: ({
    searchCategoryType?:
      | "article"
      | "recipe"
      | "masterclass"
      | "product"
      | "all"
      | "foodys";
    webApiPath: string;
    resultMap: Partial<
      Record<
        | "title"
        | "media"
        | "rating"
        | "url"
        | "author"
        | "authorImage"
        | "description"
        | "authorImage"
        | "lessons"
        | "label"
        | "followers",
        keyof ReturnType<typeof useWebApiSearch>["results"][0]["item"]
      >
    >;
  } & React.ComponentProps<typeof MobileSearch>["categoryTags"]["tags"][0])[];
  personalizedSearchResult: Pick<
    React.ComponentProps<typeof PersonalizedSearchResult>,
    "personalizedSearchData" | "popularCuisines"
  >;
  searchPagePath: string;
}) => {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const windowSize = useWindowSize();
  const direction = getLangDir(locale);

  const [isModalShown, setModalShown] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams?.get("searchText") || ""
  );
  const [searchFilter, setSearchFilter] = useState<string>(() => {
    const paramSearchFilter = searchParams?.get("searchFilter") || "";
    if (paramSearchFilter) return paramSearchFilter;

    const index = filterSettings
      .map(({ selected, hidden }) => !hidden && selected)
      .indexOf(true);

    const nonHiddenIndex = filterSettings
      .map(({ hidden }) => !hidden)
      .indexOf(true);

    return index ? index?.toString() : nonHiddenIndex?.toString();
  });
  const [lastScrollPositioon, setLastScrollPositioon] = useState<number>(0);
  const desktopSearchInputRef = useRef<HTMLInputElement>(null);
  const webApiSearch = useWebApiSearch("replace");
  //   {
  //   useCache: false,
  //   useDebounce: true,
  // }

  const handleSearchEvent = (
    searchTerm: string,
    searchFilter: string,
    searchResults: any[]
  ) => {
    const searchCategory = extractCategoryFromUrl(
      filterSettings[parseInt(searchFilter)].webApiPath
    );

    pushEventToDataLayer(EventKeys.SEARCH_INITIATED, {
      search_keyword: searchTerm,
      search_category: searchCategory,
      search_result_shown: searchResults.length > 0,
    });
  };

  const saveToPreviousSearchTerms = (searchTerm: string) => {
    if (!searchTerm) return;
    try {
      const previousSearchTerms: string[] = JSON.parse(
        sessionStorage.getItem("goki-search") || "[]"
      );
      previousSearchTerms.splice(2, previousSearchTerms.length);
      previousSearchTerms.unshift(searchTerm);
      sessionStorage.setItem(
        "goki-search",
        JSON.stringify(previousSearchTerms)
      );
    } catch (e) {
      sessionStorage.setItem("goki-search", JSON.stringify([]));
    }
  };

  const onTermChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
    e.target.value &&
      webApiSearch.search(
        filterSettings[parseInt(searchFilter)].webApiPath,
        e.target.value,
        undefined,
        () => {
          saveToPreviousSearchTerms(e.target.value);
          handleSearchEvent(e.target.value, searchFilter, webApiSearch.results);
        }
      );
  };
  const onSearchFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSearchFilter(e.target.value);
    searchTerm &&
      webApiSearch.search(
        filterSettings[parseInt(e.target.value)].webApiPath,
        searchTerm,
        undefined,
        () =>
          handleSearchEvent(searchTerm, e.target.value, webApiSearch.results)
      );
  };

  const isRTL = direction === "rtl";

  const calcSearchModalPosition = () => ({
    width: `${desktopSearchInputRef.current?.clientWidth}px`,
    zIndex: isMobile ? 35 : 29,
    position: "absolute" as React.CSSProperties["position"],
    ...(isRTL
      ? {
          marginRight: `${
            window.innerWidth -
            (desktopSearchInputRef.current?.getBoundingClientRect().right ||
              window.innerWidth)
          }px`,
        }
      : {
          marginLeft: `${
            desktopSearchInputRef.current?.getBoundingClientRect().left
          }px`,
        }),
  });
  const [fixSearchModalPosition, setFixSearchModalPosition] =
    useState<React.CSSProperties | null>(null);

  useLayoutEffect(() => {
    setFixSearchModalPosition(calcSearchModalPosition());
  }, [isModalShown, windowSize.width]);

  useLayoutEffect(() => {
    if (isModalShown) {
      setLastScrollPositioon(window.scrollY);
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      window.scrollTo({ top: lastScrollPositioon, behavior: "instant" });
    }
  }, [isModalShown, lastScrollPositioon]);

  const searchResults = useMemo(() => {
    try {
      return webApiSearch.results
        ?.map((result) => {
          const resultMap = filterSettings[parseInt(searchFilter)].resultMap;
          return {
            title: result.item[resultMap.title!] as string,
            media: result.item[resultMap.media!] as string,
            rating: result.item[resultMap.rating!] as string,
            url: result.item[resultMap.url!] as string,
            trending: false,
          };
        })
        .splice(0, 3);
    } catch (e) {
      return [];
    }
  }, [webApiSearch.results, searchFilter]);

  const isMobile = useMemo(() => {
    return (windowSize.width || 0) < 768;
  }, [windowSize.width]);

  const {
    requestCounter: reqTrendingRecipesSent,
    data: rawTrendingNows,
    get: getTrendingRecipes,
  } = useWebApi<
    {
      url: string;
      title: string;
      rating: number;
      thumbnailImage: string;
    }[]
  >([]);

  const trendingNows = useMemo(() => {
    try {
      return rawTrendingNows?.map((item, key) => ({
        key: key?.toString(),
        title: item.title,
        media: item.thumbnailImage,
        rating: item.rating?.toString(),
        url: item.url,
      }));
    } catch (e) {
      return [];
    }
  }, [rawTrendingNows]);

  const filterCategories = useMemo(() => {
    return filterSettings.map((filter, index) => ({
      ...filter,
      selected: searchFilter === index.toString(),
    }));
  }, [filterSettings, searchFilter]);

  useEffect(() => {
    if (isModalShown) {
      reqTrendingRecipesSent === 0 &&
        getTrendingRecipes(
          personalizedSearchResult.personalizedSearchData.find(
            ({ key }) => key === "trendingNow"
          )?.webApiPath as string
        );
    }
  }, [isModalShown]);

  const removePreviousSearchTerm = (key: number) => {
    const previousSearchTerms: string[] = JSON.parse(
      sessionStorage.getItem("goki-search") || "[]"
    );

    previousSearchTerms.splice(key, 1);
    sessionStorage.setItem("goki-search", JSON.stringify(previousSearchTerms));
    return previousSearchTerms;
  };

  const [recentSearches, setRecentSearches] = useState<
    {
      key: string;
      title: string;
      remove: () => void;
      use: () => void;
    }[]
  >([]);

  useEffect(() => {
    try {
      const previousSearchTerms: string[] = JSON.parse(
        sessionStorage.getItem("goki-search") || "[]"
      );

      const mapFn = (title: string, key: number) => ({
        key: key.toString(),
        title,
        remove: () => {
          const mutated = removePreviousSearchTerm(key);

          setRecentSearches(mutated.map(mapFn));
        },
        use: () =>
          onTermChange({
            target: {
              value: title,
            },
          } as React.ChangeEvent<HTMLInputElement>),
      });

      setRecentSearches(previousSearchTerms.map(mapFn));
    } catch (e) {
      sessionStorage.setItem("goki-search", JSON.stringify([]));
    }
  }, [isModalShown, searchFilter]);

  return (
    <>
      <div {...wrapperDivProps}>
        <form
          method="GET"
          action={window?.location.origin + searchPagePath}
          className="flex relative"
          onClick={() => setModalShown(true)}
        >
          <div ref={desktopSearchInputRef} className="flex w-full">
            {!isMobile && isModalShown && (
              <select
                id="search-select"
                className="p-4 
                  ltr:pl-6 rtl:pr-6 border 
                  ltr:rounded-l-full rtl:rounded-r-full  
                  border-custom1 shadow-custom_shadow_1 
                  ltr:border-r rtl:border-l 
                  ltr:border-r-black/10 rtl:border-l-black/10 
                  bg-[rgba(255,255,255,0.08)]
                  dark:text-white
                  dark:[&_option]:!text-gray-700/50
                  dark:[&_option]:hover:!text-gray-700/50
                  "
                onChange={onSearchFilterChange}
                defaultValue={searchFilter}
                name="searchFilter"
              >
                {filterCategories.map(
                  ({ label, hidden }, index) =>
                    !hidden && (
                      <option
                        className="font-medium text-gray-700/50"
                        value={index}
                        key={index}
                      >
                        {label}
                      </option>
                    )
                )}
              </select>
            )}
            <input
              {...(() => {
                const temp = { ...desktopSearchInputProps };
                delete temp.searchButtonLabel;
                return { ...temp };
              })()}
              className={clsxm(
                "dark:text-white outline-0 cursor-pointer h-[3.875rem] ltr:px-5 w-full border-custom1 shadow-custom_shadow_1 bg-[rgba(255,255,255,0.08)]  dark:placeholder:text-[rgba(255,255,255,0.5)]",
                desktopSearchInputProps.className,
                isModalShown
                  ? "rtl:px-5 ltr:border-r rtl:border-l border-t border-b ltr:rounded-r-full rtl:rounded-l-full"
                  : "border rounded-full rtl:px-16"
              )}
              placeholder={
                isMobile
                  ? mobileSearchProps?.placeholder ||
                    desktopSearchInputProps?.placeholder
                  : desktopSearchInputProps?.placeholder
              }
              onChange={onTermChange}
              value={searchTerm}
              name="searchText"
            />
          </div>
          {isModalShown ? (
            <Button
              startIcon={<SearchIcon fill="white" className="w-6 h-6" />}
              className="bg-primary_red ltr:ml-4 rtl:mr-4"
              color="white"
              size="lg"
              type="submit"
            >
              {desktopSearchInputProps.searchButtonLabel}
            </Button>
          ) : (
            <Button.Icon
              className="max-md:hidden absolute right-2 top-3 bg-primary_red w-10 h-10 text-white"
              aria-label="search"
            >
              <SearchIcon fill="white" className="w-6 h-6" />
            </Button.Icon>
          )}
        </form>
      </div>
      {isModalShown &&
        createPortal(
          <>
            <div className="before:content-[''] before:opacity-0 before:bg-custom_divider3 before:fixed before:w-full before:h-full before:top-0 before:left-0 before:opacity-100 before:z-[15]" />
            {fixSearchModalPosition &&
              (isMobile ? (
                <MobileSearch
                  searchResults={searchResults}
                  term={searchTerm}
                  onTermChange={onTermChange}
                  active={true}
                  onActive={() => {
                    setModalShown(false);
                    setSearchTerm("");
                  }}
                  {...mobileSearchProps}
                  categoryTags={{
                    tags: filterCategories,
                    onTagSelected: (index) =>
                      onSearchFilterChange({
                        target: { value: index?.toString() as string },
                      } as React.ChangeEvent<HTMLSelectElement>),
                  }}
                  personalizedSearchResult={{
                    ...personalizedSearchResult,
                    trendingNows,
                    recentSearches,
                  }}
                />
              ) : (
                <HOConClickOutside
                  on={() => {
                    setModalShown(false);
                    setSearchTerm("");
                  }}
                  excluded={() => [
                    document.querySelector('[data-cmp="layout-header"]'),
                  ]}
                >
                  <div style={fixSearchModalPosition as React.CSSProperties}>
                    <DesktopSearch
                      term={searchTerm}
                      searchResults={searchResults}
                      personalizedSearchResult={{
                        ...personalizedSearchResult,
                        trendingNows,
                        recentSearches,
                      }}
                    />
                  </div>
                </HOConClickOutside>
              ))}
          </>,
          document.querySelector("#layout-header-after") as Element
        )}
    </>
  );
};

export default HeaderSearch;
