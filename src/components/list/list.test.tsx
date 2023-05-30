import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { List } from "./list";

describe("Given header component", () => {
  describe("When it is instantiate", () => {
    test("Then it should be in the document", () => {
      render(<List></List>);

      const element = screen.getByRole("list");

      expect(element).toBeInTheDocument();
    });
  });
});
