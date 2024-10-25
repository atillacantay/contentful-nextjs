import dynamic from "next/dynamic";
import React from "react";

const Slider = dynamic(() =>
  import("@/components/cft-components/cft-slider").then(
    (module) => module.default
  )
);

const Section = dynamic(() =>
  import("@/components/cft-components/cft-section").then(
    (module) => module.default
  )
);

const ItemShowCase = dynamic(() =>
  import("@/components/cft-components/cft-item-showcase").then(
    (module) => module.default
  )
);

const FeaturedRecipe = dynamic(() =>
  import("@/components/cft-components/cft-featured-recipe").then(
    (module) => module.default
  )
);

const FeaturedArticle = dynamic(() =>
  import("@/components/cft-components/cft-featured-article").then(
    (module) => module.default
  )
);

const FeaturedMagazine = dynamic(() =>
  import("@/components/cft-components/cft-featured-magazine").then(
    (module) => module.default
  )
);

interface ComponentResolverProps {
  component: any;
}
const componentMap: Record<string, React.ComponentType<any>> = {
  slider: Slider,
  section: Section,
  itemshowcase: ItemShowCase,
  featuredrecipe: FeaturedRecipe,
  featuredarticle: FeaturedArticle,
  featuredmagazine: FeaturedMagazine,
};

const ComponentResolver: React.FC<ComponentResolverProps> = ({ component }) => {
  const ResolvedComponent = componentMap[component?.__typename?.toLowerCase()];
  if (!ResolvedComponent) {
    return null;
  }

  return (
    <ResolvedComponent id={component.sys.id} typename={component.__typename} />
  );
};

export default ComponentResolver;
