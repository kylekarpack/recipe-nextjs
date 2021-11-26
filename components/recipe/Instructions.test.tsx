import { render } from "@testing-library/react";
import React from "react";
import { Recipe } from "utilities/types";
import { Instructions } from "./Instructions";

const recipe: Recipe = {
  instructions: [
    {
      content: "Step 1"
    }
  ]
};

describe("instructions component", () => {
  it("renders with no instructions", () => {
    const { queryByTestId } = render(<Instructions title="A Recipe" />);
    expect(queryByTestId("instructions")).not.toBeInTheDocument();
  });

  it("renders instructions", async () => {
    const { queryByTestId, queryAllByTestId } = render(<Instructions {...recipe} />);
    expect(queryByTestId("instructions")).toBeInTheDocument();
    expect(queryByTestId("instructionsList")).toBeInTheDocument();
    expect(queryAllByTestId("instruction")).toHaveLength(recipe.instructions.length);
  });
});
