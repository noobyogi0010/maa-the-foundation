import React from 'react';
import { render, screen } from '@testing-library/react';
import OurTeam from './ourTeam';

test('renders nabvbar component', () => {
  render(<OurTeam />);
  const linkElement = screen.getByText(/MAA - The Foundation/i);
  expect(linkElement).toBeInTheDocument();
});
