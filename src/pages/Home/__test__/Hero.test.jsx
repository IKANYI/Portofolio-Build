import {render, screen} from "@testing-library/react"
import {describe, it, expect} from "vitest"
import Hero from "../Hero"

describe('Hero Component', () => {
    it('displays the correct profile information', () => {
      render(<Hero />);
      const heading = screen.getByRole('heading', { name: /Hi, I'm John, Creative Technologist/i });
      expect(heading).toBeInTheDocument();
    
      const paragraph = screen.getByText(/Lorem ipsum dolor sit amet/i);
      expect(paragraph).toBeInTheDocument();
    });
  
    it('renders the download resume link', () => {
      render(<Hero />);
      const link = screen.getByRole('link', { name: /Download Resume/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/path-to-resume.pdf');
      expect(link).toHaveAttribute('download');
    });
  
    it('renders the profile image', () => {
      render(<Hero />);
      const image = screen.getByAltText(/John's profile picture/i);
      expect(image).toBeInTheDocument();
    });
  });

