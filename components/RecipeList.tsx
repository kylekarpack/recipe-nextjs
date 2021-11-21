import { QueryResult } from "@apollo/client";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { RecipeResults } from "utilities/types";
import ErrorMessage from "./ErrorMessage";
import RecipeCard from "./RecipeCard";

const RecipeList: FunctionComponent<QueryResult<RecipeResults>> = (props) => {
  const { loading, error, data } = props;

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }

  const recipes = data?.search?.hits;

  return (
    <SimpleGrid minChildWidth="250px" gap={6}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._source.id} {...recipe._source} />
      ))}
    </SimpleGrid>
  );
};

export default RecipeList;
