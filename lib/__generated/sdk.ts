import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentAuthorCollection?: Maybe<ComponentAuthorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  ingredientCollection?: Maybe<IngredientCollection>;
  pageArticleCollection?: Maybe<PageArticleCollection>;
  pageMagazineCollection?: Maybe<PageMagazineCollection>;
  pageRecipeCollection?: Maybe<PageRecipeCollection>;
  pageShopCollection?: Maybe<PageShopCollection>;
  preparationStepCollection?: Maybe<PreparationStepCollection>;
  recipeReviewCollection?: Maybe<RecipeReviewCollection>;
  seoCollection?: Maybe<SeoCollection>;
  sliderItemCollection?: Maybe<SliderItemCollection>;
};


export type AssetLinkingCollectionsComponentAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsIngredientCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageMagazineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageShopCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPreparationStepCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsRecipeReviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSliderItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** To have author-related properties [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/componentAuthor) */
export type ComponentAuthor = Entry & _Node & {
  __typename?: 'ComponentAuthor';
  _id: Scalars['ID']['output'];
  avatar?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentAuthorLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/componentAuthor) */
export type ComponentAuthorAvatarArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/componentAuthor) */
export type ComponentAuthorInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/componentAuthor) */
export type ComponentAuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/componentAuthor) */
export type ComponentAuthorNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentAuthorCollection = {
  __typename?: 'ComponentAuthorCollection';
  items: Array<Maybe<ComponentAuthor>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentAuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentAuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentAuthorFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentAuthorLinkingCollections = {
  __typename?: 'ComponentAuthorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageArticleCollection?: Maybe<PageArticleCollection>;
  pageRecipeCollection?: Maybe<PageRecipeCollection>;
  recipeReviewCollection?: Maybe<RecipeReviewCollection>;
};


export type ComponentAuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentAuthorLinkingCollectionsPageArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAuthorLinkingCollectionsPageArticleCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentAuthorLinkingCollectionsPageRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAuthorLinkingCollectionsPageRecipeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentAuthorLinkingCollectionsRecipeReviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAuthorLinkingCollectionsRecipeReviewCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentAuthorLinkingCollectionsPageArticleCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  ReadDurationInMinAsc = 'readDurationInMin_ASC',
  ReadDurationInMinDesc = 'readDurationInMin_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentAuthorLinkingCollectionsPageRecipeCollectionOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  CookingTimeMinutesAsc = 'cookingTimeMinutes_ASC',
  CookingTimeMinutesDesc = 'cookingTimeMinutes_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DifficultyAsc = 'difficulty_ASC',
  DifficultyDesc = 'difficulty_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PersonsAsc = 'persons_ASC',
  PersonsDesc = 'persons_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentAuthorLinkingCollectionsRecipeReviewCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  IsApprovedAsc = 'isApproved_ASC',
  IsApprovedDesc = 'isApproved_DESC',
  RatingAccuracyAsc = 'ratingAccuracy_ASC',
  RatingAccuracyDesc = 'ratingAccuracy_DESC',
  RatingDifficultyAsc = 'ratingDifficulty_ASC',
  RatingDifficultyDesc = 'ratingDifficulty_DESC',
  RatingIngredientsAsc = 'ratingIngredients_ASC',
  RatingIngredientsDesc = 'ratingIngredients_DESC',
  RatingOverallAsc = 'ratingOverall_ASC',
  RatingOverallDesc = 'ratingOverall_DESC',
  RatingTasteAsc = 'ratingTaste_ASC',
  RatingTasteDesc = 'ratingTaste_DESC',
  RecipeIdAsc = 'recipeId_ASC',
  RecipeIdDesc = 'recipeId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentAuthorOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Article Of The Day and Month [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/featuredArticle) */
export type FeaturedArticle = Entry & _Node & {
  __typename?: 'FeaturedArticle';
  _id: Scalars['ID']['output'];
  article?: Maybe<PageArticle>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FeaturedArticleLinkingCollections>;
  sys: Sys;
};


/** Article Of The Day and Month [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/featuredArticle) */
export type FeaturedArticleArticleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageArticleFilter>;
};


/** Article Of The Day and Month [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/featuredArticle) */
export type FeaturedArticleInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Article Of The Day and Month [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/featuredArticle) */
export type FeaturedArticleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturedArticleCollection = {
  __typename?: 'FeaturedArticleCollection';
  items: Array<Maybe<FeaturedArticle>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FeaturedArticleFilter = {
  AND?: InputMaybe<Array<InputMaybe<FeaturedArticleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FeaturedArticleFilter>>>;
  article?: InputMaybe<CfPageArticleNestedFilter>;
  article_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type FeaturedArticleLinkingCollections = {
  __typename?: 'FeaturedArticleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type FeaturedArticleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FeaturedArticleLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FeaturedArticleLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FeaturedArticleLinkingCollectionsSectionCollectionOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShowMobileButtonAsc = 'showMobileButton_ASC',
  ShowMobileButtonDesc = 'showMobileButton_DESC',
  ShowXItemsOnMobileAsc = 'showXItemsOnMobile_ASC',
  ShowXItemsOnMobileDesc = 'showXItemsOnMobile_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FeaturedArticleOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/featuredMagazine) */
export type FeaturedMagazine = Entry & _Node & {
  __typename?: 'FeaturedMagazine';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FeaturedMagazineLinkingCollections>;
  magazine?: Maybe<PageMagazine>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/featuredMagazine) */
export type FeaturedMagazineInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/featuredMagazine) */
export type FeaturedMagazineLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/featuredMagazine) */
export type FeaturedMagazineMagazineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMagazineFilter>;
};

export type FeaturedMagazineCollection = {
  __typename?: 'FeaturedMagazineCollection';
  items: Array<Maybe<FeaturedMagazine>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FeaturedMagazineFilter = {
  AND?: InputMaybe<Array<InputMaybe<FeaturedMagazineFilter>>>;
  Magazine?: InputMaybe<CfPageMagazineNestedFilter>;
  Magazine_exists?: InputMaybe<Scalars['Boolean']['input']>;
  OR?: InputMaybe<Array<InputMaybe<FeaturedMagazineFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type FeaturedMagazineLinkingCollections = {
  __typename?: 'FeaturedMagazineLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FeaturedMagazineLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FeaturedMagazineOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Recipe of The Month [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/featuredRecipe) */
export type FeaturedRecipe = Entry & _Node & {
  __typename?: 'FeaturedRecipe';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FeaturedRecipeLinkingCollections>;
  recipe?: Maybe<PageRecipe>;
  sys: Sys;
};


/** Recipe of The Month [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/featuredRecipe) */
export type FeaturedRecipeInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Recipe of The Month [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/featuredRecipe) */
export type FeaturedRecipeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Recipe of The Month [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/featuredRecipe) */
export type FeaturedRecipeRecipeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageRecipeFilter>;
};

export type FeaturedRecipeCollection = {
  __typename?: 'FeaturedRecipeCollection';
  items: Array<Maybe<FeaturedRecipe>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FeaturedRecipeFilter = {
  AND?: InputMaybe<Array<InputMaybe<FeaturedRecipeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FeaturedRecipeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recipe?: InputMaybe<CfPageRecipeNestedFilter>;
  recipe_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type FeaturedRecipeLinkingCollections = {
  __typename?: 'FeaturedRecipeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type FeaturedRecipeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FeaturedRecipeLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FeaturedRecipeLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FeaturedRecipeLinkingCollectionsSectionCollectionOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShowMobileButtonAsc = 'showMobileButton_ASC',
  ShowMobileButtonDesc = 'showMobileButton_DESC',
  ShowXItemsOnMobileAsc = 'showXItemsOnMobile_ASC',
  ShowXItemsOnMobileDesc = 'showXItemsOnMobile_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FeaturedRecipeOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/footer) */
export type Footer = Entry & _Node & {
  __typename?: 'Footer';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  followLabel?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  legalLinksCollection?: Maybe<FooterLegalLinksCollection>;
  linkedFrom?: Maybe<FooterLinkingCollections>;
  menuLinksCollection?: Maybe<FooterMenuLinksCollection>;
  socialItemsCollection?: Maybe<FooterSocialItemsCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/footer) */
export type FooterFollowLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/footer) */
export type FooterInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/footer) */
export type FooterLegalLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterLegalLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkItemFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/footer) */
export type FooterMenuLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterMenuLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkItemFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/footer) */
export type FooterSocialItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterSocialItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SocialItemFilter>;
};

export type FooterCollection = {
  __typename?: 'FooterCollection';
  items: Array<Maybe<Footer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FooterFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  followLabel?: InputMaybe<Scalars['String']['input']>;
  followLabel_contains?: InputMaybe<Scalars['String']['input']>;
  followLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  followLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  followLabel_not?: InputMaybe<Scalars['String']['input']>;
  followLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  followLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalLinks?: InputMaybe<CfNavigationLinkItemNestedFilter>;
  legalLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  menuLinks?: InputMaybe<CfNavigationLinkItemNestedFilter>;
  menuLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  socialItems?: InputMaybe<CfSocialItemNestedFilter>;
  socialItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type FooterLegalLinksCollection = {
  __typename?: 'FooterLegalLinksCollection';
  items: Array<Maybe<NavigationLinkItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FooterLegalLinksCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type FooterLinkingCollections = {
  __typename?: 'FooterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type FooterMenuLinksCollection = {
  __typename?: 'FooterMenuLinksCollection';
  items: Array<Maybe<NavigationLinkItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FooterMenuLinksCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FooterOrder {
  FollowLabelAsc = 'followLabel_ASC',
  FollowLabelDesc = 'followLabel_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FooterSocialItemsCollection = {
  __typename?: 'FooterSocialItemsCollection';
  items: Array<Maybe<SocialItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FooterSocialItemsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/header) */
export type Header = Entry & _Node & {
  __typename?: 'Header';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  headerSearch?: Maybe<Scalars['JSON']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HeaderLinkingCollections>;
  navigationItems?: Maybe<Scalars['JSON']['output']>;
  sys: Sys;
  userMenu?: Maybe<Scalars['JSON']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/header) */
export type HeaderHeaderSearchArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/header) */
export type HeaderInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/header) */
export type HeaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/header) */
export type HeaderNavigationItemsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/header) */
export type HeaderUserMenuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeaderCollection = {
  __typename?: 'HeaderCollection';
  items: Array<Maybe<Header>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeaderFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headerSearch_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationItems_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userMenu_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderLinkingCollections = {
  __typename?: 'HeaderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeaderOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/ingredient) */
export type Ingredient = Entry & _Node & {
  __typename?: 'Ingredient';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<IngredientLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  producedByGoody?: Maybe<Scalars['Boolean']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  sys: Sys;
  unit?: Maybe<Scalars['String']['output']>;
  unitValue?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/ingredient) */
export type IngredientImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/ingredient) */
export type IngredientLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/ingredient) */
export type IngredientNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/ingredient) */
export type IngredientProducedByGoodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/ingredient) */
export type IngredientQuantityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/ingredient) */
export type IngredientUnitArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/ingredient) */
export type IngredientUnitValueArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IngredientCollection = {
  __typename?: 'IngredientCollection';
  items: Array<Maybe<Ingredient>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type IngredientFilter = {
  AND?: InputMaybe<Array<InputMaybe<IngredientFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IngredientFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  producedByGoody?: InputMaybe<Scalars['Boolean']['input']>;
  producedByGoody_exists?: InputMaybe<Scalars['Boolean']['input']>;
  producedByGoody_not?: InputMaybe<Scalars['Boolean']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  quantity_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quantity_gt?: InputMaybe<Scalars['Float']['input']>;
  quantity_gte?: InputMaybe<Scalars['Float']['input']>;
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  quantity_lt?: InputMaybe<Scalars['Float']['input']>;
  quantity_lte?: InputMaybe<Scalars['Float']['input']>;
  quantity_not?: InputMaybe<Scalars['Float']['input']>;
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  unit?: InputMaybe<Scalars['String']['input']>;
  unitValue?: InputMaybe<Scalars['String']['input']>;
  unitValue_contains?: InputMaybe<Scalars['String']['input']>;
  unitValue_exists?: InputMaybe<Scalars['Boolean']['input']>;
  unitValue_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unitValue_not?: InputMaybe<Scalars['String']['input']>;
  unitValue_not_contains?: InputMaybe<Scalars['String']['input']>;
  unitValue_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unit_contains?: InputMaybe<Scalars['String']['input']>;
  unit_exists?: InputMaybe<Scalars['Boolean']['input']>;
  unit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unit_not?: InputMaybe<Scalars['String']['input']>;
  unit_not_contains?: InputMaybe<Scalars['String']['input']>;
  unit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IngredientLinkingCollections = {
  __typename?: 'IngredientLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageRecipeCollection?: Maybe<PageRecipeCollection>;
};


export type IngredientLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type IngredientLinkingCollectionsPageRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<IngredientLinkingCollectionsPageRecipeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum IngredientLinkingCollectionsPageRecipeCollectionOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  CookingTimeMinutesAsc = 'cookingTimeMinutes_ASC',
  CookingTimeMinutesDesc = 'cookingTimeMinutes_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DifficultyAsc = 'difficulty_ASC',
  DifficultyDesc = 'difficulty_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PersonsAsc = 'persons_ASC',
  PersonsDesc = 'persons_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum IngredientOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ProducedByGoodyAsc = 'producedByGoody_ASC',
  ProducedByGoodyDesc = 'producedByGoody_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UnitValueAsc = 'unitValue_ASC',
  UnitValueDesc = 'unitValue_DESC',
  UnitAsc = 'unit_ASC',
  UnitDesc = 'unit_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/itemShowcase) */
export type ItemShowcase = Entry & _Node & {
  __typename?: 'ItemShowcase';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  itemsCollection?: Maybe<ItemShowcaseItemsCollection>;
  linkedFrom?: Maybe<ItemShowcaseLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/itemShowcase) */
export type ItemShowcaseInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/itemShowcase) */
export type ItemShowcaseItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ItemShowcaseItemsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/itemShowcase) */
export type ItemShowcaseLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ItemShowcaseCollection = {
  __typename?: 'ItemShowcaseCollection';
  items: Array<Maybe<ItemShowcase>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ItemShowcaseFilter = {
  AND?: InputMaybe<Array<InputMaybe<ItemShowcaseFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ItemShowcaseFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  items?: InputMaybe<CfitemsMultiTypeNestedFilter>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ItemShowcaseItemsCollection = {
  __typename?: 'ItemShowcaseItemsCollection';
  items: Array<Maybe<ItemShowcaseItemsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ItemShowcaseItemsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ItemShowcaseItemsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ItemShowcaseItemsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ItemShowcaseItemsItem = PageArticle | PageMagazine | PageRecipe | PageShop;

export type ItemShowcaseLinkingCollections = {
  __typename?: 'ItemShowcaseLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ItemShowcaseLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ItemShowcaseLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ItemShowcaseLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ItemShowcaseLinkingCollectionsSectionCollectionOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShowMobileButtonAsc = 'showMobileButton_ASC',
  ShowMobileButtonDesc = 'showMobileButton_DESC',
  ShowXItemsOnMobileAsc = 'showXItemsOnMobile_ASC',
  ShowXItemsOnMobileDesc = 'showXItemsOnMobile_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ItemShowcaseOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/mainNavigation) */
export type MainNavigation = Entry & _Node & {
  __typename?: 'MainNavigation';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  itemsCollection?: Maybe<MainNavigationItemsCollection>;
  linkedFrom?: Maybe<MainNavigationLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/mainNavigation) */
export type MainNavigationInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/mainNavigation) */
export type MainNavigationItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MainNavigationItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/mainNavigation) */
export type MainNavigationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MainNavigationCollection = {
  __typename?: 'MainNavigationCollection';
  items: Array<Maybe<MainNavigation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MainNavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<MainNavigationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MainNavigationFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  items?: InputMaybe<CfPageNestedFilter>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type MainNavigationItemsCollection = {
  __typename?: 'MainNavigationItemsCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum MainNavigationItemsCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type MainNavigationLinkingCollections = {
  __typename?: 'MainNavigationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MainNavigationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MainNavigationOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/navigationLinkItem) */
export type NavigationLinkItem = Entry & _Node & {
  __typename?: 'NavigationLinkItem';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<NavigationLinkItemLinkingCollections>;
  navigationLinkItemCollection?: Maybe<NavigationLinkItemNavigationLinkItemCollection>;
  page?: Maybe<NavigationLinkItemPage>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/navigationLinkItem) */
export type NavigationLinkItemInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/navigationLinkItem) */
export type NavigationLinkItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/navigationLinkItem) */
export type NavigationLinkItemNavigationLinkItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkItemNavigationLinkItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkItemFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/navigationLinkItem) */
export type NavigationLinkItemPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/navigationLinkItem) */
export type NavigationLinkItemTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationLinkItemCollection = {
  __typename?: 'NavigationLinkItemCollection';
  items: Array<Maybe<NavigationLinkItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationLinkItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationLinkItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationLinkItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationLinkItem?: InputMaybe<CfNavigationLinkItemNestedFilter>;
  navigationLinkItemCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  page_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NavigationLinkItemLinkingCollections = {
  __typename?: 'NavigationLinkItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  navigationLinkItemCollection?: Maybe<NavigationLinkItemCollection>;
};


export type NavigationLinkItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkItemLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkItemLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkItemLinkingCollectionsNavigationLinkItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkItemLinkingCollectionsNavigationLinkItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NavigationLinkItemLinkingCollectionsFooterCollectionOrder {
  FollowLabelAsc = 'followLabel_ASC',
  FollowLabelDesc = 'followLabel_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationLinkItemLinkingCollectionsNavigationLinkItemCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type NavigationLinkItemNavigationLinkItemCollection = {
  __typename?: 'NavigationLinkItemNavigationLinkItemCollection';
  items: Array<Maybe<NavigationLinkItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavigationLinkItemNavigationLinkItemCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationLinkItemOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type NavigationLinkItemPage = Page | PageRecipeCategory | PageShopCategory;

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/page) */
export type Page = Entry & _Node & {
  __typename?: 'Page';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageLinkingCollections>;
  pageName?: Maybe<Scalars['String']['output']>;
  sectionCollection?: Maybe<PageSectionCollection>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/page) */
export type PagePageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/page) */
export type PageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/page) */
export type PageSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageArticle) */
export type PageArticle = Entry & _Node & {
  __typename?: 'PageArticle';
  _id: Scalars['ID']['output'];
  author?: Maybe<ComponentAuthor>;
  content?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  featuredArticlesCollection?: Maybe<PageArticleFeaturedArticlesCollection>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageArticleLinkingCollections>;
  rating?: Maybe<Scalars['Float']['output']>;
  readDurationInMin?: Maybe<Scalars['Int']['output']>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageArticle) */
