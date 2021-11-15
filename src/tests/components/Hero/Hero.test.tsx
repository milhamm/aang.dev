import React from "react";
import { render } from "utils/test-utils";
import Hero from "components/Hero";

describe("Hero", () => {
  it("should renders successfully", () => {
    const { getByText } = render(<Hero />);

    const fullName = getByText(/Muhammad Ilham Mubarak/i);
    const shortName = getByText(/Aang/i);

    expect(fullName).toBeInTheDocument();
    expect(shortName).toBeInTheDocument();
  });
});
