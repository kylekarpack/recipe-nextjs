import { ApolloError } from "@apollo/client";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { act, render } from "@testing-library/react";
import { GET_RANDOM_RECIPES } from "lib/queries";
import { RecipeResults, RecipeSearchHitItem } from "lib/types";
import RecipeList from "./RecipeList";

const getRecipes = (limit: number): RecipeSearchHitItem[] =>
  new Array(limit).fill({}).map((_, i) => ({
    _source: {
      title: `Recipe ${i}`,
      id: String(i)
    }
  }));

const getMock = (limit = 0): MockedResponse<RecipeResults> => ({
  request: {
    query: GET_RANDOM_RECIPES
  },
  result: {
    data: {
      search: {
        hits: getRecipes(limit)
      }
    }
  }
});

describe("recipe list component", () => {
  it("renders empty", () => {
    const mocks = [getMock()];

    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RecipeList {...mocks[0].result} />
      </MockedProvider>
    );

    expect(container).toBeVisible();
  });

  it("renders number of recipes", async () => {
    const limit = 5;
    const mocks = [getMock(limit)];

    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RecipeList {...mocks[0].result} />
      </MockedProvider>
    );

    await act(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 0);
        })
    );
    expect(getByTestId("grid").childElementCount).toBe(limit);
  });

  it("renders error", async () => {
    const errorMessage = "Bad";
    const mocks = [
      {
        ...getMock(),
        error: new ApolloError({ errorMessage })
      }
    ];

    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RecipeList error={mocks[0].error} />
      </MockedProvider>
    );

    await act(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 0);
        })
    );
    expect(getByTestId("error")).toHaveTextContent(errorMessage);
  });
});