export type PageArticleAuthorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentAuthorFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageArticle) */
export type PageArticleContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageArticle) */
export type PageArticleFeaturedArticlesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageArticleFeaturedArticlesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageArticleFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageArticle) */
export type PageArticleImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageArticle) */
export type PageArticleInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageArticle) */
export type PageArticleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageArticle) */
export type PageArticleRatingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageArticle) */
export type PageArticleReadDurationInMinArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageArticle) */
export type PageArticleSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageArticle) */
export type PageArticleSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageArticle) */
export type PageArticleSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageArticle) */
export type PageArticleTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageArticleCollection = {
  __typename?: 'PageArticleCollection';
  items: Array<Maybe<PageArticle>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageArticleFeaturedArticlesCollection = {
  __typename?: 'PageArticleFeaturedArticlesCollection';
  items: Array<Maybe<PageArticle>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageArticleFeaturedArticlesCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  ReadDurationInMinAsc = 'readDurationInMin_ASC',
  ReadDurationInMinDesc = 'readDurationInMin_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageArticleFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageArticleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageArticleFilter>>>;
  author?: InputMaybe<CfComponentAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content_not?: InputMaybe<Scalars['String']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredArticles?: InputMaybe<CfPageArticleNestedFilter>;
  featuredArticlesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  rating_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating_gt?: InputMaybe<Scalars['Float']['input']>;
  rating_gte?: InputMaybe<Scalars['Float']['input']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  rating_lt?: InputMaybe<Scalars['Float']['input']>;
  rating_lte?: InputMaybe<Scalars['Float']['input']>;
  rating_not?: InputMaybe<Scalars['Float']['input']>;
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  readDurationInMin?: InputMaybe<Scalars['Int']['input']>;
  readDurationInMin_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readDurationInMin_gt?: InputMaybe<Scalars['Int']['input']>;
  readDurationInMin_gte?: InputMaybe<Scalars['Int']['input']>;
  readDurationInMin_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  readDurationInMin_lt?: InputMaybe<Scalars['Int']['input']>;
  readDurationInMin_lte?: InputMaybe<Scalars['Int']['input']>;
  readDurationInMin_not?: InputMaybe<Scalars['Int']['input']>;
  readDurationInMin_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageArticleLinkingCollections = {
  __typename?: 'PageArticleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  featuredArticleCollection?: Maybe<FeaturedArticleCollection>;
  itemShowcaseCollection?: Maybe<ItemShowcaseCollection>;
  pageArticleCollection?: Maybe<PageArticleCollection>;
};


export type PageArticleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageArticleLinkingCollectionsFeaturedArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageArticleLinkingCollectionsFeaturedArticleCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageArticleLinkingCollectionsItemShowcaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageArticleLinkingCollectionsItemShowcaseCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageArticleLinkingCollectionsPageArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageArticleLinkingCollectionsPageArticleCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageArticleLinkingCollectionsFeaturedArticleCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageArticleLinkingCollectionsItemShowcaseCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageArticleLinkingCollectionsPageArticleCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  ReadDurationInMinAsc = 'readDurationInMin_ASC',
  ReadDurationInMinDesc = 'readDurationInMin_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageArticleOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  ReadDurationInMinAsc = 'readDurationInMin_ASC',
  ReadDurationInMinDesc = 'readDurationInMin_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  mainNavigationCollection?: Maybe<MainNavigationCollection>;
  navigationLinkItemCollection?: Maybe<NavigationLinkItemCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsMainNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsMainNavigationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsNavigationLinkItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsNavigationLinkItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageLinkingCollectionsMainNavigationCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageLinkingCollectionsNavigationLinkItemCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageMagazine) */
export type PageMagazine = Entry & _Node & {
  __typename?: 'PageMagazine';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  flipBookUrl?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageMagazineLinkingCollections>;
  seo?: Maybe<Seo>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageMagazine) */
export type PageMagazineDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageMagazine) */
export type PageMagazineFlipBookUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageMagazine) */
export type PageMagazineImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageMagazine) */
export type PageMagazineInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageMagazine) */
export type PageMagazineLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageMagazine) */
export type PageMagazineSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageMagazine) */
export type PageMagazineSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageMagazine) */
export type PageMagazineTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageMagazineCollection = {
  __typename?: 'PageMagazineCollection';
  items: Array<Maybe<PageMagazine>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageMagazineFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageMagazineFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageMagazineFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  flipBookUrl?: InputMaybe<Scalars['String']['input']>;
  flipBookUrl_contains?: InputMaybe<Scalars['String']['input']>;
  flipBookUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  flipBookUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  flipBookUrl_not?: InputMaybe<Scalars['String']['input']>;
  flipBookUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  flipBookUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageMagazineLinkingCollections = {
  __typename?: 'PageMagazineLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  featuredMagazineCollection?: Maybe<FeaturedMagazineCollection>;
  itemShowcaseCollection?: Maybe<ItemShowcaseCollection>;
};


export type PageMagazineLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageMagazineLinkingCollectionsFeaturedMagazineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMagazineLinkingCollectionsFeaturedMagazineCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageMagazineLinkingCollectionsItemShowcaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMagazineLinkingCollectionsItemShowcaseCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageMagazineLinkingCollectionsFeaturedMagazineCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageMagazineLinkingCollectionsItemShowcaseCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageMagazineOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FlipBookUrlAsc = 'flipBookUrl_ASC',
  FlipBookUrlDesc = 'flipBookUrl_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipe = Entry & _Node & {
  __typename?: 'PageRecipe';
  _id: Scalars['ID']['output'];
  author?: Maybe<ComponentAuthor>;
  calories?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<PageRecipeCategory>;
  contentfulMetadata: ContentfulMetadata;
  cookingTimeMinutes?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  ingredientsCollection?: Maybe<PageRecipeIngredientsCollection>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageRecipeLinkingCollections>;
  persons?: Maybe<Scalars['Int']['output']>;
  preparationStepsCollection?: Maybe<PageRecipePreparationStepsCollection>;
  rating?: Maybe<Scalars['Float']['output']>;
  relatedRecipesCollection?: Maybe<PageRecipeRelatedRecipesCollection>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipeAuthorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentAuthorFilter>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipeCaloriesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipeCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageRecipeCategoryFilter>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipeCookingTimeMinutesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipeDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipeDifficultyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipeImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipeIngredientsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageRecipeIngredientsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IngredientFilter>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipeInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipePersonsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipePreparationStepsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageRecipePreparationStepsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PreparationStepFilter>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipeRatingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipeRelatedRecipesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageRecipeRelatedRecipesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageRecipeFilter>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipeSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipeSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create individual recipes [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipe) */
export type PageRecipeTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipeCategory) */
export type PageRecipeCategory = Entry & _Node & {
  __typename?: 'PageRecipeCategory';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageRecipeCategoryLinkingCollections>;
  sectionCollection?: Maybe<PageRecipeCategorySectionCollection>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipeCategory) */
