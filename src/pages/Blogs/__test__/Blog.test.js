
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Blog from '../Blog';

describe('Blog Component', () => {
  it('renders the main title', () => {
    render(<Blog />);
    const mainTitle = screen.getByText(/Blog/i);
    expect(mainTitle).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<Blog />);
    const subtitle = screen.getByText(/UI Interactions of the week/i);
    expect(subtitle).toBeInTheDocument();
  });

  it('renders the date and tags', () => {
    render(<Blog />);
    const dateAndTags = screen.getByText(/12 Feb 2019/i);
    expect(dateAndTags).toBeInTheDocument();
    const tags = screen.getByText(/Express, Handlebars/i);
    expect(tags).toBeInTheDocument();
  });

  it('renders the main content paragraph', () => {
    render(<Blog />);
    const contentParagraph = screen.getByText(/Lorem ipsum dolor sit amet consectetur/i);
    expect(contentParagraph).toBeInTheDocument();
  });
});
