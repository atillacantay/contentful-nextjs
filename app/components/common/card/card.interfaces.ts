import { ContentfulImageProps } from "../../cft-components/cft-image/cft-image";

export interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  as?: "section" | "div" | "article";
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export interface ICardMedia extends ContentfulImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface ICardHeader {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export interface ICardContent {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export interface ICardStyle {
  card: string;
  cardHeader: string;
  cardMedia: string;
  cardContent: string;
}
