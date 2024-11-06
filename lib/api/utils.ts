import { cookies } from "next/headers";

export const getCurrentLocale = async () => {
  try {
    const cookieStore = await cookies();

    const locale = cookieStore.get("NEXT_LOCALE")?.value;
    if (!locale) {
      throw Error("Locale not found");
    }

    return locale;
  } catch (error) {
    console.log(error);
    throw Error("Error occured while getting current locale");
  }
};
