import { render } from "@testing-library/react";
import React from "react";
import { Recipe } from "utilities/types";
import { Ingredients } from "./Ingredients";

const recipe: Recipe = {
  recipeIngredientGroups: [
    {
      name: "First test group",
      recipeIngredients: [
        {
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
    const { queryByTestId } = render(<Ingredients title="A Recipe" />);
    expect(queryByTestId("ingredients")).not.toBeInTheDocument();
  });

  it("renders ingredients", async () => {
    const { queryByTestId, queryAllByTestId } = render(<Ingredients {...recipe} />);
    const container = queryByTestId("ingredients");
    expect(container).toBeInTheDocument();
    expect(queryAllByTestId("ingredientGroup")).toHaveLength(recipe.recipeIngredientGroups.length);
    expect(queryAllByTestId("ingredientGroup")).toHaveLength(
      recipe.recipeIngredientGroups.flatMap((el) => el.recipeIngredients.length).length
    );
  });
});