export type PageRecipeCategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipeCategory) */
export type PageRecipeCategorySectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageRecipeCategorySectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipeCategory) */
export type PageRecipeCategorySeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageRecipeCategory) */
export type PageRecipeCategorySlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageRecipeCategoryCollection = {
  __typename?: 'PageRecipeCategoryCollection';
  items: Array<Maybe<PageRecipeCategory>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageRecipeCategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageRecipeCategoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageRecipeCategoryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  section?: InputMaybe<CfSectionNestedFilter>;
  sectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageRecipeCategoryLinkingCollections = {
  __typename?: 'PageRecipeCategoryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navigationLinkItemCollection?: Maybe<NavigationLinkItemCollection>;
  pageRecipeCollection?: Maybe<PageRecipeCollection>;
};


export type PageRecipeCategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageRecipeCategoryLinkingCollectionsNavigationLinkItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageRecipeCategoryLinkingCollectionsNavigationLinkItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageRecipeCategoryLinkingCollectionsPageRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageRecipeCategoryLinkingCollectionsPageRecipeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageRecipeCategoryLinkingCollectionsNavigationLinkItemCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageRecipeCategoryLinkingCollectionsPageRecipeCollectionOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  CookingTimeMinutesAsc = 'cookingTimeMinutes_ASC',
  CookingTimeMinutesDesc = 'cookingTimeMinutes_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DifficultyAsc = 'difficulty_ASC',
  DifficultyDesc = 'difficulty_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PersonsAsc = 'persons_ASC',
  PersonsDesc = 'persons_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageRecipeCategoryOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageRecipeCategorySectionCollection = {
  __typename?: 'PageRecipeCategorySectionCollection';
  items: Array<Maybe<Section>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageRecipeCategorySectionCollectionOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShowMobileButtonAsc = 'showMobileButton_ASC',
  ShowMobileButtonDesc = 'showMobileButton_DESC',
  ShowXItemsOnMobileAsc = 'showXItemsOnMobile_ASC',
  ShowXItemsOnMobileDesc = 'showXItemsOnMobile_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageRecipeCollection = {
  __typename?: 'PageRecipeCollection';
  items: Array<Maybe<PageRecipe>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageRecipeFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageRecipeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageRecipeFilter>>>;
  author?: InputMaybe<CfComponentAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  calories?: InputMaybe<Scalars['Int']['input']>;
  calories_exists?: InputMaybe<Scalars['Boolean']['input']>;
  calories_gt?: InputMaybe<Scalars['Int']['input']>;
  calories_gte?: InputMaybe<Scalars['Int']['input']>;
  calories_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  calories_lt?: InputMaybe<Scalars['Int']['input']>;
  calories_lte?: InputMaybe<Scalars['Int']['input']>;
  calories_not?: InputMaybe<Scalars['Int']['input']>;
  calories_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category?: InputMaybe<CfPageRecipeCategoryNestedFilter>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cookingTimeMinutes?: InputMaybe<Scalars['Int']['input']>;
  cookingTimeMinutes_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cookingTimeMinutes_gt?: InputMaybe<Scalars['Int']['input']>;
  cookingTimeMinutes_gte?: InputMaybe<Scalars['Int']['input']>;
  cookingTimeMinutes_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  cookingTimeMinutes_lt?: InputMaybe<Scalars['Int']['input']>;
  cookingTimeMinutes_lte?: InputMaybe<Scalars['Int']['input']>;
  cookingTimeMinutes_not?: InputMaybe<Scalars['Int']['input']>;
  cookingTimeMinutes_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  difficulty_contains?: InputMaybe<Scalars['String']['input']>;
  difficulty_exists?: InputMaybe<Scalars['Boolean']['input']>;
  difficulty_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  difficulty_not?: InputMaybe<Scalars['String']['input']>;
  difficulty_not_contains?: InputMaybe<Scalars['String']['input']>;
  difficulty_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ingredients?: InputMaybe<CfIngredientNestedFilter>;
  ingredientsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  persons?: InputMaybe<Scalars['Int']['input']>;
  persons_exists?: InputMaybe<Scalars['Boolean']['input']>;
  persons_gt?: InputMaybe<Scalars['Int']['input']>;
  persons_gte?: InputMaybe<Scalars['Int']['input']>;
  persons_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  persons_lt?: InputMaybe<Scalars['Int']['input']>;
  persons_lte?: InputMaybe<Scalars['Int']['input']>;
  persons_not?: InputMaybe<Scalars['Int']['input']>;
  persons_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  preparationSteps?: InputMaybe<CfPreparationStepNestedFilter>;
  preparationStepsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  rating_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating_gt?: InputMaybe<Scalars['Float']['input']>;
  rating_gte?: InputMaybe<Scalars['Float']['input']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  rating_lt?: InputMaybe<Scalars['Float']['input']>;
  rating_lte?: InputMaybe<Scalars['Float']['input']>;
  rating_not?: InputMaybe<Scalars['Float']['input']>;
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  relatedRecipes?: InputMaybe<CfPageRecipeNestedFilter>;
  relatedRecipesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageRecipeIngredientsCollection = {
  __typename?: 'PageRecipeIngredientsCollection';
  items: Array<Maybe<Ingredient>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageRecipeIngredientsCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ProducedByGoodyAsc = 'producedByGoody_ASC',
  ProducedByGoodyDesc = 'producedByGoody_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UnitValueAsc = 'unitValue_ASC',
  UnitValueDesc = 'unitValue_DESC',
  UnitAsc = 'unit_ASC',
  UnitDesc = 'unit_DESC'
}

export type PageRecipeLinkingCollections = {
  __typename?: 'PageRecipeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  featuredRecipeCollection?: Maybe<FeaturedRecipeCollection>;
  itemShowcaseCollection?: Maybe<ItemShowcaseCollection>;
  pageRecipeCollection?: Maybe<PageRecipeCollection>;
  recipeReviewCollection?: Maybe<RecipeReviewCollection>;
};


export type PageRecipeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageRecipeLinkingCollectionsFeaturedRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageRecipeLinkingCollectionsFeaturedRecipeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageRecipeLinkingCollectionsItemShowcaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageRecipeLinkingCollectionsItemShowcaseCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageRecipeLinkingCollectionsPageRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageRecipeLinkingCollectionsPageRecipeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageRecipeLinkingCollectionsRecipeReviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageRecipeLinkingCollectionsRecipeReviewCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageRecipeLinkingCollectionsFeaturedRecipeCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageRecipeLinkingCollectionsItemShowcaseCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageRecipeLinkingCollectionsPageRecipeCollectionOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  CookingTimeMinutesAsc = 'cookingTimeMinutes_ASC',
  CookingTimeMinutesDesc = 'cookingTimeMinutes_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DifficultyAsc = 'difficulty_ASC',
  DifficultyDesc = 'difficulty_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PersonsAsc = 'persons_ASC',
  PersonsDesc = 'persons_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageRecipeLinkingCollectionsRecipeReviewCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  IsApprovedAsc = 'isApproved_ASC',
  IsApprovedDesc = 'isApproved_DESC',
  RatingAccuracyAsc = 'ratingAccuracy_ASC',
  RatingAccuracyDesc = 'ratingAccuracy_DESC',
  RatingDifficultyAsc = 'ratingDifficulty_ASC',
  RatingDifficultyDesc = 'ratingDifficulty_DESC',
  RatingIngredientsAsc = 'ratingIngredients_ASC',
  RatingIngredientsDesc = 'ratingIngredients_DESC',
  RatingOverallAsc = 'ratingOverall_ASC',
  RatingOverallDesc = 'ratingOverall_DESC',
  RatingTasteAsc = 'ratingTaste_ASC',
  RatingTasteDesc = 'ratingTaste_DESC',
  RecipeIdAsc = 'recipeId_ASC',
  RecipeIdDesc = 'recipeId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageRecipeOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  CookingTimeMinutesAsc = 'cookingTimeMinutes_ASC',
  CookingTimeMinutesDesc = 'cookingTimeMinutes_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DifficultyAsc = 'difficulty_ASC',
  DifficultyDesc = 'difficulty_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PersonsAsc = 'persons_ASC',
  PersonsDesc = 'persons_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageRecipePreparationStepsCollection = {
  __typename?: 'PageRecipePreparationStepsCollection';
  items: Array<Maybe<PreparationStep>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageRecipePreparationStepsCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageRecipeRelatedRecipesCollection = {
  __typename?: 'PageRecipeRelatedRecipesCollection';
  items: Array<Maybe<PageRecipe>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageRecipeRelatedRecipesCollectionOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  CookingTimeMinutesAsc = 'cookingTimeMinutes_ASC',
  CookingTimeMinutesDesc = 'cookingTimeMinutes_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DifficultyAsc = 'difficulty_ASC',
  DifficultyDesc = 'difficulty_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PersonsAsc = 'persons_ASC',
  PersonsDesc = 'persons_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageSectionCollection = {
  __typename?: 'PageSectionCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShop = Entry & _Node & {
  __typename?: 'PageShop';
  _id: Scalars['ID']['output'];
  alsoViewedCollection?: Maybe<PageShopAlsoViewedCollection>;
  calories?: Maybe<Scalars['String']['output']>;
  carbs?: Maybe<Scalars['String']['output']>;
  category?: Maybe<PageShopCategory>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fat?: Maybe<Scalars['String']['output']>;
  fiber?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  imagesCollection?: Maybe<AssetCollection>;
  ingredients?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageShopLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  productBuyButtonLink?: Maybe<Scalars['String']['output']>;
  productIsNew?: Maybe<Scalars['Boolean']['output']>;
  productNetWeight?: Maybe<Scalars['Int']['output']>;
  productUnit?: Maybe<Scalars['String']['output']>;
  protein?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']['output']>;
  specialty?: Maybe<Scalars['String']['output']>;
  storageRequirements?: Maybe<Scalars['String']['output']>;
  sugar?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopAlsoViewedCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageShopAlsoViewedCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageShopFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopCaloriesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopCarbsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageShopCategoryFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopFatArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopFiberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopIngredientsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopProductBuyButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopProductIsNewArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopProductNetWeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopProductUnitArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopProteinArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopRatingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopSpecialtyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopStorageRequirementsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShop) */
export type PageShopSugarArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageShopAlsoViewedCollection = {
  __typename?: 'PageShopAlsoViewedCollection';
  items: Array<Maybe<PageShop>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageShopAlsoViewedCollectionOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  CarbsAsc = 'carbs_ASC',
  CarbsDesc = 'carbs_DESC',
  FatAsc = 'fat_ASC',
  FatDesc = 'fat_DESC',
  FiberAsc = 'fiber_ASC',
  FiberDesc = 'fiber_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ProductBuyButtonLinkAsc = 'productBuyButtonLink_ASC',
  ProductBuyButtonLinkDesc = 'productBuyButtonLink_DESC',
  ProductIsNewAsc = 'productIsNew_ASC',
  ProductIsNewDesc = 'productIsNew_DESC',
  ProductNetWeightAsc = 'productNetWeight_ASC',
  ProductNetWeightDesc = 'productNetWeight_DESC',
  ProductUnitAsc = 'productUnit_ASC',
  ProductUnitDesc = 'productUnit_DESC',
  ProteinAsc = 'protein_ASC',
  ProteinDesc = 'protein_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SugarAsc = 'sugar_ASC',
  SugarDesc = 'sugar_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShopCategory) */
export type PageShopCategory = Entry & _Node & {
  __typename?: 'PageShopCategory';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageShopCategoryLinkingCollections>;
  sectionCollection?: Maybe<PageShopCategorySectionCollection>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShopCategory) */
export type PageShopCategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShopCategory) */
export type PageShopCategorySectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageShopCategorySectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShopCategory) */
export type PageShopCategorySeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/pageShopCategory) */
export type PageShopCategorySlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageShopCategoryCollection = {
  __typename?: 'PageShopCategoryCollection';
  items: Array<Maybe<PageShopCategory>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageShopCategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageShopCategoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageShopCategoryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  section?: InputMaybe<CfSectionNestedFilter>;
  sectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageShopCategoryLinkingCollections = {
  __typename?: 'PageShopCategoryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navigationLinkItemCollection?: Maybe<NavigationLinkItemCollection>;
  pageShopCollection?: Maybe<PageShopCollection>;
};


export type PageShopCategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageShopCategoryLinkingCollectionsNavigationLinkItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageShopCategoryLinkingCollectionsNavigationLinkItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageShopCategoryLinkingCollectionsPageShopCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageShopCategoryLinkingCollectionsPageShopCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageShopCategoryLinkingCollectionsNavigationLinkItemCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageShopCategoryLinkingCollectionsPageShopCollectionOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  CarbsAsc = 'carbs_ASC',
  CarbsDesc = 'carbs_DESC',
  FatAsc = 'fat_ASC',
  FatDesc = 'fat_DESC',
  FiberAsc = 'fiber_ASC',
  FiberDesc = 'fiber_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ProductBuyButtonLinkAsc = 'productBuyButtonLink_ASC',
  ProductBuyButtonLinkDesc = 'productBuyButtonLink_DESC',
  ProductIsNewAsc = 'productIsNew_ASC',
  ProductIsNewDesc = 'productIsNew_DESC',
  ProductNetWeightAsc = 'productNetWeight_ASC',
  ProductNetWeightDesc = 'productNetWeight_DESC',
  ProductUnitAsc = 'productUnit_ASC',
  ProductUnitDesc = 'productUnit_DESC',
  ProteinAsc = 'protein_ASC',
  ProteinDesc = 'protein_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SugarAsc = 'sugar_ASC',
  SugarDesc = 'sugar_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageShopCategoryOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageShopCategorySectionCollection = {
  __typename?: 'PageShopCategorySectionCollection';
  items: Array<Maybe<Section>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageShopCategorySectionCollectionOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShowMobileButtonAsc = 'showMobileButton_ASC',
  ShowMobileButtonDesc = 'showMobileButton_DESC',
  ShowXItemsOnMobileAsc = 'showXItemsOnMobile_ASC',
  ShowXItemsOnMobileDesc = 'showXItemsOnMobile_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageShopCollection = {
  __typename?: 'PageShopCollection';
  items: Array<Maybe<PageShop>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageShopFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageShopFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageShopFilter>>>;
  alsoViewed?: InputMaybe<CfPageShopNestedFilter>;
  alsoViewedCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  calories?: InputMaybe<Scalars['String']['input']>;
  calories_contains?: InputMaybe<Scalars['String']['input']>;
  calories_exists?: InputMaybe<Scalars['Boolean']['input']>;
  calories_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  calories_not?: InputMaybe<Scalars['String']['input']>;
  calories_not_contains?: InputMaybe<Scalars['String']['input']>;
  calories_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  carbs?: InputMaybe<Scalars['String']['input']>;
  carbs_contains?: InputMaybe<Scalars['String']['input']>;
  carbs_exists?: InputMaybe<Scalars['Boolean']['input']>;
  carbs_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  carbs_not?: InputMaybe<Scalars['String']['input']>;
  carbs_not_contains?: InputMaybe<Scalars['String']['input']>;
  carbs_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category?: InputMaybe<CfPageShopCategoryNestedFilter>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fat?: InputMaybe<Scalars['String']['input']>;
  fat_contains?: InputMaybe<Scalars['String']['input']>;
  fat_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fat_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fat_not?: InputMaybe<Scalars['String']['input']>;
  fat_not_contains?: InputMaybe<Scalars['String']['input']>;
  fat_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fiber?: InputMaybe<Scalars['String']['input']>;
  fiber_contains?: InputMaybe<Scalars['String']['input']>;
  fiber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fiber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fiber_not?: InputMaybe<Scalars['String']['input']>;
  fiber_not_contains?: InputMaybe<Scalars['String']['input']>;
  fiber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  ingredients_contains?: InputMaybe<Scalars['String']['input']>;
  ingredients_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ingredients_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ingredients_not?: InputMaybe<Scalars['String']['input']>;
  ingredients_not_contains?: InputMaybe<Scalars['String']['input']>;
  ingredients_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productBuyButtonLink?: InputMaybe<Scalars['String']['input']>;
  productBuyButtonLink_contains?: InputMaybe<Scalars['String']['input']>;
  productBuyButtonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productBuyButtonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productBuyButtonLink_not?: InputMaybe<Scalars['String']['input']>;
  productBuyButtonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  productBuyButtonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productIsNew?: InputMaybe<Scalars['Boolean']['input']>;
  productIsNew_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productIsNew_not?: InputMaybe<Scalars['Boolean']['input']>;
  productNetWeight?: InputMaybe<Scalars['Int']['input']>;
  productNetWeight_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productNetWeight_gt?: InputMaybe<Scalars['Int']['input']>;
  productNetWeight_gte?: InputMaybe<Scalars['Int']['input']>;
  productNetWeight_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  productNetWeight_lt?: InputMaybe<Scalars['Int']['input']>;
  productNetWeight_lte?: InputMaybe<Scalars['Int']['input']>;
  productNetWeight_not?: InputMaybe<Scalars['Int']['input']>;
  productNetWeight_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  productUnit?: InputMaybe<Scalars['String']['input']>;
  productUnit_contains?: InputMaybe<Scalars['String']['input']>;
  productUnit_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productUnit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productUnit_not?: InputMaybe<Scalars['String']['input']>;
  productUnit_not_contains?: InputMaybe<Scalars['String']['input']>;
  productUnit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  protein?: InputMaybe<Scalars['String']['input']>;
  protein_contains?: InputMaybe<Scalars['String']['input']>;
  protein_exists?: InputMaybe<Scalars['Boolean']['input']>;
  protein_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  protein_not?: InputMaybe<Scalars['String']['input']>;
  protein_not_contains?: InputMaybe<Scalars['String']['input']>;
  protein_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  rating_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating_gt?: InputMaybe<Scalars['Float']['input']>;
  rating_gte?: InputMaybe<Scalars['Float']['input']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  rating_lt?: InputMaybe<Scalars['Float']['input']>;
  rating_lte?: InputMaybe<Scalars['Float']['input']>;
  rating_not?: InputMaybe<Scalars['Float']['input']>;
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  specialty?: InputMaybe<Scalars['String']['input']>;
  specialty_contains?: InputMaybe<Scalars['String']['input']>;
  specialty_exists?: InputMaybe<Scalars['Boolean']['input']>;
  specialty_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  specialty_not?: InputMaybe<Scalars['String']['input']>;
  specialty_not_contains?: InputMaybe<Scalars['String']['input']>;
  specialty_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storageRequirements?: InputMaybe<Scalars['String']['input']>;
  storageRequirements_contains?: InputMaybe<Scalars['String']['input']>;
  storageRequirements_exists?: InputMaybe<Scalars['Boolean']['input']>;
  storageRequirements_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storageRequirements_not?: InputMaybe<Scalars['String']['input']>;
  storageRequirements_not_contains?: InputMaybe<Scalars['String']['input']>;
  storageRequirements_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sugar?: InputMaybe<Scalars['String']['input']>;
  sugar_contains?: InputMaybe<Scalars['String']['input']>;
  sugar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sugar_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sugar_not?: InputMaybe<Scalars['String']['input']>;
  sugar_not_contains?: InputMaybe<Scalars['String']['input']>;
  sugar_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageShopLinkingCollections = {
  __typename?: 'PageShopLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  itemShowcaseCollection?: Maybe<ItemShowcaseCollection>;
  pageShopCollection?: Maybe<PageShopCollection>;
};


export type PageShopLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageShopLinkingCollectionsItemShowcaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageShopLinkingCollectionsItemShowcaseCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageShopLinkingCollectionsPageShopCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageShopLinkingCollectionsPageShopCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageShopLinkingCollectionsItemShowcaseCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageShopLinkingCollectionsPageShopCollectionOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  CarbsAsc = 'carbs_ASC',
  CarbsDesc = 'carbs_DESC',
  FatAsc = 'fat_ASC',
  FatDesc = 'fat_DESC',
  FiberAsc = 'fiber_ASC',
  FiberDesc = 'fiber_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ProductBuyButtonLinkAsc = 'productBuyButtonLink_ASC',
  ProductBuyButtonLinkDesc = 'productBuyButtonLink_DESC',
  ProductIsNewAsc = 'productIsNew_ASC',
  ProductIsNewDesc = 'productIsNew_DESC',
  ProductNetWeightAsc = 'productNetWeight_ASC',
  ProductNetWeightDesc = 'productNetWeight_DESC',
  ProductUnitAsc = 'productUnit_ASC',
  ProductUnitDesc = 'productUnit_DESC',
  ProteinAsc = 'protein_ASC',
  ProteinDesc = 'protein_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SugarAsc = 'sugar_ASC',
  SugarDesc = 'sugar_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageShopOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  CarbsAsc = 'carbs_ASC',
  CarbsDesc = 'carbs_DESC',
  FatAsc = 'fat_ASC',
  FatDesc = 'fat_DESC',
  FiberAsc = 'fiber_ASC',
  FiberDesc = 'fiber_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ProductBuyButtonLinkAsc = 'productBuyButtonLink_ASC',
  ProductBuyButtonLinkDesc = 'productBuyButtonLink_DESC',
  ProductIsNewAsc = 'productIsNew_ASC',
  ProductIsNewDesc = 'productIsNew_DESC',
  ProductNetWeightAsc = 'productNetWeight_ASC',
  ProductNetWeightDesc = 'productNetWeight_DESC',
  ProductUnitAsc = 'productUnit_ASC',
  ProductUnitDesc = 'productUnit_DESC',
  ProteinAsc = 'protein_ASC',
  ProteinDesc = 'protein_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SugarAsc = 'sugar_ASC',
  SugarDesc = 'sugar_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/preparationStep) */
export type PreparationStep = Entry & _Node & {
  __typename?: 'PreparationStep';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PreparationStepLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/preparationStep) */
export type PreparationStepDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/preparationStep) */
export type PreparationStepImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/preparationStep) */
export type PreparationStepInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/preparationStep) */
export type PreparationStepLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PreparationStepCollection = {
  __typename?: 'PreparationStepCollection';
  items: Array<Maybe<PreparationStep>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PreparationStepFilter = {
  AND?: InputMaybe<Array<InputMaybe<PreparationStepFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PreparationStepFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PreparationStepLinkingCollections = {
  __typename?: 'PreparationStepLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageRecipeCollection?: Maybe<PageRecipeCollection>;
};


export type PreparationStepLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PreparationStepLinkingCollectionsPageRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PreparationStepLinkingCollectionsPageRecipeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PreparationStepLinkingCollectionsPageRecipeCollectionOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  CookingTimeMinutesAsc = 'cookingTimeMinutes_ASC',
  CookingTimeMinutesDesc = 'cookingTimeMinutes_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DifficultyAsc = 'difficulty_ASC',
  DifficultyDesc = 'difficulty_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PersonsAsc = 'persons_ASC',
  PersonsDesc = 'persons_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PreparationStepOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  componentAuthor?: Maybe<ComponentAuthor>;
  componentAuthorCollection?: Maybe<ComponentAuthorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  featuredArticle?: Maybe<FeaturedArticle>;
  featuredArticleCollection?: Maybe<FeaturedArticleCollection>;
  featuredMagazine?: Maybe<FeaturedMagazine>;
  featuredMagazineCollection?: Maybe<FeaturedMagazineCollection>;
  featuredRecipe?: Maybe<FeaturedRecipe>;
  featuredRecipeCollection?: Maybe<FeaturedRecipeCollection>;
  footer?: Maybe<Footer>;
  footerCollection?: Maybe<FooterCollection>;
  header?: Maybe<Header>;
  headerCollection?: Maybe<HeaderCollection>;
  ingredient?: Maybe<Ingredient>;
  ingredientCollection?: Maybe<IngredientCollection>;
  itemShowcase?: Maybe<ItemShowcase>;
  itemShowcaseCollection?: Maybe<ItemShowcaseCollection>;
  mainNavigation?: Maybe<MainNavigation>;
  mainNavigationCollection?: Maybe<MainNavigationCollection>;
  navigationLinkItem?: Maybe<NavigationLinkItem>;
  navigationLinkItemCollection?: Maybe<NavigationLinkItemCollection>;
  page?: Maybe<Page>;
  pageArticle?: Maybe<PageArticle>;
  pageArticleCollection?: Maybe<PageArticleCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageMagazine?: Maybe<PageMagazine>;
  pageMagazineCollection?: Maybe<PageMagazineCollection>;
  pageRecipe?: Maybe<PageRecipe>;
  pageRecipeCategory?: Maybe<PageRecipeCategory>;
  pageRecipeCategoryCollection?: Maybe<PageRecipeCategoryCollection>;
  pageRecipeCollection?: Maybe<PageRecipeCollection>;
  pageShop?: Maybe<PageShop>;
  pageShopCategory?: Maybe<PageShopCategory>;
  pageShopCategoryCollection?: Maybe<PageShopCategoryCollection>;
  pageShopCollection?: Maybe<PageShopCollection>;
  preparationStep?: Maybe<PreparationStep>;
  preparationStepCollection?: Maybe<PreparationStepCollection>;
  recipeReview?: Maybe<RecipeReview>;
  recipeReviewCollection?: Maybe<RecipeReviewCollection>;
  section?: Maybe<Section>;
  sectionCollection?: Maybe<SectionCollection>;
  seo?: Maybe<Seo>;
  seoCollection?: Maybe<SeoCollection>;
  slider?: Maybe<Slider>;
  sliderCollection?: Maybe<SliderCollection>;
  sliderItem?: Maybe<SliderItem>;
  sliderItemCollection?: Maybe<SliderItemCollection>;
  socialItem?: Maybe<SocialItem>;
  socialItemCollection?: Maybe<SocialItemCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryComponentAuthorArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAuthorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentAuthorFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFeaturedArticleArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFeaturedArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FeaturedArticleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeaturedArticleFilter>;
};


export type QueryFeaturedMagazineArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFeaturedMagazineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FeaturedMagazineOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeaturedMagazineFilter>;
};


export type QueryFeaturedRecipeArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFeaturedRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FeaturedRecipeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeaturedRecipeFilter>;
};


export type QueryFooterArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterFilter>;
};


export type QueryHeaderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeaderFilter>;
};


export type QueryIngredientArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryIngredientCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<IngredientOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IngredientFilter>;
};


export type QueryItemShowcaseArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryItemShowcaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ItemShowcaseOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ItemShowcaseFilter>;
};


export type QueryMainNavigationArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMainNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MainNavigationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MainNavigationFilter>;
};


export type QueryNavigationLinkItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationLinkItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkItemFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageArticleArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageArticleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageArticleFilter>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageFilter>;
};


export type QueryPageMagazineArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageMagazineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMagazineOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageMagazineFilter>;
};


export type QueryPageRecipeArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageRecipeCategoryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageRecipeCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageRecipeCategoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageRecipeCategoryFilter>;
};


export type QueryPageRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageRecipeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageRecipeFilter>;
};


export type QueryPageShopArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageShopCategoryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageShopCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageShopCategoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageShopCategoryFilter>;
};


export type QueryPageShopCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageShopOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageShopFilter>;
};


export type QueryPreparationStepArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPreparationStepCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PreparationStepOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PreparationStepFilter>;
};


export type QueryRecipeReviewArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRecipeReviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<RecipeReviewOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RecipeReviewFilter>;
};


export type QuerySectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionFilter>;
};


export type QuerySeoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeoFilter>;
};


export type QuerySliderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySliderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SliderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SliderFilter>;
};


export type QuerySliderItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySliderItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SliderItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SliderItemFilter>;
};


export type QuerySocialItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySocialItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SocialItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SocialItemFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/recipeReview) */
export type RecipeReview = Entry & _Node & {
  __typename?: 'RecipeReview';
  _id: Scalars['ID']['output'];
  author?: Maybe<ComponentAuthor>;
  content?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  imagesCollection?: Maybe<AssetCollection>;
  internalName?: Maybe<Scalars['String']['output']>;
  isApproved?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<RecipeReviewLinkingCollections>;
  ratingAccuracy?: Maybe<Scalars['Int']['output']>;
  ratingDifficulty?: Maybe<Scalars['Int']['output']>;
  ratingIngredients?: Maybe<Scalars['Int']['output']>;
  ratingOverall?: Maybe<Scalars['Int']['output']>;
  ratingTaste?: Maybe<Scalars['Int']['output']>;
  recipe?: Maybe<PageRecipe>;
  recipeId?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/recipeReview) */
