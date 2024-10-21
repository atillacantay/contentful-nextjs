import type { Query } from "lib/__generated/sdk";
import { client } from "lib/client";
import { draftMode } from "next/headers";

export async function getHeaderData(locale: string) {
  const { isEnabled } = draftMode();
  const headerQueryResult = await client.header({
    locale: locale,
    preview: isEnabled,
  });

  return extractHeaderData(headerQueryResult as Query);
}

function extractHeaderData(fetchResponse: Query) {
  return fetchResponse?.headerCollection?.items?.[0];
}
