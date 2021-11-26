import { useQuery } from "@apollo/client";
import { Container, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { FunctionComponent } from "react";
import RecipeList from "components/RecipeList";
import { GET_RANDOM_RECIPES } from "lib/queries";
import { RecipeResults } from "lib/types";

const seed = new Date().getTime();

const HomePage: FunctionComponent = () => {
  const query = useQuery<RecipeResults>(GET_RANDOM_RECIPES, {
    variables: { seed, limit: 12 }
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
