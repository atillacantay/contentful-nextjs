import ArticleOfDay from "@/components/article-of-day";
import { FeaturedArticle } from "lib/__generated/sdk";
import Section from "../../section";

const CtfFeaturedArticle = (featuredArticle: FeaturedArticle) => {
  return (
    <Section
      sectionTitle={{
        title: featuredArticle.title || "",
        btnTitle: featuredArticle.buttonText,
        btnLink: featuredArticle.buttonLink,
      }}
      className="container mx-auto max-sm:px-4 pt-6 pb-14"
    >
      <ArticleOfDay {...featuredArticle.article} />
    </Section>
  );
};

export default CtfFeaturedArticle;
