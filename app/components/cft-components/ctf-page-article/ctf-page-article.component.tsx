import { PageArticle } from "lib/__generated/sdk";
import { ArticlesMagazines } from "./articles-magazines";

interface CtfPageArticleProps {
  page: PageArticle;
}

const CtfPageArticle = ({ page }: CtfPageArticleProps) => {
  return <ArticlesMagazines articleOfDay={page} />;
};

export default CtfPageArticle;
