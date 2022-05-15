import { Recipe } from "../types";

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
 * Add a recipe to the meal plan
 */
export const addToMealPlan = (recipe: Recipe): void => {
  const recipes = getMealPlan();
  if (recipes.find((r) => r.id === recipe.id) == null) {
    recipes.push(recipe);
    localStorage.setItem(lsKey, JSON.stringify(recipes));
  }
};
