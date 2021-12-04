import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderImageContainer from "./headerImageContainer";

test('renders header image container component', () => {
    render(<HeaderImageContainer />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});