export type RecipeReviewAuthorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentAuthorFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/recipeReview) */
export type RecipeReviewContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/recipeReview) */
export type RecipeReviewImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/recipeReview) */
export type RecipeReviewInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/recipeReview) */
export type RecipeReviewIsApprovedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/recipeReview) */
export type RecipeReviewLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/recipeReview) */
export type RecipeReviewRatingAccuracyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/recipeReview) */
export type RecipeReviewRatingDifficultyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/recipeReview) */
export type RecipeReviewRatingIngredientsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/recipeReview) */
export type RecipeReviewRatingOverallArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/recipeReview) */
export type RecipeReviewRatingTasteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/recipeReview) */
export type RecipeReviewRecipeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageRecipeFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/recipeReview) */
export type RecipeReviewRecipeIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeReviewCollection = {
  __typename?: 'RecipeReviewCollection';
  items: Array<Maybe<RecipeReview>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type RecipeReviewFilter = {
  AND?: InputMaybe<Array<InputMaybe<RecipeReviewFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RecipeReviewFilter>>>;
  author?: InputMaybe<CfComponentAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content_not?: InputMaybe<Scalars['String']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isApproved_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isApproved_not?: InputMaybe<Scalars['Boolean']['input']>;
  ratingAccuracy?: InputMaybe<Scalars['Int']['input']>;
  ratingAccuracy_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ratingAccuracy_gt?: InputMaybe<Scalars['Int']['input']>;
  ratingAccuracy_gte?: InputMaybe<Scalars['Int']['input']>;
  ratingAccuracy_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ratingAccuracy_lt?: InputMaybe<Scalars['Int']['input']>;
  ratingAccuracy_lte?: InputMaybe<Scalars['Int']['input']>;
  ratingAccuracy_not?: InputMaybe<Scalars['Int']['input']>;
  ratingAccuracy_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ratingDifficulty?: InputMaybe<Scalars['Int']['input']>;
  ratingDifficulty_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ratingDifficulty_gt?: InputMaybe<Scalars['Int']['input']>;
  ratingDifficulty_gte?: InputMaybe<Scalars['Int']['input']>;
  ratingDifficulty_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ratingDifficulty_lt?: InputMaybe<Scalars['Int']['input']>;
  ratingDifficulty_lte?: InputMaybe<Scalars['Int']['input']>;
  ratingDifficulty_not?: InputMaybe<Scalars['Int']['input']>;
  ratingDifficulty_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ratingIngredients?: InputMaybe<Scalars['Int']['input']>;
  ratingIngredients_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ratingIngredients_gt?: InputMaybe<Scalars['Int']['input']>;
  ratingIngredients_gte?: InputMaybe<Scalars['Int']['input']>;
  ratingIngredients_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ratingIngredients_lt?: InputMaybe<Scalars['Int']['input']>;
  ratingIngredients_lte?: InputMaybe<Scalars['Int']['input']>;
  ratingIngredients_not?: InputMaybe<Scalars['Int']['input']>;
  ratingIngredients_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ratingOverall?: InputMaybe<Scalars['Int']['input']>;
  ratingOverall_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ratingOverall_gt?: InputMaybe<Scalars['Int']['input']>;
  ratingOverall_gte?: InputMaybe<Scalars['Int']['input']>;
  ratingOverall_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ratingOverall_lt?: InputMaybe<Scalars['Int']['input']>;
  ratingOverall_lte?: InputMaybe<Scalars['Int']['input']>;
  ratingOverall_not?: InputMaybe<Scalars['Int']['input']>;
  ratingOverall_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ratingTaste?: InputMaybe<Scalars['Int']['input']>;
  ratingTaste_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ratingTaste_gt?: InputMaybe<Scalars['Int']['input']>;
  ratingTaste_gte?: InputMaybe<Scalars['Int']['input']>;
  ratingTaste_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ratingTaste_lt?: InputMaybe<Scalars['Int']['input']>;
  ratingTaste_lte?: InputMaybe<Scalars['Int']['input']>;
  ratingTaste_not?: InputMaybe<Scalars['Int']['input']>;
  ratingTaste_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  recipe?: InputMaybe<CfPageRecipeNestedFilter>;
  recipeId?: InputMaybe<Scalars['String']['input']>;
  recipeId_contains?: InputMaybe<Scalars['String']['input']>;
  recipeId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  recipeId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recipeId_not?: InputMaybe<Scalars['String']['input']>;
  recipeId_not_contains?: InputMaybe<Scalars['String']['input']>;
  recipeId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recipe_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type RecipeReviewLinkingCollections = {
  __typename?: 'RecipeReviewLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type RecipeReviewLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum RecipeReviewOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  IsApprovedAsc = 'isApproved_ASC',
  IsApprovedDesc = 'isApproved_DESC',
  RatingAccuracyAsc = 'ratingAccuracy_ASC',
  RatingAccuracyDesc = 'ratingAccuracy_DESC',
  RatingDifficultyAsc = 'ratingDifficulty_ASC',
  RatingDifficultyDesc = 'ratingDifficulty_DESC',
  RatingIngredientsAsc = 'ratingIngredients_ASC',
  RatingIngredientsDesc = 'ratingIngredients_DESC',
  RatingOverallAsc = 'ratingOverall_ASC',
  RatingOverallDesc = 'ratingOverall_DESC',
  RatingTasteAsc = 'ratingTaste_ASC',
  RatingTasteDesc = 'ratingTaste_DESC',
  RecipeIdAsc = 'recipeId_ASC',
  RecipeIdDesc = 'recipeId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/section) */
export type Section = Entry & _Node & {
  __typename?: 'Section';
  _id: Scalars['ID']['output'];
  buttonLink?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  content?: Maybe<SectionContent>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SectionLinkingCollections>;
  showMobileButton?: Maybe<Scalars['Boolean']['output']>;
  showXItemsOnMobile?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/section) */
export type SectionButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/section) */
export type SectionButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/section) */
export type SectionContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/section) */
export type SectionInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/section) */
export type SectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/section) */
export type SectionShowMobileButtonArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/section) */
export type SectionShowXItemsOnMobileArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/section) */
export type SectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SectionCollection = {
  __typename?: 'SectionCollection';
  items: Array<Maybe<Section>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SectionContent = FeaturedArticle | FeaturedRecipe | ItemShowcase;

export type SectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<SectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SectionFilter>>>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  showMobileButton?: InputMaybe<Scalars['Boolean']['input']>;
  showMobileButton_exists?: InputMaybe<Scalars['Boolean']['input']>;
  showMobileButton_not?: InputMaybe<Scalars['Boolean']['input']>;
  showXItemsOnMobile?: InputMaybe<Scalars['Int']['input']>;
  showXItemsOnMobile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  showXItemsOnMobile_gt?: InputMaybe<Scalars['Int']['input']>;
  showXItemsOnMobile_gte?: InputMaybe<Scalars['Int']['input']>;
  showXItemsOnMobile_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  showXItemsOnMobile_lt?: InputMaybe<Scalars['Int']['input']>;
  showXItemsOnMobile_lte?: InputMaybe<Scalars['Int']['input']>;
  showXItemsOnMobile_not?: InputMaybe<Scalars['Int']['input']>;
  showXItemsOnMobile_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionLinkingCollections = {
  __typename?: 'SectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageRecipeCategoryCollection?: Maybe<PageRecipeCategoryCollection>;
  pageShopCategoryCollection?: Maybe<PageShopCategoryCollection>;
};


export type SectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SectionLinkingCollectionsPageRecipeCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionLinkingCollectionsPageRecipeCategoryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SectionLinkingCollectionsPageShopCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionLinkingCollectionsPageShopCategoryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SectionLinkingCollectionsPageRecipeCategoryCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionLinkingCollectionsPageShopCategoryCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SectionOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShowMobileButtonAsc = 'showMobileButton_ASC',
  ShowMobileButtonDesc = 'showMobileButton_DESC',
  ShowXItemsOnMobileAsc = 'showXItemsOnMobile_ASC',
  ShowXItemsOnMobileDesc = 'showXItemsOnMobile_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/seo) */
export type Seo = Entry & _Node & {
  __typename?: 'Seo';
  _id: Scalars['ID']['output'];
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<SeoLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  noFollow?: Maybe<Scalars['Boolean']['output']>;
  noIndex?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/seo) */
export type SeoCanonicalUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/seo) */
export type SeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/seo) */
export type SeoImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/seo) */
export type SeoKeywordsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/seo) */
export type SeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/seo) */
export type SeoNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/seo) */
export type SeoNoFollowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/seo) */
export type SeoNoIndexArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/seo) */
export type SeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  items: Array<Maybe<Seo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SeoLinkingCollections = {
  __typename?: 'SeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageArticleCollection?: Maybe<PageArticleCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageMagazineCollection?: Maybe<PageMagazineCollection>;
  pageRecipeCategoryCollection?: Maybe<PageRecipeCategoryCollection>;
  pageRecipeCollection?: Maybe<PageRecipeCollection>;
  pageShopCategoryCollection?: Maybe<PageShopCategoryCollection>;
  pageShopCollection?: Maybe<PageShopCollection>;
};


export type SeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsPageArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsPageArticleCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsPageMagazineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsPageMagazineCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsPageRecipeCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsPageRecipeCategoryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsPageRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsPageRecipeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsPageShopCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsPageShopCategoryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsPageShopCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsPageShopCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SeoLinkingCollectionsPageArticleCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  ReadDurationInMinAsc = 'readDurationInMin_ASC',
  ReadDurationInMinDesc = 'readDurationInMin_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SeoLinkingCollectionsPageCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SeoLinkingCollectionsPageMagazineCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FlipBookUrlAsc = 'flipBookUrl_ASC',
  FlipBookUrlDesc = 'flipBookUrl_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SeoLinkingCollectionsPageRecipeCategoryCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoLinkingCollectionsPageRecipeCollectionOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  CookingTimeMinutesAsc = 'cookingTimeMinutes_ASC',
  CookingTimeMinutesDesc = 'cookingTimeMinutes_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DifficultyAsc = 'difficulty_ASC',
  DifficultyDesc = 'difficulty_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PersonsAsc = 'persons_ASC',
  PersonsDesc = 'persons_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SeoLinkingCollectionsPageShopCategoryCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoLinkingCollectionsPageShopCollectionOrder {
  CaloriesAsc = 'calories_ASC',
  CaloriesDesc = 'calories_DESC',
  CarbsAsc = 'carbs_ASC',
  CarbsDesc = 'carbs_DESC',
  FatAsc = 'fat_ASC',
  FatDesc = 'fat_DESC',
  FiberAsc = 'fiber_ASC',
  FiberDesc = 'fiber_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ProductBuyButtonLinkAsc = 'productBuyButtonLink_ASC',
  ProductBuyButtonLinkDesc = 'productBuyButtonLink_DESC',
  ProductIsNewAsc = 'productIsNew_ASC',
  ProductIsNewDesc = 'productIsNew_DESC',
  ProductNetWeightAsc = 'productNetWeight_ASC',
  ProductNetWeightDesc = 'productNetWeight_DESC',
  ProductUnitAsc = 'productUnit_ASC',
  ProductUnitDesc = 'productUnit_DESC',
  ProteinAsc = 'protein_ASC',
  ProteinDesc = 'protein_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SugarAsc = 'sugar_ASC',
  SugarDesc = 'sugar_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoOrder {
  CanonicalUrlAsc = 'canonicalUrl_ASC',
  CanonicalUrlDesc = 'canonicalUrl_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NoFollowAsc = 'noFollow_ASC',
  NoFollowDesc = 'noFollow_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/slider) */
export type Slider = Entry & _Node & {
  __typename?: 'Slider';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SliderLinkingCollections>;
  sliderItemCollection?: Maybe<SliderSliderItemCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/slider) */
export type SliderInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/slider) */
export type SliderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/slider) */
export type SliderSliderItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SliderSliderItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SliderItemFilter>;
};

