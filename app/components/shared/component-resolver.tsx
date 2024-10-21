import dynamic from "next/dynamic";
import React from "react";

const Slider = dynamic(
  () =>
    import("@/components/cft-components/cft-slider").then(
      (module) => module.default
    ),
  { ssr: false }
);
const ItemShowCase = dynamic(() =>
  import("@/components/cft-components/cft-item-showcase").then(
    (module) => module.default
  )
);

const FeaturedArticle = dynamic(() =>
  import("@/components/cft-components/cft-featured-article").then(
    (module) => module.default
  )
);

interface ComponentResolverProps {
  section: any;
}
const componentMap: Record<string, React.ComponentType<any>> = {
  slider: Slider,
  itemshowcase: ItemShowCase,
  featuredarticle: FeaturedArticle,
};

const ComponentResolver: React.FC<ComponentResolverProps> = ({ section }) => {
  const ResolvedComponent = componentMap[section?.__typename.toLowerCase()];
  if (!ResolvedComponent) {
    return null;
  }

  return (
    <ResolvedComponent id={section.sys.id} typename={section.__typename} />
  );
};

export default ComponentResolver;
