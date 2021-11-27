import { useQuery } from "@apollo/client";
import { Center, Container, Grid, GridItem, Spinner } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import ErrorMessage from "components/ErrorMessage";
import { HeroImage, Ingredients, Instructions, Overview } from "components/recipe";
import { useIsCookingContext } from "lib/hooks/useIsCooking";
import { GET_RECIPE } from "lib/queries";
import { RecipeResults } from "lib/types";

const RecipePage = () => {
  const router = useRouter();
  const { isCooking } = useIsCookingContext();

  const { data, error, loading } = useQuery<RecipeResults>(GET_RECIPE, {
    variables: { id: String(router.query.id) }
  });

  if (loading) {
    return (
      <Center h="60vh">
        <Spinner />
      </Center>
    );
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
      {!isCooking && <HeroImage {...recipe} />}
      <Container maxW="container.xl" py={isCooking ? 0 : 12} px="12">
        {!isCooking && <Overview {...recipe} />}
        <Grid templateColumns="repeat(5, 1fr)" py="6" gap={12}>
          <GridItem colSpan={isCooking ? 3 : 4}>
            <Instructions {...recipe} />
          </GridItem>
          <GridItem colSpan={isCooking ? 2 : 1}>
            <Ingredients {...recipe} />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default RecipePage;
