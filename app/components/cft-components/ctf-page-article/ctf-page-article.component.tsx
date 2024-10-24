import { PageArticle } from "lib/__generated/sdk";
import ArticlesMagazines from "./articles-magazines.component";

interface CtfPageArticleProps {
  page: PageArticle;
}

const CtfPageArticle = ({ page }: CtfPageArticleProps) => {
  return <ArticlesMagazines articleOfDay={page} />;
};

export default CtfPageArticle;
