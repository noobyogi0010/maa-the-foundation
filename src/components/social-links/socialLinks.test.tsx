import React from "react";
import { render, screen } from "@testing-library/react";
import SocialLinks from "./socialLinks";

test('renders social link component', () => {
    render(<SocialLinks />);
    const linkElement = screen.getByText(/Instagram/i);
    expect(linkElement).toBeInTheDocument();
});