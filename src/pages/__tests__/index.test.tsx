import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "components/Hero";

describe("Home Page", () => {
  it("renders a heading", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", {
      name: /Muhammad Ilham Mubarak \/\/ Aang/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
