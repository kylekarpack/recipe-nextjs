import { Box, Checkbox, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { FunctionComponent, ReactElement, useState } from "react";
import { useCookingStateContext } from "lib/hooks";
import { Recipe, RecipeIngredientGroupsRecipeIngredients } from "lib/types";

const Ingredient: FunctionComponent<{ ingredient: RecipeIngredientGroupsRecipeIngredients }> = ({ ingredient }) => {
  const { isCooking } = useCookingStateContext();
  const [isUsed, setIsUsed] = useState(false);

  const IngredientContainer: FunctionComponent = isCooking
    ? ({ children }) => (
        <Checkbox isChecked={isUsed} onChange={() => setIsUsed(!isUsed)} opacity={isUsed ? 0.5 : 1}>
          {children}
        </Checkbox>
      )
    : ({ children }) => children as ReactElement;

  return (
    <ListItem pb="2" lineHeight="1.2" data-testid="ingredient" listStyleType={isCooking ? "none" : null}>
      <IngredientContainer>
        {ingredient.pre}
        {ingredient.pre ? " " : ""}
        {ingredient.quantity} {ingredient.measurement}{" "}
        {ingredient.quantity === "1" ? ingredient.ingredient.name : ingredient.ingredient.pluralName}
        {ingredient.post?.startsWith(",") ? "" : " "}
        <span>{ingredient.post}</span>
      </IngredientContainer>
    </ListItem>
  );
};

/**
 * Display the list of ingredients for a recipe
 */
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
                <Ingredient key={ingredient.id} ingredient={ingredient} />
              ))}
            </UnorderedList>
          </Box>
        ))}
      </Box>
    );
  }
  return null;
};
