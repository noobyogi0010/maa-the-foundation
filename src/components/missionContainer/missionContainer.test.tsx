import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionContainer from './missionContainer';

test('renders nabvbar component', () => {
  render(<MissionContainer />);
  const linkElement = screen.getByText(/MAA - The Foundation/i);
  expect(linkElement).toBeInTheDocument();
});
