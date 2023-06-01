import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./nav.bar";
import { ContextStructure, AppContext } from "../../context/app.context";
import { MemoryRouter } from "react-router-dom";

describe("Given a navegation bar component", () => {
  describe("When it is istantiate", () => {
    const value: ContextStructure = {
      characterContext: {
        currentCharacter: {
          handleLoadLocalServer: jest.fn(),
        },
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <NavBar />
          </AppContext.Provider>
        </MemoryRouter>
      );
    });
    test("Then it should be in the document", () => {
      const element = screen.getByRole("navigation");
      expect(element).toBeInTheDocument();
    });
  });
});
