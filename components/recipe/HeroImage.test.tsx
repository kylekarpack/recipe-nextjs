import { render } from "@testing-library/react";
import { CookingStateContextProvider } from "lib/hooks";
import { HeroImage } from "./HeroImage";

describe("hero image component", () => {
  it("renders with no image", () => {
    const { queryByTestId } = render(
      <CookingStateContextProvider>
        <HeroImage title="A Recipe" />
      </CookingStateContextProvider>
    );
    expect(queryByTestId("hero")).toBeNull();
  });

  it("renders image", () => {
    const { queryByTestId } = render(
      <CookingStateContextProvider>
        <HeroImage title="A Recipe" photo={{ heroImageUrl: "https://test.com" }} />
      </CookingStateContextProvider>
    );
    expect(queryByTestId("heroImage")).toBeTruthy();
    expect(queryByTestId("title").textContent).toBe("A Recipe");
  });
});
