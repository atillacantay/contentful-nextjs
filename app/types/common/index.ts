export interface Sys {
  id: string;
  spaceId: string;
  environmentId: string;
  locale: string;
}

export interface Entry {
  __typename: string;
  sys: Sys;
  [key: string]: any;
}

export interface SectionCollection {
  items: Entry[];
}

export interface CftImage {
  url: string;
  description: string;
  width: number;
  height: number;
}

export interface CftPageCollectionItem {
  slug: string;
  title: string;
  pageName: string;
  sys: {
    id: string;
  };
  sectionCollection?: SectionCollection;
  seo?: {
    name?: string;
    title?: string;
    image?: {
      title?: string;
      description?: string;
      contentType?: string;
      url?: string;
      width?: string;
      height?: string;
    };
    description?: string;
    canonicalUrl?: string;
    noFollow?: boolean;
    noIndex?: boolean;
  };
}
export interface CftPageCollection {
  pageCollection: {
    __typename: string;
    items: CftPageCollectionItem[];
  };
}
