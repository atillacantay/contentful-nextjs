import { PageArticle } from "lib/__generated/sdk";
import ArticlePage from "./article-page.component";

interface CtfPageArticleProps {
  page: PageArticle;
}

const CtfPageArticle = ({ page }: CtfPageArticleProps) => {
  return <ArticlePage />;
};

export default CtfPageArticle;