export type SliderCollection = {
  __typename?: 'SliderCollection';
  items: Array<Maybe<Slider>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SliderFilter = {
  AND?: InputMaybe<Array<InputMaybe<SliderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SliderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sliderItem?: InputMaybe<CfSliderItemNestedFilter>;
  sliderItemCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/sliderItem) */
export type SliderItem = Entry & _Node & {
  __typename?: 'SliderItem';
  _id: Scalars['ID']['output'];
  buttonText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SliderItemLinkingCollections>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  timerDate?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/sliderItem) */
export type SliderItemButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/sliderItem) */
export type SliderItemImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/sliderItem) */
export type SliderItemInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/sliderItem) */
export type SliderItemLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/sliderItem) */
export type SliderItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/sliderItem) */
export type SliderItemSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/sliderItem) */
export type SliderItemTimerDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/sliderItem) */
export type SliderItemTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/sliderItem) */
export type SliderItemTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SliderItemCollection = {
  __typename?: 'SliderItemCollection';
  items: Array<Maybe<SliderItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SliderItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<SliderItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SliderItemFilter>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  timerDate?: InputMaybe<Scalars['DateTime']['input']>;
  timerDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  timerDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  timerDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  timerDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  timerDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  timerDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  timerDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  timerDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SliderItemLinkingCollections = {
  __typename?: 'SliderItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sliderCollection?: Maybe<SliderCollection>;
};


export type SliderItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SliderItemLinkingCollectionsSliderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SliderItemLinkingCollectionsSliderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SliderItemLinkingCollectionsSliderCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SliderItemOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TimerDateAsc = 'timerDate_ASC',
  TimerDateDesc = 'timerDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type SliderLinkingCollections = {
  __typename?: 'SliderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SliderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SliderOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SliderSliderItemCollection = {
  __typename?: 'SliderSliderItemCollection';
  items: Array<Maybe<SliderItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SliderSliderItemCollectionOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TimerDateAsc = 'timerDate_ASC',
  TimerDateDesc = 'timerDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/socialItem) */
export type SocialItem = Entry & _Node & {
  __typename?: 'SocialItem';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SocialItemLinkingCollections>;
  sys: Sys;
  url?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/socialItem) */
export type SocialItemInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/socialItem) */
export type SocialItemKeyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/socialItem) */
export type SocialItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/wa6vhmn3d2y6/content_types/socialItem) */
export type SocialItemUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SocialItemCollection = {
  __typename?: 'SocialItemCollection';
  items: Array<Maybe<SocialItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SocialItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<SocialItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  key?: InputMaybe<Scalars['String']['input']>;
  key_contains?: InputMaybe<Scalars['String']['input']>;
  key_exists?: InputMaybe<Scalars['Boolean']['input']>;
  key_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  key_not?: InputMaybe<Scalars['String']['input']>;
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  key_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SocialItemLinkingCollections = {
  __typename?: 'SocialItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
};


export type SocialItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SocialItemLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SocialItemLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SocialItemLinkingCollectionsFooterCollectionOrder {
  FollowLabelAsc = 'followLabel_ASC',
  FollowLabelDesc = 'followLabel_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SocialItemOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfComponentAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentAuthorNestedFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfIngredientNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfIngredientNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfIngredientNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  producedByGoody?: InputMaybe<Scalars['Boolean']['input']>;
  producedByGoody_exists?: InputMaybe<Scalars['Boolean']['input']>;
  producedByGoody_not?: InputMaybe<Scalars['Boolean']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  quantity_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quantity_gt?: InputMaybe<Scalars['Float']['input']>;
  quantity_gte?: InputMaybe<Scalars['Float']['input']>;
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  quantity_lt?: InputMaybe<Scalars['Float']['input']>;
  quantity_lte?: InputMaybe<Scalars['Float']['input']>;
  quantity_not?: InputMaybe<Scalars['Float']['input']>;
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  unit?: InputMaybe<Scalars['String']['input']>;
  unitValue?: InputMaybe<Scalars['String']['input']>;
  unitValue_contains?: InputMaybe<Scalars['String']['input']>;
  unitValue_exists?: InputMaybe<Scalars['Boolean']['input']>;
  unitValue_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unitValue_not?: InputMaybe<Scalars['String']['input']>;
  unitValue_not_contains?: InputMaybe<Scalars['String']['input']>;
  unitValue_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unit_contains?: InputMaybe<Scalars['String']['input']>;
  unit_exists?: InputMaybe<Scalars['Boolean']['input']>;
  unit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unit_not?: InputMaybe<Scalars['String']['input']>;
  unit_not_contains?: InputMaybe<Scalars['String']['input']>;
  unit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfNavigationLinkItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNavigationLinkItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNavigationLinkItemNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationLinkItemCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  page_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPageArticleNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageArticleNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageArticleNestedFilter>>>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content_not?: InputMaybe<Scalars['String']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredArticlesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  rating_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating_gt?: InputMaybe<Scalars['Float']['input']>;
  rating_gte?: InputMaybe<Scalars['Float']['input']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  rating_lt?: InputMaybe<Scalars['Float']['input']>;
  rating_lte?: InputMaybe<Scalars['Float']['input']>;
  rating_not?: InputMaybe<Scalars['Float']['input']>;
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  readDurationInMin?: InputMaybe<Scalars['Int']['input']>;
  readDurationInMin_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readDurationInMin_gt?: InputMaybe<Scalars['Int']['input']>;
  readDurationInMin_gte?: InputMaybe<Scalars['Int']['input']>;
  readDurationInMin_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  readDurationInMin_lt?: InputMaybe<Scalars['Int']['input']>;
  readDurationInMin_lte?: InputMaybe<Scalars['Int']['input']>;
  readDurationInMin_not?: InputMaybe<Scalars['Int']['input']>;
  readDurationInMin_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPageMagazineNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageMagazineNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageMagazineNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  flipBookUrl?: InputMaybe<Scalars['String']['input']>;
  flipBookUrl_contains?: InputMaybe<Scalars['String']['input']>;
  flipBookUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  flipBookUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  flipBookUrl_not?: InputMaybe<Scalars['String']['input']>;
  flipBookUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  flipBookUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPageRecipeCategoryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageRecipeCategoryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageRecipeCategoryNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageRecipeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageRecipeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageRecipeNestedFilter>>>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  calories?: InputMaybe<Scalars['Int']['input']>;
  calories_exists?: InputMaybe<Scalars['Boolean']['input']>;
  calories_gt?: InputMaybe<Scalars['Int']['input']>;
  calories_gte?: InputMaybe<Scalars['Int']['input']>;
  calories_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  calories_lt?: InputMaybe<Scalars['Int']['input']>;
  calories_lte?: InputMaybe<Scalars['Int']['input']>;
  calories_not?: InputMaybe<Scalars['Int']['input']>;
  calories_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cookingTimeMinutes?: InputMaybe<Scalars['Int']['input']>;
  cookingTimeMinutes_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cookingTimeMinutes_gt?: InputMaybe<Scalars['Int']['input']>;
  cookingTimeMinutes_gte?: InputMaybe<Scalars['Int']['input']>;
  cookingTimeMinutes_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  cookingTimeMinutes_lt?: InputMaybe<Scalars['Int']['input']>;
  cookingTimeMinutes_lte?: InputMaybe<Scalars['Int']['input']>;
  cookingTimeMinutes_not?: InputMaybe<Scalars['Int']['input']>;
  cookingTimeMinutes_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  difficulty_contains?: InputMaybe<Scalars['String']['input']>;
  difficulty_exists?: InputMaybe<Scalars['Boolean']['input']>;
  difficulty_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  difficulty_not?: InputMaybe<Scalars['String']['input']>;
  difficulty_not_contains?: InputMaybe<Scalars['String']['input']>;
  difficulty_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ingredientsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  persons?: InputMaybe<Scalars['Int']['input']>;
  persons_exists?: InputMaybe<Scalars['Boolean']['input']>;
  persons_gt?: InputMaybe<Scalars['Int']['input']>;
  persons_gte?: InputMaybe<Scalars['Int']['input']>;
  persons_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  persons_lt?: InputMaybe<Scalars['Int']['input']>;
  persons_lte?: InputMaybe<Scalars['Int']['input']>;
  persons_not?: InputMaybe<Scalars['Int']['input']>;
  persons_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  preparationStepsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  rating_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating_gt?: InputMaybe<Scalars['Float']['input']>;
  rating_gte?: InputMaybe<Scalars['Float']['input']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  rating_lt?: InputMaybe<Scalars['Float']['input']>;
  rating_lte?: InputMaybe<Scalars['Float']['input']>;
  rating_not?: InputMaybe<Scalars['Float']['input']>;
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  relatedRecipesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPageShopCategoryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageShopCategoryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageShopCategoryNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageShopNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageShopNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageShopNestedFilter>>>;
  alsoViewedCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  calories?: InputMaybe<Scalars['String']['input']>;
  calories_contains?: InputMaybe<Scalars['String']['input']>;
  calories_exists?: InputMaybe<Scalars['Boolean']['input']>;
  calories_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  calories_not?: InputMaybe<Scalars['String']['input']>;
  calories_not_contains?: InputMaybe<Scalars['String']['input']>;
  calories_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  carbs?: InputMaybe<Scalars['String']['input']>;
  carbs_contains?: InputMaybe<Scalars['String']['input']>;
  carbs_exists?: InputMaybe<Scalars['Boolean']['input']>;
  carbs_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  carbs_not?: InputMaybe<Scalars['String']['input']>;
  carbs_not_contains?: InputMaybe<Scalars['String']['input']>;
  carbs_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fat?: InputMaybe<Scalars['String']['input']>;
  fat_contains?: InputMaybe<Scalars['String']['input']>;
  fat_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fat_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fat_not?: InputMaybe<Scalars['String']['input']>;
  fat_not_contains?: InputMaybe<Scalars['String']['input']>;
  fat_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fiber?: InputMaybe<Scalars['String']['input']>;
  fiber_contains?: InputMaybe<Scalars['String']['input']>;
  fiber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fiber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fiber_not?: InputMaybe<Scalars['String']['input']>;
  fiber_not_contains?: InputMaybe<Scalars['String']['input']>;
  fiber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  ingredients_contains?: InputMaybe<Scalars['String']['input']>;
  ingredients_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ingredients_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ingredients_not?: InputMaybe<Scalars['String']['input']>;
  ingredients_not_contains?: InputMaybe<Scalars['String']['input']>;
  ingredients_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productBuyButtonLink?: InputMaybe<Scalars['String']['input']>;
  productBuyButtonLink_contains?: InputMaybe<Scalars['String']['input']>;
  productBuyButtonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productBuyButtonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productBuyButtonLink_not?: InputMaybe<Scalars['String']['input']>;
  productBuyButtonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  productBuyButtonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productIsNew?: InputMaybe<Scalars['Boolean']['input']>;
  productIsNew_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productIsNew_not?: InputMaybe<Scalars['Boolean']['input']>;
  productNetWeight?: InputMaybe<Scalars['Int']['input']>;
  productNetWeight_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productNetWeight_gt?: InputMaybe<Scalars['Int']['input']>;
  productNetWeight_gte?: InputMaybe<Scalars['Int']['input']>;
  productNetWeight_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  productNetWeight_lt?: InputMaybe<Scalars['Int']['input']>;
  productNetWeight_lte?: InputMaybe<Scalars['Int']['input']>;
  productNetWeight_not?: InputMaybe<Scalars['Int']['input']>;
  productNetWeight_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  productUnit?: InputMaybe<Scalars['String']['input']>;
  productUnit_contains?: InputMaybe<Scalars['String']['input']>;
  productUnit_exists?: InputMaybe<Scalars['Boolean']['input']>;
  productUnit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productUnit_not?: InputMaybe<Scalars['String']['input']>;
  productUnit_not_contains?: InputMaybe<Scalars['String']['input']>;
  productUnit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  protein?: InputMaybe<Scalars['String']['input']>;
  protein_contains?: InputMaybe<Scalars['String']['input']>;
  protein_exists?: InputMaybe<Scalars['Boolean']['input']>;
  protein_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  protein_not?: InputMaybe<Scalars['String']['input']>;
  protein_not_contains?: InputMaybe<Scalars['String']['input']>;
  protein_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  rating_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating_gt?: InputMaybe<Scalars['Float']['input']>;
  rating_gte?: InputMaybe<Scalars['Float']['input']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  rating_lt?: InputMaybe<Scalars['Float']['input']>;
  rating_lte?: InputMaybe<Scalars['Float']['input']>;
  rating_not?: InputMaybe<Scalars['Float']['input']>;
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  specialty?: InputMaybe<Scalars['String']['input']>;
  specialty_contains?: InputMaybe<Scalars['String']['input']>;
  specialty_exists?: InputMaybe<Scalars['Boolean']['input']>;
  specialty_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  specialty_not?: InputMaybe<Scalars['String']['input']>;
  specialty_not_contains?: InputMaybe<Scalars['String']['input']>;
  specialty_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storageRequirements?: InputMaybe<Scalars['String']['input']>;
  storageRequirements_contains?: InputMaybe<Scalars['String']['input']>;
  storageRequirements_exists?: InputMaybe<Scalars['Boolean']['input']>;
  storageRequirements_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storageRequirements_not?: InputMaybe<Scalars['String']['input']>;
  storageRequirements_not_contains?: InputMaybe<Scalars['String']['input']>;
  storageRequirements_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sugar?: InputMaybe<Scalars['String']['input']>;
  sugar_contains?: InputMaybe<Scalars['String']['input']>;
  sugar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sugar_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sugar_not?: InputMaybe<Scalars['String']['input']>;
  sugar_not_contains?: InputMaybe<Scalars['String']['input']>;
  sugar_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPreparationStepNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPreparationStepNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPreparationStepNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSectionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSectionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSectionNestedFilter>>>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  showMobileButton?: InputMaybe<Scalars['Boolean']['input']>;
  showMobileButton_exists?: InputMaybe<Scalars['Boolean']['input']>;
  showMobileButton_not?: InputMaybe<Scalars['Boolean']['input']>;
  showXItemsOnMobile?: InputMaybe<Scalars['Int']['input']>;
  showXItemsOnMobile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  showXItemsOnMobile_gt?: InputMaybe<Scalars['Int']['input']>;
  showXItemsOnMobile_gte?: InputMaybe<Scalars['Int']['input']>;
  showXItemsOnMobile_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  showXItemsOnMobile_lt?: InputMaybe<Scalars['Int']['input']>;
  showXItemsOnMobile_lte?: InputMaybe<Scalars['Int']['input']>;
  showXItemsOnMobile_not?: InputMaybe<Scalars['Int']['input']>;
  showXItemsOnMobile_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfSliderItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSliderItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSliderItemNestedFilter>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  timerDate?: InputMaybe<Scalars['DateTime']['input']>;
  timerDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  timerDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  timerDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  timerDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  timerDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  timerDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  timerDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  timerDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfSocialItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSocialItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSocialItemNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  key?: InputMaybe<Scalars['String']['input']>;
  key_contains?: InputMaybe<Scalars['String']['input']>;
  key_exists?: InputMaybe<Scalars['Boolean']['input']>;
  key_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  key_not?: InputMaybe<Scalars['String']['input']>;
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  key_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfitemsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfitemsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfitemsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type FeaturedArticleFieldsFragment = { __typename?: 'FeaturedArticle', article?: { __typename?: 'PageArticle', title?: string, subtitle?: string, slug?: string, rating?: number, readDurationInMin?: number, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any }, image?: { __typename?: 'Asset', url?: string, description?: string, width?: number, height?: number }, author?: { __typename?: 'ComponentAuthor', name?: string, avatar?: { __typename?: 'Asset', url?: string, description?: string, width?: number, height?: number } } } };

export type FeaturedArticleQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type FeaturedArticleQueryQuery = { __typename?: 'Query', featuredArticle?: (
    { __typename?: 'FeaturedArticle', sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any } }
    & FeaturedArticleFieldsFragment
  ) };

export type FeaturedMagazineFieldsFragment = { __typename?: 'FeaturedMagazine', magazine?: { __typename?: 'PageMagazine', title?: string, subtitle?: string, flipBookUrl?: string, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any }, image?: { __typename?: 'Asset', url?: string, description?: string, width?: number, height?: number } } };

export type FeaturedMagazineQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type FeaturedMagazineQueryQuery = { __typename?: 'Query', featuredMagazine?: (
    { __typename?: 'FeaturedMagazine', sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any } }
    & FeaturedMagazineFieldsFragment
  ) };

export type FeaturedRecipeFieldsFragment = { __typename?: 'FeaturedRecipe', recipe?: { __typename?: 'PageRecipe', slug?: string, title?: string, description?: string, cookingTimeMinutes?: number, persons?: number, difficulty?: string, calories?: number, rating?: number, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any }, category?: { __typename?: 'PageRecipeCategory', slug?: string }, image?: { __typename?: 'Asset', url?: string, description?: string, width?: number, height?: number }, author?: { __typename?: 'ComponentAuthor', name?: string, avatar?: { __typename?: 'Asset', url?: string, description?: string, width?: number, height?: number } } } };

export type FeaturedRecipeQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type FeaturedRecipeQueryQuery = { __typename?: 'Query', featuredRecipe?: (
    { __typename?: 'FeaturedRecipe', sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any } }
    & FeaturedRecipeFieldsFragment
  ) };

export type FooterQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type FooterQuery = { __typename?: 'Query', footerCollection?: { __typename?: 'FooterCollection', items: Array<{ __typename?: 'Footer', followLabel?: string, socialItemsCollection?: { __typename?: 'FooterSocialItemsCollection', items: Array<{ __typename?: 'SocialItem', key?: string, url?: string }> }, menuLinksCollection?: { __typename?: 'FooterMenuLinksCollection', items: Array<{ __typename?: 'NavigationLinkItem', title?: string, page?: { __typename?: 'Page', slug?: string } | { __typename?: 'PageRecipeCategory' } | { __typename?: 'PageShopCategory' }, navigationLinkItemCollection?: { __typename?: 'NavigationLinkItemNavigationLinkItemCollection', items: Array<{ __typename?: 'NavigationLinkItem', title?: string, page?: { __typename: 'Page', slug?: string } | { __typename?: 'PageRecipeCategory', slug?: string } | { __typename?: 'PageShopCategory', slug?: string } }> } }> }, legalLinksCollection?: { __typename?: 'FooterLegalLinksCollection', items: Array<{ __typename?: 'NavigationLinkItem', title?: string, page?: { __typename?: 'Page', _id: string, slug?: string } | { __typename?: 'PageRecipeCategory' } | { __typename?: 'PageShopCategory' } }> } }> } };

export type HeaderQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type HeaderQuery = { __typename?: 'Query', headerCollection?: { __typename?: 'HeaderCollection', items: Array<{ __typename?: 'Header', _id: string, internalName?: string, headerSearch?: any, userMenu?: any, navigationItems?: any }> } };

export type ItemShowcaseFieldsFragment = { __typename?: 'ItemShowcase', sys: { __typename: 'Sys', id: string }, itemsCollection?: { __typename?: 'ItemShowcaseItemsCollection', items: Array<{ __typename: 'PageArticle', slug?: string, title?: string, rating?: number, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any }, image?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number }, author?: { __typename?: 'ComponentAuthor', name?: string, avatar?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number } } } | { __typename: 'PageMagazine', title?: string, subtitle?: string, description?: string, flipBookUrl?: string, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any }, image?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number } } | { __typename: 'PageRecipe', slug?: string, title?: string, description?: string, rating?: number, category?: { __typename?: 'PageRecipeCategory', slug?: string }, image?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number }, author?: { __typename?: 'ComponentAuthor', name?: string, avatar?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number } } } | { __typename: 'PageShop', slug?: string, name?: string, productNetWeight?: number, productUnit?: string, productIsNew?: boolean, rating?: number, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any }, category?: { __typename?: 'PageShopCategory', slug?: string }, image?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number } }> } };

export type ItemShowcaseQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ItemShowcaseQueryQuery = { __typename?: 'Query', itemShowcase?: (
    { __typename?: 'ItemShowcase' }
    & ItemShowcaseFieldsFragment
  ) };

