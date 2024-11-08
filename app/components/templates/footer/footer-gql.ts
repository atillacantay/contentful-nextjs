import type { Query } from "lib/__generated/sdk";
import { client } from "lib/graphql";
import { draftMode } from "next/headers";

export async function getFooterData(locale: string) {
  const { isEnabled } = await draftMode();
  const footerQuery = await client.footer({
    locale: locale,
    preview: isEnabled,
  });
  return extractFooter(footerQuery as Query);
}

function extractFooter(footerQuery: Query) {
  return footerQuery?.footerCollection?.items?.[0];
}
