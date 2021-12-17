import React from 'react';
import { render, screen } from '@testing-library/react';
import OurMission from './ourMission';

test('renders nabvbar component', () => {
  render(<OurMission />);
  const linkElement = screen.getByText(/MAA - The Foundation/i);
  expect(linkElement).toBeInTheDocument();
});
