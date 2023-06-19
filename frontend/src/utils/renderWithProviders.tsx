import React, { ReactNode } from "react";

import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import baseTheme from "uistore/theme/baseTheme";

export default function renderWithProviders(
  ui: Parameters<typeof render>[0],
  { ...renderOptions }: Parameters<typeof render>[1] = {},
): {
  render: ReturnType<typeof render>;
} {
  const Wrapper: React.ComponentType = ({ children }: { children?: ReactNode }) => {
    const client = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    return (
      <QueryClientProvider client={client}>
        <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>
      </QueryClientProvider>
    );
  };

  return {
    render: render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
