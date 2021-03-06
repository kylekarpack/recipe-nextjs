import { useQuery } from "@apollo/client";
import { Center, Container, Grid, GridItem, Spinner } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import ErrorMessage from "components/ErrorMessage";
import { CookingState, HeroImage, Ingredients, Instructions, Overview } from "components/recipe";
import { useCookingStateContext } from "lib/hooks";
import { GET_RECIPE } from "lib/queries";
import { RecipeResults } from "lib/types";

/**
 * View a single recipe
 */
const RecipePage = () => {
  const router = useRouter();
  const { isCooking } = useCookingStateContext();

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
        {isCooking && <style>{"body { overscroll-behavior-y: none }"}</style>}
      </Head>
      <Grid alignItems="stretch" templateRows={isCooking ? "repeat(2, auto)" : null} h={isCooking ? "100vh" : null}>
        {!isCooking && (
          <GridItem>
            <HeroImage {...recipe} />
          </GridItem>
        )}
        <GridItem maxH={isCooking ? "100vh" : null} overflowY={isCooking ? "auto" : null}>
          <Container maxW="container.xl" py={isCooking ? 0 : 12} px="12" overflowY="auto">
            {!isCooking && <Overview {...recipe} />}
            <Grid templateColumns="repeat(5, 1fr)" py="6" gap={12}>
              <GridItem colSpan={3}>
                <Instructions {...recipe} />
              </GridItem>
              <GridItem colSpan={2}>
                <Ingredients {...recipe} />
              </GridItem>
            </Grid>
          </Container>
        </GridItem>
        {isCooking && (
          <GridItem alignSelf="end">
            <CookingState {...recipe} />
          </GridItem>
        )}
      </Grid>
    </>
  );
};

export default RecipePage;
