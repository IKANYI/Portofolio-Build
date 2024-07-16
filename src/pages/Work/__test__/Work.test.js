import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';


import Work from './Work';
import carolynImg from '../../assets/carolyn.jpg'; 

describe('Work Component', () => {
  it('renders the work title', () => {
    render(<Work />);
    const workTitle = screen.getByRole('heading', { name: /work/i });
    expect(workTitle).toBeInTheDocument();
  });

  it('renders the cards container', () => {
    render(<Work />);
    const cardsContainer = screen.getByRole('region', { name: /cards/i });
    expect(cardsContainer).toBeInTheDocument();
  });

  it('renders the work content image', () => {
    render(<Work />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', carolynImg);
  });

  it('renders the work content title', () => {
    render(<Work />);
    const contentTitle = screen.getByRole('heading', { name: /designing dashboards/i });
    expect(contentTitle).toBeInTheDocument();
  });

  it('renders the work content button', () => {
    render(<Work />);
    const button = screen.getByRole('button', { name: /2020/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the work content description', () => {
    render(<Work />);
    const description = screen.getByText(/lorem ipsum dolor sit amet consectetur/i);
    expect(description).toBeInTheDocument();
  });
});
