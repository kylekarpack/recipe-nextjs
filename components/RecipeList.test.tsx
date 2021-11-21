import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { act, render } from "@testing-library/react";
import { GraphQLError } from "graphql";
import React from "react";
import { GET_RANDOM_RECIPES } from "utilities/queries";
import { Recipe } from "utilities/types";
import RecipeList from "./RecipeList";

const getMock = (limit: number = 0): MockedResponse<Record<string, Recipe[]>> => {
  return {
    request: {
      query: GET_RANDOM_RECIPES
    },
    result: {
      data: {
        hits: []
      }
    }
  };
};

describe.skip("widget display component", () => {
  it("renders empty", () => {
    const mocks = [getMock()];

    const cmp = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RecipeList {...mocks[0] as any} />
      </MockedProvider>
    );

    expect(cmp.container).toBeVisible();
  });

  it("renders widgets", async () => {
    const limit = 5;
    const mocks = [getMock(limit)];

    const cmp = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RecipeList {...mocks[0] as any} />
      </MockedProvider>
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(cmp.container.querySelectorAll("tbody tr").length).toBe(limit);
  })

  it("renders error", async () => {
    const errorText = "Bad";
    const mocks = [
      {
        ...getMock(),
        error: new GraphQLError(errorText)
      }
    ];

    const cmp = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RecipeList {...mocks[0] as any} />
      </MockedProvider>
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(cmp.getByTestId("error")).toHaveTextContent(errorText);
  });
});
