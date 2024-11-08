import { GraphQLClient } from "graphql-request";

import { endpoint } from "codegen";
import { getSdk } from "lib/__generated/sdk";

const graphQlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
  },
});

export const client = getSdk(graphQlClient);
