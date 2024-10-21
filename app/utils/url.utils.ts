/**
 * Parses the current URL's search parameters into an object.
 * @returns An object containing all search parameters.
 */
export const getSearchParams = (): Record<string, string> => {
  const urlParams = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};

  urlParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
};

export const extractLanguageFromUrl = (url: string): string | null => {
  const parts = url.split("/");
  return parts.length > 1 ? parts[1] : null;
};

export const extractCategoryFromUrl = (url: string): string | null => {
  const parts = url.split("/");
  return parts.length > 1 ? parts[1].split("?")[0] : null;
};
