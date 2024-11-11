import { SysLink } from "contentful-management";

export const createLinkObject = (
  id?: string,
  linkType = "Entry"
): Record<string, SysLink> => ({
  "en-US": {
    sys: {
      type: "Link",
      linkType: linkType,
      id: `${id}`,
    },
  },
});
