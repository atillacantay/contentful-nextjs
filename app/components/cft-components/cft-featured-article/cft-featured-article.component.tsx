import ArticleOfDay from "@/components/article-of-day";
import { FeaturedArticle } from "lib/__generated/sdk";

const CtfFeaturedArticle = (featuredArticle: FeaturedArticle) => {
  return <ArticleOfDay {...featuredArticle.article} />;
};

export default CtfFeaturedArticle;
