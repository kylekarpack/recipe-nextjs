import { QueryResult } from "@apollo/client";
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { RecipeResults } from "utilities/types";
import ErrorMessage from "./ErrorMessage";
import RecipeCard from "./RecipeCard";

const RecipeList: FunctionComponent<Partial<QueryResult<RecipeResults>>> = (props) => {
  const { loading, error, data } = props;

  if (loading) {
    return (
      <Center h="60vh">
        <Spinner />
      </Center>
    );
  }

  if (error) {
    return (
      <div data-testid="error">
        <ErrorMessage>{error.message}</ErrorMessage>
      </div>
    );
  }

  const recipes = data?.search?.hits;

  return (
    <SimpleGrid minChildWidth="250px" gap={6} data-testid="grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._source.id} {...recipe._source} />
      ))}
    </SimpleGrid>
  );
};

export default RecipeList;
