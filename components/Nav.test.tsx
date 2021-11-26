import { render } from "@testing-library/react";
import React from "react";
import Nav from "./Nav";

describe("navigation component", () => {
  it("renders smoke test", () => {
    const cmp = render(<Nav />);
    expect(cmp.container).toBeVisible();
  });

  it("renders menu items", () => {
		const cmp = render(<Nav />);
		expect(cmp.getByTestId("mainnav").children.length).toBe(3);
	});
});
