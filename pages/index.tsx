import RecipeList from "@/components/RecipeList";
import { QueryResult, useQuery } from "@apollo/client";
import { Heading } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { GET_RANDOM_RECIPES } from "utilities/queries";
import { RecipeResults } from "utilities/types";

const seed = new Date().getTime();

const HomePage: FunctionComponent = () => {
  const query: QueryResult<RecipeResults> = useQuery(GET_RANDOM_RECIPES, {
    variables: { seed: seed, limit: 12 }
  });

  return (
    <div className="section content">
      <Heading as="h1">Recipes</Heading>
      <RecipeList {...query} />
    </div>
  );
};

export default HomePage;
