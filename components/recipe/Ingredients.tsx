import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Recipe } from "utilities/types";

export const Ingredients: FunctionComponent<Recipe> = ({ recipeIngredientGroups }) => {
  if (recipeIngredientGroups) {
    return (
      <Box data-testid="ingredients">
        <Heading as="h2" pb="4">
          Ingredients
        </Heading>
        {recipeIngredientGroups.map((group) => (
          <Box key={group.name}>
            {group.name && (
              <Box>
                <strong>{group.name}</strong>
              </Box>
            )}
            <UnorderedList py="2" data-testid="ingredientGroup">
              {group.recipeIngredients.map((ingredient) => (
                <ListItem key={ingredient.id} pb="2" lineHeight="1.2" data-testid="ingredient">
                  {ingredient.pre}
                  {ingredient.quantity} <span>{ingredient.measurement}</span>{" "}
                  {ingredient.quantity === "1" ? ingredient.ingredient.name : ingredient.ingredient.pluralName}
                  <span> {ingredient.post}</span>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        ))}
      </Box>
    );
  }
  return null;
};
