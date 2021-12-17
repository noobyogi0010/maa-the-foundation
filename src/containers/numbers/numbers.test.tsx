import React from 'react';
import { render, screen } from '@testing-library/react';
import Numbers from './numbers';

test('renders nabvbar component', () => {
  render(<Numbers />);
  const linkElement = screen.getByText(/MAA - The Foundation/i);
  expect(linkElement).toBeInTheDocument();
});
