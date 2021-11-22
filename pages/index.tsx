import { useQuery } from "@apollo/client";
import { Container, Heading } from "@chakra-ui/react";
import RecipeList from "components/RecipeList";
import Head from "next/head";
import React, { FunctionComponent } from "react";
import { GET_RANDOM_RECIPES } from "utilities/queries";
import { RecipeResults } from "utilities/types";

const seed = new Date().getTime();

const HomePage: FunctionComponent = () => {
  const query = useQuery<RecipeResults>(GET_RANDOM_RECIPES, {
    variables: { seed: seed, limit: 12 }
  });

  return (
    <Container maxW="container.xl">
      <Head>
        <title>Recipes</title>
      </Head>
      <Heading as="h1" py="4">
        Recipes
      </Heading>
      <RecipeList {...query} />
    </Container>
  );
};

export default HomePage;
