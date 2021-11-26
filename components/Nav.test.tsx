import { render } from "@testing-library/react";
import Nav from "./Nav";

describe("navigation component", () => {
  it("renders smoke test", () => {
    const { container } = render(<Nav />);
    expect(container).toBeVisible();
  });

  it("renders menu items", () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId("mainnav").children.length).toBe(3);
  });
});