export type MainNavigationQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type MainNavigationQuery = { __typename?: 'Query', mainNavigationCollection?: { __typename?: 'MainNavigationCollection', items: Array<{ __typename: 'MainNavigation', sys: { __typename?: 'Sys', id: string }, itemsCollection?: { __typename?: 'MainNavigationItemsCollection', items: Array<{ __typename?: 'Page', _id: string, slug?: string, title?: string, pageName?: string, sys: { __typename?: 'Sys', id: string } }> } }> } };

export type FeaturedArticleShortFieldsFragment = { __typename?: 'PageArticle', _id: string, slug?: string, title?: string, subtitle?: string, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any }, image?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number } };

export type PageArticleFieldsFragment = { __typename?: 'PageArticle', slug?: string, title?: string, subtitle?: string, readDurationInMin?: number, content?: string, rating?: number, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any }, image?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number }, author?: { __typename?: 'ComponentAuthor', name?: string, avatar?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number } }, featuredArticlesCollection?: { __typename?: 'PageArticleFeaturedArticlesCollection', items: Array<(
      { __typename?: 'PageArticle' }
      & FeaturedArticleShortFieldsFragment
    )> }, seo?: { __typename?: 'Seo', name?: string, title?: string, description?: string, canonicalUrl?: string, noFollow?: boolean, noIndex?: boolean, image?: { __typename?: 'Asset', title?: string, description?: string, contentType?: string, url?: string, width?: number, height?: number } } };

export type PageArticleQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageArticleQuery = { __typename?: 'Query', pageArticleCollection?: { __typename?: 'PageArticleCollection', items: Array<(
      { __typename?: 'PageArticle' }
      & PageArticleFieldsFragment
    )> } };

export type PageRecipeCategoryFieldsFragment = { __typename?: 'PageRecipeCategory', slug?: string, sys: { __typename?: 'Sys', id: string }, sectionCollection?: { __typename?: 'PageRecipeCategorySectionCollection', items: Array<{ __typename: 'Section', sys: { __typename?: 'Sys', id: string } }> }, seo?: { __typename?: 'Seo', name?: string, title?: string, description?: string, canonicalUrl?: string, noFollow?: boolean, noIndex?: boolean, image?: { __typename?: 'Asset', title?: string, description?: string, contentType?: string, url?: string, width?: number, height?: number } } };

export type PageRecipeCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageRecipeCategoryQuery = { __typename?: 'Query', pageRecipeCategoryCollection?: { __typename?: 'PageRecipeCategoryCollection', items: Array<(
      { __typename?: 'PageRecipeCategory' }
      & PageRecipeCategoryFieldsFragment
    )> } };

export type RelatedRecipeFieldsFragment = { __typename: 'PageRecipe', _id: string, slug?: string, title?: string, description?: string, rating?: number, sys: { __typename?: 'Sys', id: string }, category?: { __typename?: 'PageRecipeCategory', slug?: string }, image?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number }, author?: { __typename?: 'ComponentAuthor', name?: string, avatar?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number } } };

export type PageRecipeFieldsFragment = { __typename?: 'PageRecipe', _id: string, slug?: string, title?: string, description?: string, cookingTimeMinutes?: number, persons?: number, difficulty?: string, calories?: number, rating?: number, sys: { __typename?: 'Sys', id: string }, category?: { __typename?: 'PageRecipeCategory', slug?: string }, image?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number }, author?: { __typename?: 'ComponentAuthor', name?: string, avatar?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number } }, preparationStepsCollection?: { __typename?: 'PageRecipePreparationStepsCollection', items: Array<{ __typename?: 'PreparationStep', _id: string, description?: string, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number } }> }, ingredientsCollection?: { __typename?: 'PageRecipeIngredientsCollection', items: Array<{ __typename?: 'Ingredient', _id: string, name?: string, quantity?: number, unitValue?: string, unit?: string, producedByGoody?: boolean, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number } }> }, relatedRecipesCollection?: { __typename?: 'PageRecipeRelatedRecipesCollection', items: Array<(
      { __typename?: 'PageRecipe' }
      & RelatedRecipeFieldsFragment
    )> }, seo?: { __typename?: 'Seo', name?: string, title?: string, description?: string, canonicalUrl?: string, noFollow?: boolean, noIndex?: boolean, image?: { __typename?: 'Asset', title?: string, description?: string, contentType?: string, url?: string, width?: number, height?: number } } };

export type PageRecipeQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageRecipeQuery = { __typename?: 'Query', pageRecipeCollection?: { __typename?: 'PageRecipeCollection', items: Array<(
      { __typename?: 'PageRecipe' }
      & PageRecipeFieldsFragment
    )> } };

export type AlsoViewedFieldsFragment = { __typename: 'PageShop', slug?: string, name?: string, description?: string, productNetWeight?: number, productUnit?: string, rating?: number, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any }, category?: { __typename?: 'PageShopCategory', slug?: string }, image?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number } };

export type PageShopFieldsFragment = { __typename: 'PageShop', slug?: string, name?: string, description?: string, productNetWeight?: number, productUnit?: string, ingredients?: string, specialty?: string, storageRequirements?: string, calories?: string, carbs?: string, fat?: string, protein?: string, sugar?: string, fiber?: string, productIsNew?: boolean, rating?: number, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any }, category?: { __typename?: 'PageShopCategory', slug?: string }, image?: { __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number }, imagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string, title?: string, width?: number, height?: number }> }, alsoViewedCollection?: { __typename?: 'PageShopAlsoViewedCollection', items: Array<(
      { __typename?: 'PageShop' }
      & AlsoViewedFieldsFragment
    )> }, seo?: { __typename?: 'Seo', name?: string, title?: string, description?: string, canonicalUrl?: string, noFollow?: boolean, noIndex?: boolean, image?: { __typename?: 'Asset', title?: string, description?: string, contentType?: string, url?: string, width?: number, height?: number } } };

export type PageShopQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageShopQuery = { __typename?: 'Query', pageShopCollection?: { __typename?: 'PageShopCollection', items: Array<(
      { __typename?: 'PageShop' }
      & PageShopFieldsFragment
    )> } };

export type PageFieldsFragment = { __typename?: 'Page', slug?: string, title?: string, pageName?: string, sys: { __typename?: 'Sys', id: string }, sectionCollection?: { __typename?: 'PageSectionCollection', items: Array<{ __typename: 'ComponentAuthor', sys: { __typename?: 'Sys', id: string } } | { __typename: 'FeaturedArticle', sys: { __typename?: 'Sys', id: string } } | { __typename: 'FeaturedMagazine', sys: { __typename?: 'Sys', id: string } } | { __typename: 'FeaturedRecipe', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Footer', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Header', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Ingredient', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ItemShowcase', sys: { __typename?: 'Sys', id: string } } | { __typename: 'MainNavigation', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NavigationLinkItem', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename: 'PageArticle', sys: { __typename?: 'Sys', id: string } } | { __typename: 'PageMagazine', sys: { __typename?: 'Sys', id: string } } | { __typename: 'PageRecipe', sys: { __typename?: 'Sys', id: string } } | { __typename: 'PageRecipeCategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'PageShop', sys: { __typename?: 'Sys', id: string } } | { __typename: 'PageShopCategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'PreparationStep', sys: { __typename?: 'Sys', id: string } } | { __typename: 'RecipeReview', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Section', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Slider', sys: { __typename?: 'Sys', id: string } } | { __typename: 'SliderItem', sys: { __typename?: 'Sys', id: string } } | { __typename: 'SocialItem', sys: { __typename?: 'Sys', id: string } }> }, seo?: { __typename?: 'Seo', name?: string, title?: string, description?: string, canonicalUrl?: string, noFollow?: boolean, noIndex?: boolean, image?: { __typename?: 'Asset', title?: string, description?: string, contentType?: string, url?: string, width?: number, height?: number } } };

export type PageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<(
      { __typename?: 'Page' }
      & PageFieldsFragment
    )> } };

export type RecipeReviewFieldsFragment = { __typename?: 'RecipeReview', _id: string, content?: string, isApproved?: boolean, ratingOverall?: number, ratingIngredients?: number, ratingAccuracy?: number, ratingDifficulty?: number, ratingTaste?: number, sys: { __typename: 'Sys', id: string, firstPublishedAt?: any }, recipe?: { __typename?: 'PageRecipe', _id: string, sys: { __typename?: 'Sys', id: string } }, author?: { __typename?: 'ComponentAuthor', name?: string, avatar?: { __typename?: 'Asset', url?: string, description?: string, width?: number, height?: number } }, imagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string, description?: string, width?: number, height?: number, sys: { __typename?: 'Sys', id: string } }> } };

export type RecipeReviewsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<RecipeReviewOrder>> | InputMaybe<RecipeReviewOrder>>;
}>;


export type RecipeReviewsQuery = { __typename?: 'Query', recipeReviewCollection?: { __typename?: 'RecipeReviewCollection', total: number, items: Array<(
      { __typename?: 'RecipeReview' }
      & RecipeReviewFieldsFragment
    )> } };

