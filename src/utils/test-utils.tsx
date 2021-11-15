import React, { ComponentType, ReactElement } from "react";
import { ThemeProvider } from "next-themes";
import { render } from "@testing-library/react";

interface ProvidersProps {
  children: ReactElement;
}

const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: Providers as ComponentType, ...options });

export * from "@testing-library/react";
export { customRender as render };
