// Purpose: Configuration for GraphQL Code Generator
import { CodegenConfig } from "@graphql-codegen/cli";

const endpointOverride = process.env.CONTENTFUL_GRAPHQL_ENDPOINT;
const productionEndpoint = "https://graphql.contentful.com/content/v1/spaces";
export const endpoint = `${endpointOverride || productionEndpoint}/${
  process.env.CONTENTFUL_SPACE_ID
}`;

export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  documents: "lib/graphql/**/*.graphql",
  schema: [
    {
      [endpoint || ""]: {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
        },
      },
    },
  ],
  generates: {
    "lib/__generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "lib/__generated/graphql.schema.graphql": {
      plugins: ["schema-ast"],
    },
    "lib/__generated/sdk.ts": {
      documents: ["lib/graphql/**/*.graphql"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        rawRequest: false,
        inlineFragmentTypes: "combine",
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
        maybeValue: "T",
      },
    },
  },
};

export default config;
