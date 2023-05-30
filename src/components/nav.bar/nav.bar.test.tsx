import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavBar } from "./nav.bar";

describe("Given a navegation bar component", () => {
  describe("When it is istantiate", () => {
    test("Then it should be in the document", () => {
      render(<NavBar></NavBar>);
      const element = screen.getByRole("navigation");
      expect(element).toBeInTheDocument();
    });
  });
});
