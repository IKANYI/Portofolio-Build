import {render, screen} from "@testing-library/react"
import {describe, it, expect} from "vitest"
import Recent from "../Recent"

describe('Recent Component', () => {
    it('displays the correct heading for recent posts', () => {
      render(<Recent />);
      const heading = screen.getByRole('heading', { name: /Recent posts/i });
      expect(heading).toBeInTheDocument();
    });
  
    it('renders the view all link', () => {
      render(<Recent />);
      const link = screen.findByRole('link', { name: /View all/i });
      expect(link).toBeTruthy();
    });
  
    it('displays the correct post titles and details', () => {
      render(<Recent />);
      const firstPostTitle = screen.getByRole('heading', { name: /Making design system from scratch/i });
      const firstPostDetails = screen.getByText(/Design Pattern/i);
  
      expect(firstPostTitle).toBeInTheDocument();
      expect(firstPostDetails).toBeInTheDocument();
      
      const secondPostTitle = screen.getByRole('heading', { name: /Creating pixel perfect icons in Figma/i });
      const secondPostDetails = screen.getByText(/Figma,Icon Design/i);
      expect(secondPostTitle).toBeInTheDocument();
      expect(secondPostDetails).toBeInTheDocument();
    
    });
    it("displays the contents in both the posts", () => {
        render(<Recent />)
      const postContents = screen.queryAllByText(/Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum quam consectetur. Odio nesciunt quam accusantium quis excepturi aliquid nemo./i);
      expect(postContents).toBeTruthy()
    })
  });