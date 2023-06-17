import React from "react";

import { screen, waitFor } from "@testing-library/react";
import { projectListResponse } from "__data__/project";
import * as projectAPI from "api";
import Projects from "containers/projects/Projects";
import renderWithProviders from "utils/renderWithProviders";

describe("Project", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should display title", async () => {
    const mockedProjects = jest
      .spyOn(projectAPI, "fetchProjects")
      .mockResolvedValue(projectListResponse);

    renderWithProviders(<Projects />);

    await waitFor(() => {
      expect(mockedProjects).toHaveBeenCalled();
    });

    expect(screen.getByText(/^Project One$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Project Two$/i)).toBeInTheDocument();
  });
});
