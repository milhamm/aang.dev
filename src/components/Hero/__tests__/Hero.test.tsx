import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../index";

describe("Hero", () => {
  it("should renders successfully", () => {
    render(<Hero />);
    const text = screen.getByText(/Muhammad Ilham Mubarak/i);
    expect(text).toBeInTheDocument();
  });
});
