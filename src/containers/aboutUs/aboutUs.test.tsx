import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './aboutUs';

test('renders nabvbar component', () => {
  render(<AboutUs />);
  const linkElement = screen.getByText(/MAA - The Foundation/i);
  expect(linkElement).toBeInTheDocument();
});
