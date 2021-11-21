export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
};

export type RecipeResults = {
  __typename?: "Query"
  search?: Maybe<RecipeSearchOutput>
  findById?: Maybe<Recipe>
}

export type RecipeSearchOutput = {
  __typename?: "recipeSearchOutput"
  hits?: Maybe<Array<Maybe<RecipeSearchHitItem>>>
  count?: Maybe<Scalars["Int"]>
  aggregations?: Maybe<Scalars["JSON"]>
  max_score?: Maybe<Scalars["Float"]>
  took?: Maybe<Scalars["Int"]>
  timed_out?: Maybe<Scalars["Boolean"]>
  _shards?: Maybe<RecipeMetaShards>
}

export type RecipeSearchHitItem = {
  __typename?: "recipeSearchHitItem";
  _index?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  _score?: Maybe<Scalars["Float"]>;
  _source?: Maybe<Recipe>;
  _shard?: Maybe<Scalars["String"]>;
  _node?: Maybe<Scalars["String"]>;
  _explanation?: Maybe<Scalars["JSON"]>;
  _version?: Maybe<Scalars["Int"]>;
  highlight?: Maybe<Scalars["JSON"]>;
  sort?: Maybe<Scalars["JSON"]>;
  fields?: Maybe<Scalars["JSON"]>;
};

export type Recipe = {
  __typename?: "reciperecipe";
  articleId?: Maybe<Scalars["String"]>;
  asides?: Maybe<Array<Maybe<Asides>>>;
  byline?: Maybe<Scalars["String"]>;
  cookbookCollection?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
  documentType?: Maybe<Scalars["String"]>;
  friendlyLabel?: Maybe<Scalars["String"]>;
  headnote?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  instructions?: Maybe<Array<Maybe<Instructions>>>;
  issuedAt?: Maybe<Scalars["Date"]>;
  metaKeywords?: Maybe<Scalars["String"]>;
  overview?: Maybe<Scalars["String"]>;
  photo?: Maybe<Photo>;
  recipeIngredientGroups?: Maybe<Array<Maybe<RecipeIngredientGroups>>>;
  recipeReviewables?: Maybe<Array<Maybe<RecipeReviewables>>>;
  relateds?: Maybe<Array<Maybe<Relateds>>>;
  seoTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  video?: Maybe<Video>;
  webUrl?: Maybe<Scalars["String"]>;
  yields?: Maybe<Scalars["String"]>;
};

export type Asides = {
  __typename?: "reciperecipeAsides";
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  pageItems?: Maybe<AsidesPageItems>;
  subtitle?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type AsidesPageItems = {
  __typename?: "reciperecipeAsidesPageItems";
  content?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  photo?: Maybe<AsidesPageItemsPhoto>;
  title?: Maybe<Scalars["String"]>;
};

export type AsidesPageItemsPhoto = {
  __typename?: "reciperecipeAsidesPageItemsPhoto";
  alt?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  heroImageUrl?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  originalImageUrl?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type Instructions = {
  __typename?: "reciperecipeInstructions";
  content?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
};

export type Photo = {
  __typename?: "reciperecipePhoto";
  alt?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  heroImageUrl?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  originalImageUrl?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type RecipeIngredientGroups = {
  __typename?: "reciperecipeRecipeIngredientGroups";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  recipeIngredients?: Maybe<Array<Maybe<RecipeIngredientGroupsRecipeIngredients>>>;
};

export type RecipeIngredientGroupsRecipeIngredients = {
  __typename?: "reciperecipeRecipeIngredientGroupsRecipeIngredients";
  id?: Maybe<Scalars["Int"]>;
  ingredient?: Maybe<RecipeIngredientGroupsRecipeIngredientsIngredient>;
  measurement?: Maybe<Scalars["String"]>;
  pluralIngredient?: Maybe<Scalars["Boolean"]>;
  post?: Maybe<Scalars["String"]>;
  pre?: Maybe<Scalars["String"]>;
  quantity?: Maybe<Scalars["String"]>;
};

export type RecipeIngredientGroupsRecipeIngredientsIngredient = {
  __typename?: "reciperecipeRecipeIngredientGroupsRecipeIngredientsIngredient";
  kind?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  pluralName?: Maybe<Scalars["String"]>;
  reviewPath?: Maybe<Scalars["String"]>;
};

export type RecipeReviewables = {
  __typename?: "reciperecipeRecipeReviewables";
  recipeReviewable?: Maybe<RecipeReviewablesRecipeReviewable>;
};

export type RecipeReviewablesRecipeReviewable = {
  __typename?: "reciperecipeRecipeReviewablesRecipeReviewable";
  buyNowLink?: Maybe<Scalars["String"]>;
  photo?: Maybe<RecipeReviewablesRecipeReviewablePhoto>;
  reviewSet?: Maybe<RecipeReviewablesRecipeReviewableReviewSet>;
};

export type RecipeReviewablesRecipeReviewablePhoto = {
  __typename?: "reciperecipeRecipeReviewablesRecipeReviewablePhoto";
  alt?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  heroImageUrl?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  originalImageUrl?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type RecipeReviewablesRecipeReviewableReviewSet = {
  __typename?: "reciperecipeRecipeReviewablesRecipeReviewableReviewSet";
  link?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type Relateds = {
  __typename?: "reciperecipeRelateds";
  label?: Maybe<Scalars["String"]>;
  related?: Maybe<RelatedsRelated>;
  relatedType?: Maybe<Scalars["String"]>;
};

export type RelatedsRelated = {
  __typename?: "reciperecipeRelatedsRelated";
  buyNowLink?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  freeSites?: Maybe<Scalars["String"]>;
  freeWithRegistrationSites?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  link?: Maybe<Scalars["String"]>;
  overview?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  photo?: Maybe<RelatedsRelatedPhoto>;
  siteList?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  video?: Maybe<RelatedsRelatedVideo>;
};

export type RelatedsRelatedPhoto = {
  __typename?: "reciperecipeRelatedsRelatedPhoto";
  alt?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  heroImageUrl?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  originalImageUrl?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type RelatedsRelatedVideo = {
  __typename?: "reciperecipeRelatedsRelatedVideo";
  externalId?: Maybe<Scalars["String"]>;
  photo?: Maybe<RelatedsRelatedVideoPhoto>;
  playerId?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  webUrl?: Maybe<Scalars["String"]>;
};

export type RelatedsRelatedVideoPhoto = {
  __typename?: "reciperecipeRelatedsRelatedVideoPhoto";
  alt?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  heroImageUrl?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  originalImageUrl?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type Video = {
  __typename?: "reciperecipeVideo";
  externalId?: Maybe<Scalars["String"]>;
  photo?: Maybe<VideoPhoto>;
  playerId?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  webUrl?: Maybe<Scalars["String"]>;
};

export type VideoPhoto = {
  __typename?: "reciperecipeVideoPhoto";
  alt?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  heroImageUrl?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  originalImageUrl?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type RecipeMetaShards = {
  __typename?: "recipeMetaShards";
  total?: Maybe<Scalars["Int"]>;
  successful?: Maybe<Scalars["Int"]>;
  failed?: Maybe<Scalars["Int"]>;
};
