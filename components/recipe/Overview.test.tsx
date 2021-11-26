import { render, screen } from "@testing-library/react";
import React from "react";
import { Overview } from "./Overview";

describe("recipe overview component", () => {
  it("renders empty", () => {
    const { container } = render(<Overview />);
    expect(container).toBeVisible();
  });

  it("renders an overview", () => {
    render(<Overview overview="Test content" />);
    expect(screen.getByText(/test content/i)).toBeInTheDocument();
  });
});
