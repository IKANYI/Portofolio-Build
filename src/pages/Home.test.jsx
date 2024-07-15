import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./Home";

describe("Hero section", () => {
  it("renders a button component", () => {
    render(<Home />);
    const header = screen.getByRole("Header");
    expect(header).toBeInTheDocument();
  });
});
