import connvertUnits from "convert-units";
import { Recipe, RecipeIngredientGroupsRecipeIngredients } from "../types";

const lsKey = "MEAL_PLAN";

/**
 *
 * @returns
 */
export const getMealPlan = (): Recipe[] => {
  const recipes = JSON.parse(localStorage.getItem(lsKey) ?? "[]") ?? [];
  return recipes;
};

/**
 * Get all ingredients from a meal plan
 */
export const getIngredients = (): RecipeIngredientGroupsRecipeIngredients[] => {
  const recipes = getMealPlan();
  const map: { [key: string]: RecipeIngredientGroupsRecipeIngredients } = {};
  for (const recipe of recipes) {
    for (const group of recipe.recipeIngredientGroups) {
      for (const ingredient of group.recipeIngredients) {
        map[ingredient.id] = map[ingredient.id] || ingredient;
        if (map[ingredient.id].measurement === ingredient.measurement) {
          map[ingredient.id].quantity += ingredient.quantity;
        } else {
          const converted = connvertUnits(ingredient.quantity)
            .from(ingredient.measurement)
            .to(map[ingredient.id].measurement);

          map[ingredient.id].quantity += converted;
        }
      }
    }
  }

  const output = [];
  for (const key in map) {
    output.push(map[key]);
  }
  return output;
};

/**
 * Add a recipe to the meal plan
 */
export const addToMealPlan = (recipe: Recipe): void => {
  const recipes = getMealPlan();
  if (recipes.find((r) => r.id === recipe.id) == null) {
    recipes.push(recipe);
    localStorage.setItem(lsKey, JSON.stringify(recipes));
  }
};
