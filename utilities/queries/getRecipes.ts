import { gql } from "@apollo/client";

export const GET_RECIPES = gql`
  query {
    widgets {
      id
      name
      category
      description
      quantity
      cost
      salePrice
    }
  }
`;
