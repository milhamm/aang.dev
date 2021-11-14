import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home Page", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /ini aang/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
