import { render } from "@testing-library/react";
import { CookingStateContextProvider } from "lib/hooks";
import { Recipe } from "lib/types";
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
    const { queryByTestId } = render(
      <CookingStateContextProvider>
        <Instructions title="A Recipe" />
      </CookingStateContextProvider>
    );
    expect(queryByTestId("instructions")).not.toBeInTheDocument();
  });

  it("renders instructions", async () => {
    const { queryByTestId, queryAllByTestId } = render(
      <CookingStateContextProvider>
        <Instructions {...recipe} />
      </CookingStateContextProvider>
    );
    expect(queryByTestId("instructions")).toBeInTheDocument();
    expect(queryByTestId("instructionsList")).toBeInTheDocument();
    expect(queryAllByTestId("instruction")).toHaveLength(recipe.instructions.length);
  });
});
