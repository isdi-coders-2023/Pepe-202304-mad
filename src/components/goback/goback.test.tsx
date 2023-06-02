import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GoBack from "./goback";
import userEvent from "@testing-library/user-event";

import { MemoryRouter } from "react-router-dom";

describe("Given the GoBack component", () => {
  describe("When ", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <GoBack />
        </MemoryRouter>
      );
    });

    test("Then it should ", async () => {
      const button = screen.getByRole("button");

      userEvent.click(button);
      expect(button).toBeInTheDocument();
    });
  });
});
