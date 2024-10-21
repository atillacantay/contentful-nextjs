"use client";

import contentfulConfig from "contentful.config";
// import i18nConfig from "next-i18next.config.js";
import { usePathname, useSearchParams } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// const { i18n } = i18nConfig;

export interface ContentfulContextInterface {
  locale?: string;
  spaceIds: {
    main: string;
  };
  previewActive: boolean;
}

export const contentfulContextValue: ContentfulContextInterface = {
  // locale: i18n.defaultLocale,
  spaceIds: {
    main: contentfulConfig.contentful.space_id,
  },
  previewActive: false,
};

export const ContentfulContext = createContext<ContentfulContextInterface>(
  contentfulContextValue
);

export const useContentfulContext = () => useContext(ContentfulContext);

interface ContentfulContentProviderProps {
  children: ReactNode;
}

export const ContentfulContentProvider = ({
  children,
}: ContentfulContentProviderProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [contextValue, setContextValue] = useState(contentfulContextValue);

  useEffect(() => {
    const previewActive = !!searchParams.get("preview");
    const locale = pathname.split("/")[1]; //|| i18n.defaultLocale;

    setContextValue({
      locale,
      spaceIds: {
        main: contentfulConfig.contentful.space_id,
      },
      previewActive,
    });
  }, [pathname, searchParams]);

  return (
    <ContentfulContext.Provider value={contextValue}>
      {children}
    </ContentfulContext.Provider>
  );
};
