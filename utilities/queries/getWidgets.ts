import { gql } from "@apollo/client/core";

export const GET_WIDGETS = gql`
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
