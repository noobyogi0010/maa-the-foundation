import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionHeading from './sectionHeading';

test('renders nabvbar component', () => {
  render(<SectionHeading />);
  const linkElement = screen.getByText(/MAA - The Foundation/i);
  expect(linkElement).toBeInTheDocument();
});
