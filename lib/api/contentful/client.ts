import { createClient } from "contentful-management";
import { contentful } from "contentful.config";

export const client = createClient(
  {
    accessToken: contentful.cma_token,
  },
  {
    type: "plain",
    defaults: {
      spaceId: contentful.space_id,
      environmentId: "master",
    },
  }
);
