import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./header";
import { ContextStructure, AppContext } from "../../context/app.context";
import { MemoryRouter } from "react-router-dom";

describe("Given header component", () => {
  describe("When it is instantiate", () => {
    const value: ContextStructure = {
      characterContext: {
        currentCharacter: {
          handleLoad: jest.fn(),
        },
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <Header />
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test("Then it should be in the document", () => {
      const element = screen.getByRole("banner");
      expect(element).toBeInTheDocument();
    });
  });
});
