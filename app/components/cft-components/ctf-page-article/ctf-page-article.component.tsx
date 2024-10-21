import { PageArticle } from "lib/__generated/sdk";

interface CtfPageArticleProps {
  page: PageArticle;
}

const CtfPageArticle = ({ page }: CtfPageArticleProps) => {
  console.log(page);
  return <>article details</>;
};

export default CtfPageArticle;
