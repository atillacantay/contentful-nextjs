import type { PageArticle } from "lib/__generated/sdk";
import ArticlePage from "./article-details";

interface CtfPageArticleProps {
  page: PageArticle;
}

const CtfPageArticle = ({ page }: CtfPageArticleProps) => {
  return <ArticlePage article={page} />;
};

export default CtfPageArticle;
