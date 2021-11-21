import { QueryResult, useQuery } from "@apollo/client";
import { Spinner, Container, Grid, GridItem } from "@chakra-ui/react";
import ErrorMessage from "components/ErrorMessage";
import { HeroImage, Ingredients, Instructions, Overview } from "components/Recipe";
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
      <Container maxW="container.xl" py="12" px="12">
        <Overview {...recipe} />
				<Grid templateColumns="repeat(4, 1fr)" py="6" gap={12}>
					
					<GridItem colSpan={3}>
						<Instructions {...recipe} />
					</GridItem>
					<GridItem colSpan={1}>
						<Ingredients {...recipe} />
					</GridItem>
				</Grid>
      </Container>
			
    </>
  );
};

export default RecipePage;
