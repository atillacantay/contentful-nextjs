import Stack from "@/components/common/stack";
import * as React from "react";
import PersonalizedSearchResult from "./personalized-search-result.component";
import SearchResult from "./search-result.component";

interface ISearch extends React.InputHTMLAttributes<HTMLInputElement> {
  term: string;
  searchResults: React.ComponentProps<typeof SearchResult>["searchResults"];
  personalizedSearchResult: React.ComponentProps<typeof PersonalizedSearchResult>;
}

const Search = ({
  term,
  searchResults,
  personalizedSearchResult
}: ISearch): JSX.Element => {
  return (
    <>
      <Stack id="search-active" className="hidden md:flex">
        <Stack className="relative w-full dark:text-[rgba(255,255,255,0.5)]">
          <div className="absolute top-5 z-20 space-y-8 w-full">
            <div
              className="relative flex flex-col h-full"
            >
              {term && (
                <div className="bg-white dark:bg-goki_dark rounded-2xl mb-4 ">
                  <SearchResult searchResults={searchResults} />
                </div>
              )}

              <div className={`visible bg-white dark:bg-goki_dark rounded-2xl`}>
                <PersonalizedSearchResult {...personalizedSearchResult} />
              </div>
            </div>
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default Search;
