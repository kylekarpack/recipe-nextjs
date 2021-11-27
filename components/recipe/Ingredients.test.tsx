import { render } from "@testing-library/react";
import { CookingStateContextProvider } from "lib/hooks";
import { Recipe } from "lib/types";
import { Ingredients } from "./Ingredients";

const recipe: Recipe = {
  recipeIngredientGroups: [
    {
      name: "First test group",
      recipeIngredients: [
        {
          id: 1,
          ingredient: {
            name: "test ingredient"
          }
        }
      ]
    }
  ]
};

describe("ingredients component", () => {
  it("renders with no ingredients", () => {
    const { queryByTestId } = render(
      <CookingStateContextProvider>
        <Ingredients title="A Recipe" />
      </CookingStateContextProvider>
    );
    expect(queryByTestId("ingredients")).not.toBeInTheDocument();
  });

  it("renders ingredients", async () => {
    const { queryByTestId, queryAllByTestId } = render(
      <CookingStateContextProvider>
        <Ingredients {...recipe} />
      </CookingStateContextProvider>
    );
    expect(queryByTestId("ingredients")).toBeInTheDocument();
    expect(queryAllByTestId("ingredientGroup")).toHaveLength(recipe.recipeIngredientGroups.length);
    expect(queryAllByTestId("ingredientGroup")).toHaveLength(
      recipe.recipeIngredientGroups.flatMap((el) => el.recipeIngredients.length).length
    );
  });
});
