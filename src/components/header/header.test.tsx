import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./header";

describe("Given header component", () => {
  describe("When it is instantiate", () => {
    test("Then it should be in the document", () => {
      render(<Header></Header>);

      const element = screen.getByRole("banner");

      expect(element).toBeInTheDocument();
    });
  });
});
