import Stack from "@/components/common/stack";
import * as React from "react";
import SearchResultItem from "./search-result-item.component";

const SearchResult = ({
  searchResults,
}: {
  searchResults: React.ComponentProps<typeof SearchResultItem>[];
}): JSX.Element => {
  return (
    <Stack direction="col" className="p-4 md:p-8 space-y-4">
      {searchResults.map((data, key) => (
        <SearchResultItem {...data} key={key} />
      ))}
    </Stack>
  );
};

export default SearchResult;
