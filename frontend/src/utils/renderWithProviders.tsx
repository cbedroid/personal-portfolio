import React, { ReactNode } from "react";

import { render } from "@testing-library/react";
import { theme } from "App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

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
      <div className="cui">
        <QueryClientProvider client={client}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </QueryClientProvider>
      </div>
    );
  };

  return {
    render: render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
