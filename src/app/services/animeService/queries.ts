import gql from "graphql-tag";

export const GET_ANIME_PAGE = gql`
  query GetAnimePage($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      media {
        id
        description
        averageScore
        title {
          english
        }
        coverImage {
          extraLarge
        }
      }
    }
  }
`;

export const GET_ANIME_DETAIL = gql`
  query GetAnimeCharactersByAnimeId($id: Int!) {
    Media(id: $id) {
      id
      title {
        english
      }
      coverImage {
        large
      }
      bannerImage
      description
      genres
      averageScore
      episodes
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      relations {
        edges {
          node {
            id
            title {
              english
            }
          }
        }
      }
      trailer {
        id
        thumbnail
        site
      }
      characters {
        edges {
          node {
            id
            name {
              first
              last
            }
            gender
            age
            image {
              large
            }
          }
        }
      }
    }
  }
`;
