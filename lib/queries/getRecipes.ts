import { gql } from "@apollo/client/core";

export const GET_RECIPES = gql`
  query GetRecipes {
    search {
      hits {
        _source {
          title
          description
        }
        _score
      }
    }
  }
`;

export const GET_RANDOM_RECIPES = gql`
  query Random($seed: Float, $limit: Int = 5) {
    search(
      limit: $limit
      query: {
        function_score: {
          query: { bool: { must: { exists: { field: photo__imageUrl } } } }
          functions: [{ random_score: { seed: $seed } }]
        }
      }
    ) {
      hits {
        _source {
          id
          title
          description
          photo {
            imageUrl
          }
        }
      }
    }
  }
`;

export const GET_RECIPE = gql`
  query Recipe($id: JSON!) {
    search(query: { term: { id: { value: $id } } }) {
      hits {
        _source {
          id
          title
          description
          overview
          yields
          photo {
            imageUrl
            heroImageUrl
          }
          recipeIngredientGroups {
            name
            recipeIngredients {
              id
              ingredient {
                name
                pluralName
                kind
              }
              measurement
              quantity
              pre
              post
            }
          }
          instructions {
            content
          }
          relateds {
            related {
              id
              title
              photo {
                imageUrl
              }
            }
          }
        }
      }
    }
  }
`;

export const SEARCH_RECIPES = gql`
  query Recipes($query: String, $limit: Int = 5) {
    search(limit: $limit, query: { match_phrase_prefix: { title: { query: $query } } }) {
      hits {
        _source {
          id
          title
          description
          photo {
            imageUrl
          }
        }
      }
    }
  }
`;
