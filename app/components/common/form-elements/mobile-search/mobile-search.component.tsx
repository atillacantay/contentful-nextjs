import CategoryTag from "@/components/category-tags";
import Button from "@/components/common/button";
import Modal from "@/components/common/modal";
import Stack from "@/components/common/stack";
import ChevronLeftIcon from "@/public/assets/icons/chevron-left.svg";
import ChevronRightIcon from "@/public/assets/icons/chevron-right.svg";
import SearchIcon from "@/public/assets/icons/search.svg";

import PersonalizedSearchResult from "../search/personalized-search-result.component";
import SearchResult from "../search/search-result.component";

interface IMobileSearch extends React.InputHTMLAttributes<HTMLInputElement> {
  active: boolean;
  onActive: () => void;
  term: string;
  onTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  searchResults: React.ComponentProps<typeof SearchResult>["searchResults"];
  categoryTags: React.ComponentProps<typeof CategoryTag>;
  personalizedSearchResult: React.ComponentProps<
    typeof PersonalizedSearchResult
  >;
}

const MobileSearch = ({
  active,
  onActive,
  term,
  onTermChange,
  placeholder,
  searchResults,
  categoryTags,
  personalizedSearchResult,
  ...props
}: IMobileSearch): JSX.Element => {
  return active ? (
    <Modal show={active} onClose={onActive} align="left">
      <Modal.Header className="w-full">
        <Stack
          className="w-full space-x-2 rtl:space-x-reverse md:pt-14 px-2 pt-6 pb-4"
          alignItems="center"
        >
          <Button.Icon onClick={onActive} className="dark:bg-transparent">
            <ChevronLeftIcon className="w-6 h-6 rtl:hidden dark:text-white" />
            <ChevronRightIcon className="w-6 h-6 ltr:hidden dark:text-white" />
          </Button.Icon>
          <input
            type="search"
            placeholder={placeholder}
            className="dark:text-white w-full outline-0 py-3 px-6 rounded-full bg-neutral-100  dark:bg-[rgba(255,255,255,0.08)]"
            onChange={onTermChange}
            value={term}
          />
        </Stack>
      </Modal.Header>
      <Modal.Body noDefaultPadding className="min-h-[100vh]">
        <CategoryTag className="pb-2 pl-8" {...categoryTags} />
        <div className="bg-neutral-100 dark:bg-goki_dark">
          <Stack className="h-full overflow-auto" direction="col">
            {term && <SearchResult searchResults={searchResults} />}
            {!term && (
              <PersonalizedSearchResult {...personalizedSearchResult} />
            )}
          </Stack>
        </div>
      </Modal.Body>
    </Modal>
  ) : (
    <Stack className="flex md:hidden md:relative" onClick={onActive}>
      <input
        type="search"
        className="hidden outline-0 md:block cursor-pointer h-[3.875rem] px-5 w-full rounded-full border border-custom1 shadow-custom_shadow_1  dark:bg-[rgba(255,255,255,0.08)]"
        {...props}
      />
      <Button.Icon className="md:absolute right-2 top-3 bg-primary_red w-12 h-12">
        <SearchIcon fill="white" className="w-6 h-6" />
      </Button.Icon>
    </Stack>
  );
};

export default MobileSearch;
