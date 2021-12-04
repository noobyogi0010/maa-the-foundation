import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './navbar';

test('renders nabvbar component', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/MAA - The Foundation/i);
  expect(linkElement).toBeInTheDocument();
});
