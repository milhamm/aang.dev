import React from "react";
import { render, fireEvent } from "utils/test-utils";
import Navbar from "components/Navbar";
import { useRouter } from "next/router";

jest.mock("next/router");

beforeEach(() => {
  (useRouter as jest.Mock).mockReturnValue({
    asPath: "",
  });
});

describe("Navbar", () => {
  it("should successfully renders", () => {
    const { container } = render(<Navbar />);
    expect(container).toBeInTheDocument();
  });

  it("should successfully render 3 NavItems ", () => {
    const { getAllByRole } = render(<Navbar />);
    const navItems = getAllByRole("listitem");

    expect(navItems).toHaveLength(3);
  });

  describe("Dark Mode Toggle Button", () => {
    it("should successfully renders light theme", () => {
      const { getByTestId } = render(<Navbar />);

      const button = getByTestId("btn-toggle");
      const darkButton = getByTestId("dark-btn");

      expect(button).toBeInTheDocument();
      expect(darkButton).toBeInTheDocument();
    });

    it("should have renders dark theme when clicked", async () => {
      const { findByTestId, getByTestId } = render(<Navbar />);

      const btn = getByTestId("btn-toggle");
      fireEvent.click(btn);

      const darkButton = await findByTestId("light-btn");
      expect(darkButton).toBeInTheDocument();
    });
  });
});
