import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { Recipe } from "utilities/types";

export const Ingredients: FunctionComponent<Recipe> = (recipe) => {
  if (recipe.recipeIngredientGroups) {
    return (
      <>
        <Heading as="h2" pb="4">
          Ingredients
        </Heading>
        {recipe.recipeIngredientGroups.map((group, i) => (
          <Box key={i}>
            {group.name && (
              <Box>
                <strong>{group.name}</strong>
              </Box>
            )}
            <UnorderedList py="2">
              {group.recipeIngredients.map((ingredient, i) => (
                <ListItem key={i} pb="2" lineHeight="1.2">
									{ingredient.pre}
                  {ingredient.quantity} <span>{ingredient.measurement}</span>{" "}
                  {ingredient.quantity === "1" ? ingredient.ingredient.name : ingredient.ingredient.pluralName}
									<span> {ingredient.post}</span>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        ))}
      </>
    );
  }
  return null;
};
