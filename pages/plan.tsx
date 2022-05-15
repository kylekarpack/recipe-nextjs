import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { FunctionComponent, useEffect, useState } from "react";
import { getIngredients, getMealPlan } from "lib/data/db";
import { Recipe, RecipeIngredientGroupsRecipeIngredients } from "lib/types";

/**
 * Meal plan page
 */
const Plan: FunctionComponent = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [ingredients, setIngredients] = useState<RecipeIngredientGroupsRecipeIngredients[]>([]);
  useEffect(() => {
    setRecipes(getMealPlan());
    setIngredients(getIngredients());
  }, []);
  return (
    <>
      <Head>
        <title>Meal Plan</title>
      </Head>
      <Container maxW="container.xl" py={12}>
        <Grid templateColumns="repeat(5, 1fr)" gap={12}>
          <GridItem colSpan={2}>
            <Heading as="h3">Recipes</Heading>

            <ol>
              {recipes.map((r) => (
                <li key={r.id}>{r.title}</li>
              ))}
            </ol>
          </GridItem>
          <GridItem colSpan={3}>
            <Heading as="h3">Ingredients List</Heading>
            <ul>
              {ingredients.map((el) => (
                <li key={el.id}>{el.ingredient?.name}</li>
              ))}
            </ul>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Plan;
