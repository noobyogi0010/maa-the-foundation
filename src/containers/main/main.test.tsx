import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './main';

test('renders main component', () => {
  render(<Main />);
  const linkElement = screen.getByText(/MAA - The Foundation/i);
  expect(linkElement).toBeInTheDocument();
});
