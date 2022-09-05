/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAnimeCharactersByAnimeId
// ====================================================

export interface GetAnimeCharactersByAnimeId_Media_title {
  __typename: "MediaTitle";
  /**
   * The official english title
   */
  english: string | null;
}

export interface GetAnimeCharactersByAnimeId_Media_coverImage {
  __typename: "MediaCoverImage";
  /**
   * The cover image url of the media at a large size
   */
  large: string | null;
}

export interface GetAnimeCharactersByAnimeId_Media_startDate {
  __typename: "FuzzyDate";
  /**
   * Numeric Year (2017)
   */
  year: number | null;
  /**
   * Numeric Month (3)
   */
  month: number | null;
  /**
   * Numeric Day (24)
   */
  day: number | null;
}

export interface GetAnimeCharactersByAnimeId_Media_endDate {
  __typename: "FuzzyDate";
  /**
   * Numeric Year (2017)
   */
  year: number | null;
  /**
   * Numeric Month (3)
   */
  month: number | null;
  /**
   * Numeric Day (24)
   */
  day: number | null;
}

export interface GetAnimeCharactersByAnimeId_Media_relations_edges_node_title {
  __typename: "MediaTitle";
  /**
   * The official english title
   */
  english: string | null;
}

export interface GetAnimeCharactersByAnimeId_Media_relations_edges_node {
  __typename: "Media";
  /**
   * The id of the media
   */
  id: number;
  /**
   * The official titles of the media in various languages
   */
  title: GetAnimeCharactersByAnimeId_Media_relations_edges_node_title | null;
}

export interface GetAnimeCharactersByAnimeId_Media_relations_edges {
  __typename: "MediaEdge";
  node: GetAnimeCharactersByAnimeId_Media_relations_edges_node | null;
}

export interface GetAnimeCharactersByAnimeId_Media_relations {
  __typename: "MediaConnection";
  edges: (GetAnimeCharactersByAnimeId_Media_relations_edges | null)[] | null;
}

export interface GetAnimeCharactersByAnimeId_Media_trailer {
  __typename: "MediaTrailer";
  /**
   * The trailer video id
   */
  id: string | null;
  /**
   * The url for the thumbnail image of the video
   */
  thumbnail: string | null;
  /**
   * The site the video is hosted by (Currently either youtube or dailymotion)
   */
  site: string | null;
}

export interface GetAnimeCharactersByAnimeId_Media_characters_edges_node_name {
  __typename: "CharacterName";
  /**
   * The character's given name
   */
  first: string | null;
  /**
   * The character's surname
   */
  last: string | null;
}

export interface GetAnimeCharactersByAnimeId_Media_characters_edges_node_image {
  __typename: "CharacterImage";
  /**
   * The character's image of media at its largest size
   */
  large: string | null;
}

export interface GetAnimeCharactersByAnimeId_Media_characters_edges_node {
  __typename: "Character";
  /**
   * The id of the character
   */
  id: number;
  /**
   * The names of the character
   */
  name: GetAnimeCharactersByAnimeId_Media_characters_edges_node_name | null;
  /**
   * The character's gender. Usually Male, Female, or Non-binary but can be any string.
   */
  gender: string | null;
  /**
   * The character's age. Note this is a string, not an int, it may contain further text and additional ages.
   */
  age: string | null;
  /**
   * Character images
   */
  image: GetAnimeCharactersByAnimeId_Media_characters_edges_node_image | null;
}

export interface GetAnimeCharactersByAnimeId_Media_characters_edges {
  __typename: "CharacterEdge";
  node: GetAnimeCharactersByAnimeId_Media_characters_edges_node | null;
}

export interface GetAnimeCharactersByAnimeId_Media_characters {
  __typename: "CharacterConnection";
  edges: (GetAnimeCharactersByAnimeId_Media_characters_edges | null)[] | null;
}

export interface GetAnimeCharactersByAnimeId_Media {
  __typename: "Media";
  /**
   * The id of the media
   */
  id: number;
  /**
   * The official titles of the media in various languages
   */
  title: GetAnimeCharactersByAnimeId_Media_title | null;
  /**
   * The cover images of the media
   */
  coverImage: GetAnimeCharactersByAnimeId_Media_coverImage | null;
  /**
   * The banner image of the media
   */
  bannerImage: string | null;
  /**
   * Short description of the media's story and characters
   */
  description: string | null;
  /**
   * The genres of the media
   */
  genres: (string | null)[] | null;
  /**
   * A weighted average score of all the user's scores of the media
   */
  averageScore: number | null;
  /**
   * The amount of episodes the anime has when complete
   */
  episodes: number | null;
  /**
   * The first official release date of the media
   */
  startDate: GetAnimeCharactersByAnimeId_Media_startDate | null;
  /**
   * The last official release date of the media
   */
  endDate: GetAnimeCharactersByAnimeId_Media_endDate | null;
  /**
   * Other media in the same or connecting franchise
   */
  relations: GetAnimeCharactersByAnimeId_Media_relations | null;
  /**
   * Media trailer or advertisement
   */
  trailer: GetAnimeCharactersByAnimeId_Media_trailer | null;
  /**
   * The characters in the media
   */
  characters: GetAnimeCharactersByAnimeId_Media_characters | null;
}

export interface GetAnimeCharactersByAnimeId {
  /**
   * Media query
   */
  Media: GetAnimeCharactersByAnimeId_Media | null;
}

export interface GetAnimeCharactersByAnimeIdVariables {
  id: number;
}
