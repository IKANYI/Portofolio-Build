import {render, screen} from "@testing-library/react"
import {describe, it, expect} from "vitest"
import Featured from "../Featured";


describe("Featured Component", () => {
    it("renders the heading elements", () => {
        render(<Featured />);
        const header = screen.queryAllByRole("Heading");
        expect(header).toBeTruthy()
      });

    it('renders the Featured Works title', () => {
      render(<Featured />)
      const title = screen.getByText(/Featured Works/i)
      expect(title).toBeInTheDocument()
})
it('renders all work items', () => {
    render(<Featured />);
    const workItems = screen.getAllByRole('img', { name: /work thumbnail/i });
    expect(workItems).toHaveLength(3);
  });

  it('renders the correct titles for work items', () => {
    render(<Featured />);
    const dashboard = screen.getByText(/Designing Dashboards/i)
    expect(dashboard).toBeInTheDocument()
    const board = screen.getByText(/Vibrant Portraits of 2020/i)
    expect(board).toBeInTheDocument();
    const subject = screen.getByText(/36 days of Malayalam type/i)
    expect(subject).toBeInTheDocument();
  });

  it('renders the correct years and types for work items', () => {
    render(<Featured />);
    expect(screen.queryAllByText(/2020/i)).toBeTruthy();
    expect(screen.getAllByText(/Dashboard/i)).toBeTruthy();
    expect(screen.queryAllByText(/2018/i)).toBeTruthy();
    expect(screen.getByText(/Illustration/i)).toBeTruthy();
    expect(screen.getByText(/Typography/i)).toBeTruthy();
  });
});