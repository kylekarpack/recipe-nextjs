import { QueryResult } from "@apollo/client";
import { Alert, AlertDescription, AlertIcon, Grid, GridItem, Spinner } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { RecipeResults } from "utilities/types";

const RecipeList: FunctionComponent<Partial<QueryResult<RecipeResults>>> = ({ loading, error, data }) => {
  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    );
  }

  const recipes = data?.search?.hits;

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {recipes.map((recipe) => (
        <GridItem key={recipe._id}>{recipe._source.title}</GridItem>
      ))}
    </Grid>
  );
};

export default RecipeList;
