import { QueryResult, useQuery } from "@apollo/client";
import { Spinner, Container } from "@chakra-ui/react";
import ErrorMessage from "components/ErrorMessage";
import { HeroImage, Instructions, Overview } from "components/Recipe";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { GET_RECIPE } from "utilities/queries";
import { RecipeResults } from "utilities/types";

const RecipePage = () => {
  const router = useRouter();

  const { data, error, loading }: QueryResult<RecipeResults> = useQuery(GET_RECIPE, {
    variables: { id: String(router.query.id) }
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }

  const recipe = data.search.hits[0]._source;

  return (
    <>
      <Head>
        <title>{recipe.title}</title>
      </Head>
      <HeroImage {...recipe} />
      <Container maxW="container.xl" paddingX="8vw" paddingY="5vh">
        <Overview {...recipe} />
        <Instructions {...recipe} />
      </Container>
    </>
  );
};

export default RecipePage;
