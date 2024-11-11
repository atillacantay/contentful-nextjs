import { SysLink } from "contentful-management";

export const createMultipleLinkObject = (
  ids: string[],
  linkType = "Entry"
): Record<string, SysLink[]> => ({
  "en-US": ids.map((id) => ({
    sys: {
      type: "Link",
      linkType: linkType,
      id,
    },
  })),
});
