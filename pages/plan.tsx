import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Container, Grid, GridItem, Heading, UnorderedList } from "@chakra-ui/react";
import Head from "next/head";
import { FunctionComponent, useEffect, useState } from "react";
import { Ingredient } from "components/recipe";
import { getIngredients, getMealPlan, removeFromMealPlan } from "lib/data/db";
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

  const removeRecipe = (recipe: Recipe): void => {
    const newRecipes = removeFromMealPlan(recipe);
    setRecipes(newRecipes);
    setIngredients(getIngredients());
  };

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
                <li key={r.id}>
                  {r.title}
                  <Button ml={2} size="xs" onClick={() => removeRecipe(r)}>
                    <DeleteIcon />
                  </Button>
                </li>
              ))}
            </ol>
          </GridItem>
          <GridItem colSpan={3}>
            <Heading as="h3">Ingredients List</Heading>
            <UnorderedList>
              {ingredients.map((el) => (
                <Ingredient key={el.id} ingredient={el} />
              ))}
            </UnorderedList>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Plan;
