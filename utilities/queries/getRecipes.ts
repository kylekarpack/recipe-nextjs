import { gql } from "@apollo/client";

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
