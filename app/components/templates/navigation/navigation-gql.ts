import type { Query } from "lib/__generated/sdk";
import { client } from "lib/client";
import { draftMode } from "next/headers";

export async function getMainNavigationData(locale: string) {
  const { isEnabled } = await draftMode();
  const mainNavigationQuery = await client.mainNavigation({
    locale: locale,
    preview: isEnabled,
  });
  return extractHeaderNav(mainNavigationQuery as Query);
}

function extractHeaderNav(mainNavigationQuery: Query) {
  return mainNavigationQuery?.mainNavigationCollection?.items?.[0];
}
