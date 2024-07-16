import {render, screen} from "@testing-library/react"
import {describe, it, expect} from "vitest"
import Featured from "../Featured";

describe("Headings", () => {
  it("renders the heading elements", () => {
    render(<Featured />);
    const header = screen.queryAllByRole("Header");
    expect(header).toBeInTheDocument()
  });
});
