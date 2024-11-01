import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

async function Markdown({ body }: { body?: Document | string }) {
  if (!body) return;

  if (typeof body === "string") {
    body = await richTextFromMarkdown(body);
  }

  return <>{documentToReactComponents(body)}</>;
}

export default Markdown;
