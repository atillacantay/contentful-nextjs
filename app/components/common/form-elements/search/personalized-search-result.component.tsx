import Button from "@/components/common/button";
import Stack from "@/components/common/stack";
import Text from "@/components/common/typography/text";
import CloseIcon from "@/public/assets/icons/close.svg";
import SearchIcon from "@/public/assets/icons/search.svg";
import * as React from "react";
import SearchResultItem from "./search-result-item.component";
import { PersonalizedSearchData } from "./search-result.interfaces";
import * as Model from "./search.constants";

const PersonalizedSearchResult = ({
  personalizedSearchData,
  popularCuisines,
  recentSearches,
  trendingNows,
}: {
  personalizedSearchData: typeof Model.personalizedSearchData;
  popularCuisines: typeof Model.popularCuisines;
  recentSearches: ({
    remove: () => void;
    use: () => void;
  } & (typeof Model.recentSearches)[0])[];
  trendingNows: typeof Model.trendingNows;
}): JSX.Element => {
  const renderTopic = (
    key: PersonalizedSearchData["key"]
  ): JSX.Element | null => {
    switch (key) {
      case "recentSearches":
        return (
          <Stack direction="col">
            {recentSearches.length === 0 && (
              <hr className="dark:border-[#2d2d2d]" />
            )}
            {recentSearches?.map((recentSearch, key) => (
              <Stack
                key={key}
                justifyContent="between"
                className="py-4 border-b border-black/[.10]"
              >
                <Text
                  weight="medium"
                  size="md"
                  onClick={recentSearch.use}
                  className="cursor-pointer"
                >
                  {recentSearch.title}
                </Text>
                <Button.Icon
                  className="bg-transparent w-6 h-6"
                  onClick={recentSearch.remove}
                >
                  <CloseIcon className="w-6 h-6 text-primary_red" />
                </Button.Icon>
              </Stack>
            ))}
          </Stack>
        );
      case "trendingNow":
        return (
          <Stack direction="col" className="space-y-4">
            {trendingNows.length === 0 && (
              <hr className="dark:border-[#2d2d2d]" />
            )}
            {trendingNows?.map((trendingNow, key) => (
              <SearchResultItem
                {...trendingNow}
                key={key}
                url={trendingNow.url}
                trending
              />
            ))}
          </Stack>
        );
      case "popularCuisines":
        return (
          <div className="flex flex-row justify-between flex-wrap">
            {popularCuisines?.map(({ label, imageUrl, url = "#" }, key) => (
              <div
                key={key}
                data-label={label}
                style={
                  {
                    "--bg-imageUrl": `url(${imageUrl})`,
                  } as React.CSSProperties
                }
                onClick={() => (window.location.href = url)}
                className={`w-[48%] md:w-[24%] h-[130px] mb-2 shadow-[inset_0_0_0_2000px_rgba(0,0,0,0.4)] checked:shadow-[inset_0_0_0_2000px_rgba(255,0,0,0.35)] appearance-none cursor-pointer box-border rounded-2xl bg-slate-600 bg-[image:var(--bg-imageUrl)] bg-cover font-medium text-lg text-white after:content-[attr(data-label)] after:flex after:items-center after:justify-center after:h-full`}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Stack direction="col" className="p-4 md:p-8 space-y-8">
      {personalizedSearchData?.map(
        (data) =>
          data.hidden !== true && (
            <div key={data.key} className="space-y-4">
              <div className="flex">
                {data.key === "recentSearches" && (
                  <SearchIcon
                    width={24}
                    height={24}
                    className="ltr:mr-1 rtl:ml-1 dark:text-white"
                  />
                )}

                <Text weight="semibold" size="lg">
                  {data.title}
                </Text>
              </div>
              <Stack direction="col">{renderTopic(data.key)}</Stack>
            </div>
          )
      )}
    </Stack>
  );
};

export default PersonalizedSearchResult;
