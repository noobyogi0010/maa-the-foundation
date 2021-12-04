import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderInfoContainer from "./headerInfoContainer";

test('renders header info container component', () => {
    render(<HeaderInfoContainer />);
    const linkElement = screen.getByText(/Charity/i);
    expect(linkElement).toBeInTheDocument();
})