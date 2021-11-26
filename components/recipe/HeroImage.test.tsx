import { render } from "@testing-library/react";
import React from "react";
import { HeroImage } from "./HeroImage";

describe("hero image component", () => {
  it("renders with no image", () => {
    const { queryByTestId } = render(<HeroImage title="A Recipe" />);
    expect(queryByTestId("hero")).toBeNull();
  });

  it("renders image", () => {
    const { queryByTestId } = render(<HeroImage title="A Recipe" photo={{ heroImageUrl: "https://test.com" }} />);
    expect(queryByTestId("heroImage")).toBeTruthy();
    expect(queryByTestId("title").textContent).toBe("A Recipe");
  });
});