export type SectionFieldsFragment = { __typename?: 'Section', title?: string, buttonText?: string, buttonLink?: string, showXItemsOnMobile?: number, showMobileButton?: boolean, sys: { __typename?: 'Sys', id: string }, content?: { __typename: 'FeaturedArticle', sys: { __typename?: 'Sys', id: string } } | { __typename: 'FeaturedRecipe', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ItemShowcase', sys: { __typename?: 'Sys', id: string } } };

export type SectionQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type SectionQueryQuery = { __typename?: 'Query', section?: (
    { __typename?: 'Section' }
    & SectionFieldsFragment
  ) };

export type ComponentReferenceFields_ComponentAuthor_Fragment = { __typename: 'ComponentAuthor', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_FeaturedArticle_Fragment = { __typename: 'FeaturedArticle', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_FeaturedMagazine_Fragment = { __typename: 'FeaturedMagazine', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_FeaturedRecipe_Fragment = { __typename: 'FeaturedRecipe', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Footer_Fragment = { __typename: 'Footer', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Header_Fragment = { __typename: 'Header', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Ingredient_Fragment = { __typename: 'Ingredient', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_ItemShowcase_Fragment = { __typename: 'ItemShowcase', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_MainNavigation_Fragment = { __typename: 'MainNavigation', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_NavigationLinkItem_Fragment = { __typename: 'NavigationLinkItem', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Page_Fragment = { __typename: 'Page', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_PageArticle_Fragment = { __typename: 'PageArticle', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_PageMagazine_Fragment = { __typename: 'PageMagazine', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_PageRecipe_Fragment = { __typename: 'PageRecipe', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_PageRecipeCategory_Fragment = { __typename: 'PageRecipeCategory', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_PageShop_Fragment = { __typename: 'PageShop', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_PageShopCategory_Fragment = { __typename: 'PageShopCategory', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_PreparationStep_Fragment = { __typename: 'PreparationStep', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_RecipeReview_Fragment = { __typename: 'RecipeReview', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Section_Fragment = { __typename: 'Section', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Seo_Fragment = { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Slider_Fragment = { __typename: 'Slider', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_SliderItem_Fragment = { __typename: 'SliderItem', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_SocialItem_Fragment = { __typename: 'SocialItem', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFieldsFragment = ComponentReferenceFields_ComponentAuthor_Fragment | ComponentReferenceFields_FeaturedArticle_Fragment | ComponentReferenceFields_FeaturedMagazine_Fragment | ComponentReferenceFields_FeaturedRecipe_Fragment | ComponentReferenceFields_Footer_Fragment | ComponentReferenceFields_Header_Fragment | ComponentReferenceFields_Ingredient_Fragment | ComponentReferenceFields_ItemShowcase_Fragment | ComponentReferenceFields_MainNavigation_Fragment | ComponentReferenceFields_NavigationLinkItem_Fragment | ComponentReferenceFields_Page_Fragment | ComponentReferenceFields_PageArticle_Fragment | ComponentReferenceFields_PageMagazine_Fragment | ComponentReferenceFields_PageRecipe_Fragment | ComponentReferenceFields_PageRecipeCategory_Fragment | ComponentReferenceFields_PageShop_Fragment | ComponentReferenceFields_PageShopCategory_Fragment | ComponentReferenceFields_PreparationStep_Fragment | ComponentReferenceFields_RecipeReview_Fragment | ComponentReferenceFields_Section_Fragment | ComponentReferenceFields_Seo_Fragment | ComponentReferenceFields_Slider_Fragment | ComponentReferenceFields_SliderItem_Fragment | ComponentReferenceFields_SocialItem_Fragment;

export type SliderFieldsFragment = { __typename?: 'Slider', sliderItemCollection?: { __typename?: 'SliderSliderItemCollection', items: Array<{ __typename?: 'SliderItem', internalName?: string, type?: string, title?: string, subtitle?: string, link?: string, buttonText?: string, timerDate?: any, image?: { __typename?: 'Asset', url?: string, description?: string, width?: number, height?: number } }> } };

export type SliderQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type SliderQuery = { __typename?: 'Query', sliderCollection?: { __typename?: 'SliderCollection', items: Array<(
      { __typename?: 'Slider' }
      & SliderFieldsFragment
    )> } };

export const FeaturedArticleFieldsFragmentDoc = gql`
    fragment FeaturedArticleFields on FeaturedArticle {
  article {
    sys {
      id
      firstPublishedAt
    }
    title
    subtitle
    slug
    rating
    image {
      url
      description
      width
      height
    }
    readDurationInMin
    author {
      name
      avatar {
        url
        description
        width
        height
      }
    }
  }
}
    `;
export const FeaturedMagazineFieldsFragmentDoc = gql`
    fragment FeaturedMagazineFields on FeaturedMagazine {
  magazine {
    sys {
      id
      firstPublishedAt
    }
    title
    subtitle
    flipBookUrl
    image {
      url
      description
      width
      height
    }
  }
}
    `;
export const FeaturedRecipeFieldsFragmentDoc = gql`
    fragment FeaturedRecipeFields on FeaturedRecipe {
  recipe {
    sys {
      id
      firstPublishedAt
    }
    slug
    category {
      slug
    }
    title
    description
    cookingTimeMinutes
    persons
    difficulty
    calories
    rating
    image {
      url
      description
      width
      height
    }
    author {
      name
      avatar {
        url
        description
        width
        height
      }
    }
  }
}
    `;
export const ItemShowcaseFieldsFragmentDoc = gql`
    fragment ItemShowcaseFields on ItemShowcase {
  sys {
    __typename
    id
  }
  itemsCollection {
    items {
      ... on PageRecipe {
        __typename
        slug
        category {
          slug
        }
        title
        description
        rating
        image {
          url
          title
          width
          height
        }
        author {
          name
          avatar {
            url
            title
            width
            height
          }
        }
      }
      ... on PageArticle {
        __typename
        sys {
          id
          firstPublishedAt
        }
        slug
        title
        rating
        image {
          url
          title
          width
          height
        }
        author {
          name
          avatar {
            url
            title
            width
            height
          }
        }
      }
      ... on PageMagazine {
        __typename
        sys {
          id
          firstPublishedAt
        }
        title
        subtitle
        description
        image {
          url
          title
          width
          height
        }
        flipBookUrl
      }
      ... on PageShop {
        __typename
        sys {
          id
          firstPublishedAt
        }
        slug
        category {
          slug
        }
        name
        productNetWeight
        productUnit
        productIsNew
        rating
        image {
          url
          title
          width
          height
        }
      }
    }
  }
}
    `;
export const FeaturedArticleShortFieldsFragmentDoc = gql`
    fragment FeaturedArticleShortFields on PageArticle {
  sys {
    id
    firstPublishedAt
  }
  _id
  slug
  title
  subtitle
  image {
    url
    title
    width
    height
  }
}
    `;
export const PageArticleFieldsFragmentDoc = gql`
    fragment PageArticleFields on PageArticle {
  sys {
    id
    firstPublishedAt
  }
  slug
  title
  subtitle
  readDurationInMin
  content
  rating
  image {
    url
    title
    width
    height
  }
  author {
    name
    avatar {
      url
      title
      width
      height
    }
  }
  featuredArticlesCollection {
    items {
      ...FeaturedArticleShortFields
    }
  }
  seo {
    name
    title
    description
    canonicalUrl
    image {
      title
      description
      contentType
      url
      width
      height
    }
    noFollow
    noIndex
  }
}
    `;
export const PageRecipeCategoryFieldsFragmentDoc = gql`
    fragment PageRecipeCategoryFields on PageRecipeCategory {
  sys {
    id
  }
  slug
  sectionCollection {
    items {
      __typename
      sys {
        id
      }
    }
  }
  seo {
    name
    title
    description
    canonicalUrl
    image {
      title
      description
      contentType
      url
      width
      height
    }
    noFollow
    noIndex
  }
}
    `;
export const RelatedRecipeFieldsFragmentDoc = gql`
    fragment RelatedRecipeFields on PageRecipe {
  __typename
  sys {
    id
  }
  _id
  slug
  title
  description
  category {
    slug
  }
  rating
  image {
    url
    title
    width
    height
  }
  author {
    name
    avatar {
      url
      title
      width
      height
    }
  }
}
    `;
export const PageRecipeFieldsFragmentDoc = gql`
    fragment PageRecipeFields on PageRecipe {
  sys {
    id
  }
  _id
  slug
  title
  description
  category {
    slug
  }
  cookingTimeMinutes
  persons
  difficulty
  calories
  rating
  image {
    url
    title
    width
    height
  }
  author {
    name
    avatar {
      url
      title
      width
      height
    }
  }
  preparationStepsCollection {
    items {
      _id
      sys {
        id
      }
      image {
        url
        title
        width
        height
      }
      description
    }
  }
  ingredientsCollection {
    items {
      _id
      sys {
        id
      }
      name
      quantity
      unitValue
      unit
      producedByGoody
      image {
        url
        title
        width
        height
      }
    }
  }
  relatedRecipesCollection {
    items {
      ...RelatedRecipeFields
    }
  }
  seo {
    name
    title
    description
    canonicalUrl
    image {
      title
      description
      contentType
      url
      width
      height
    }
    noFollow
    noIndex
  }
}
    `;
export const AlsoViewedFieldsFragmentDoc = gql`
    fragment AlsoViewedFields on PageShop {
  __typename
  sys {
    id
    firstPublishedAt
  }
  slug
  category {
    slug
  }
  name
  description
  productNetWeight
  productUnit
  rating
  image {
    url
    title
    width
    height
  }
}
    `;
export const PageShopFieldsFragmentDoc = gql`
    fragment PageShopFields on PageShop {
  __typename
  sys {
    id
    firstPublishedAt
  }
  slug
  category {
    slug
  }
  name
  description
  productNetWeight
  productUnit
  ingredients
  specialty
  storageRequirements
  calories
  carbs
  fat
  protein
  sugar
  fiber
  productIsNew
  rating
  image {
    url
    title
    width
    height
  }
  imagesCollection {
    items {
      url
      title
      width
      height
    }
  }
  alsoViewedCollection {
    items {
      ...AlsoViewedFields
    }
  }
  seo {
    name
    title
    description
    canonicalUrl
    image {
      title
      description
      contentType
      url
      width
      height
    }
    noFollow
    noIndex
  }
}
    `;
export const PageFieldsFragmentDoc = gql`
    fragment PageFields on Page {
  slug
  title
  pageName
  sys {
    id
  }
  sectionCollection {
    items {
      __typename
      sys {
        id
      }
    }
  }
  seo {
    name
    title
    description
    canonicalUrl
    image {
      title
      description
      contentType
      url
      width
      height
    }
    noFollow
    noIndex
  }
}
    `;
export const RecipeReviewFieldsFragmentDoc = gql`
    fragment RecipeReviewFields on RecipeReview {
  sys {
    __typename
    id
    firstPublishedAt
  }
  _id
  recipe {
    _id
    sys {
      id
    }
  }
  author {
    name
    avatar {
      url
      description
      width
      height
    }
  }
  content
  isApproved
  imagesCollection {
    items {
      sys {
        id
      }
      url
      description
      width
      height
    }
  }
  ratingOverall
  ratingIngredients
  ratingAccuracy
  ratingDifficulty
  ratingTaste
}
    `;
export const SectionFieldsFragmentDoc = gql`
    fragment SectionFields on Section {
  sys {
    id
  }
  title
  buttonText
  buttonLink
  showXItemsOnMobile
  showMobileButton
  content {
    ... on FeaturedRecipe {
      __typename
      sys {
        id
      }
    }
    ... on FeaturedArticle {
      __typename
      sys {
        id
      }
    }
    ... on ItemShowcase {
      __typename
      sys {
        id
      }
    }
  }
}
    `;
export const ComponentReferenceFieldsFragmentDoc = gql`
    fragment ComponentReferenceFields on Entry {
  __typename
  sys {
    id
  }
}
    `;
export const SliderFieldsFragmentDoc = gql`
    fragment SliderFields on Slider {
  sliderItemCollection {
    items {
      internalName
      type
      title
      subtitle
      link
      buttonText
      image {
        url
        description
        width
        height
      }
      timerDate
    }
  }
}
    `;
export const FeaturedArticleQueryDocument = gql`
    query featuredArticleQuery($id: String!, $locale: String, $preview: Boolean) {
  featuredArticle(id: $id, locale: $locale, preview: $preview) {
    sys {
      id
      firstPublishedAt
    }
    ...FeaturedArticleFields
  }
}
    ${FeaturedArticleFieldsFragmentDoc}`;
export const FeaturedMagazineQueryDocument = gql`
    query featuredMagazineQuery($id: String!, $locale: String, $preview: Boolean) {
  featuredMagazine(id: $id, locale: $locale, preview: $preview) {
    sys {
      id
      firstPublishedAt
    }
    ...FeaturedMagazineFields
  }
}
    ${FeaturedMagazineFieldsFragmentDoc}`;
export const FeaturedRecipeQueryDocument = gql`
    query featuredRecipeQuery($id: String!, $locale: String, $preview: Boolean) {
  featuredRecipe(id: $id, locale: $locale, preview: $preview) {
    sys {
      id
      firstPublishedAt
    }
    ...FeaturedRecipeFields
  }
}
    ${FeaturedRecipeFieldsFragmentDoc}`;
export const FooterDocument = gql`
    query footer($locale: String, $preview: Boolean) {
  footerCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      followLabel
      socialItemsCollection {
        items {
          key
          url
        }
      }
      menuLinksCollection(limit: 8) {
        items {
          page {
            ... on Page {
              slug
            }
          }
          title
          navigationLinkItemCollection(limit: 15) {
            items {
              page {
                ... on Page {
                  __typename
                  slug
                }
                ... on PageRecipeCategory {
                  slug
                }
                ... on PageShopCategory {
                  slug
                }
              }
              title
            }
          }
        }
      }
      legalLinksCollection {
        items {
          page {
            ... on Page {
              _id
              slug
            }
          }
          title
        }
      }
    }
  }
}
    `;
export const HeaderDocument = gql`
    query header($locale: String, $preview: Boolean) {
  headerCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      _id
      internalName
      headerSearch
      userMenu
      navigationItems
    }
  }
}
    `;
export const ItemShowcaseQueryDocument = gql`
    query itemShowcaseQuery($id: String!, $locale: String, $preview: Boolean) {
  itemShowcase(id: $id, locale: $locale, preview: $preview) {
    ...ItemShowcaseFields
  }
}
    ${ItemShowcaseFieldsFragmentDoc}`;
export const MainNavigationDocument = gql`
    query mainNavigation($locale: String, $preview: Boolean) {
  mainNavigationCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      __typename
      sys {
        id
      }
      itemsCollection {
        items {
          _id
          sys {
            id
          }
          slug
          title
          pageName
        }
      }
    }
  }
}
    `;
export const PageArticleDocument = gql`
    query pageArticle($slug: String!, $locale: String, $preview: Boolean) {
  pageArticleCollection(
    limit: 1
    locale: $locale
    where: {slug: $slug}
    preview: $preview
  ) {
    items {
      ...PageArticleFields
    }
  }
}
    ${PageArticleFieldsFragmentDoc}
${FeaturedArticleShortFieldsFragmentDoc}`;
export const PageRecipeCategoryDocument = gql`
    query pageRecipeCategory($slug: String!, $locale: String, $preview: Boolean) {
  pageRecipeCategoryCollection(
    limit: 1
    locale: $locale
    where: {slug: $slug}
    preview: $preview
  ) {
    items {
      ...PageRecipeCategoryFields
    }
  }
}
    ${PageRecipeCategoryFieldsFragmentDoc}`;
export const PageRecipeDocument = gql`
    query pageRecipe($slug: String!, $locale: String, $preview: Boolean) {
  pageRecipeCollection(
    limit: 1
    locale: $locale
    where: {slug: $slug}
    preview: $preview
  ) {
    items {
      ...PageRecipeFields
    }
  }
}
    ${PageRecipeFieldsFragmentDoc}
${RelatedRecipeFieldsFragmentDoc}`;
export const PageShopDocument = gql`
    query pageShop($slug: String!, $locale: String, $preview: Boolean) {
  pageShopCollection(
    limit: 1
    locale: $locale
    where: {slug: $slug}
    preview: $preview
  ) {
    items {
      ...PageShopFields
    }
  }
}
    ${PageShopFieldsFragmentDoc}
${AlsoViewedFieldsFragmentDoc}`;
export const PageDocument = gql`
    query page($slug: String!, $locale: String, $preview: Boolean) {
  pageCollection(
    limit: 1
    locale: $locale
    where: {slug: $slug}
    preview: $preview
  ) {
    items {
      ...PageFields
    }
  }
}
    ${PageFieldsFragmentDoc}`;
export const RecipeReviewsDocument = gql`
    query recipeReviews($slug: String!, $locale: String, $preview: Boolean, $limit: Int, $order: [RecipeReviewOrder]) {
  recipeReviewCollection(
    locale: $locale
    limit: $limit
    where: {recipe: {slug: $slug}, isApproved: true}
    preview: $preview
    order: $order
  ) {
    total
    items {
      ...RecipeReviewFields
    }
  }
}
    ${RecipeReviewFieldsFragmentDoc}`;
export const SectionQueryDocument = gql`
    query sectionQuery($id: String!, $locale: String, $preview: Boolean) {
  section(id: $id, locale: $locale, preview: $preview) {
    ...SectionFields
  }
}
    ${SectionFieldsFragmentDoc}`;
export const SliderDocument = gql`
    query slider($id: String!, $locale: String, $preview: Boolean) {
  sliderCollection(
    limit: 1
    locale: $locale
    where: {sys: {id: $id}}
    preview: $preview
  ) {
    items {
      ...SliderFields
    }
  }
}
    ${SliderFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    featuredArticleQuery(variables: FeaturedArticleQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FeaturedArticleQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FeaturedArticleQueryQuery>(FeaturedArticleQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'featuredArticleQuery', 'query', variables);
    },
    featuredMagazineQuery(variables: FeaturedMagazineQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FeaturedMagazineQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FeaturedMagazineQueryQuery>(FeaturedMagazineQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'featuredMagazineQuery', 'query', variables);
    },
    featuredRecipeQuery(variables: FeaturedRecipeQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FeaturedRecipeQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FeaturedRecipeQueryQuery>(FeaturedRecipeQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'featuredRecipeQuery', 'query', variables);
    },
    footer(variables?: FooterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FooterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FooterQuery>(FooterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'footer', 'query', variables);
    },
    header(variables?: HeaderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<HeaderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HeaderQuery>(HeaderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'header', 'query', variables);
    },
    itemShowcaseQuery(variables: ItemShowcaseQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ItemShowcaseQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ItemShowcaseQueryQuery>(ItemShowcaseQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'itemShowcaseQuery', 'query', variables);
    },
    mainNavigation(variables?: MainNavigationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MainNavigationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MainNavigationQuery>(MainNavigationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'mainNavigation', 'query', variables);
    },
    pageArticle(variables: PageArticleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PageArticleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageArticleQuery>(PageArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageArticle', 'query', variables);
    },
    pageRecipeCategory(variables: PageRecipeCategoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PageRecipeCategoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageRecipeCategoryQuery>(PageRecipeCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageRecipeCategory', 'query', variables);
    },
    pageRecipe(variables: PageRecipeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PageRecipeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageRecipeQuery>(PageRecipeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageRecipe', 'query', variables);
    },
    pageShop(variables: PageShopQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PageShopQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageShopQuery>(PageShopDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageShop', 'query', variables);
    },
    page(variables: PageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageQuery>(PageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'page', 'query', variables);
    },
    recipeReviews(variables: RecipeReviewsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RecipeReviewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RecipeReviewsQuery>(RecipeReviewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'recipeReviews', 'query', variables);
    },
    sectionQuery(variables: SectionQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SectionQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SectionQueryQuery>(SectionQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sectionQuery', 'query', variables);
    },
    slider(variables: SliderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SliderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SliderQuery>(SliderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'slider', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;