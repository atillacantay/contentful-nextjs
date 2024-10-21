export const mapLocaleToContentfulLocale = (locale: string): string => {
  switch (locale) {
    case "en":
      return "en-US";
    case "ar":
      return "ar-SA";
    default:
      return "en-US"; // Default to English if locale is not recognized
  }
};
