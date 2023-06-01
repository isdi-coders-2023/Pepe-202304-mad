import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContextStructure, AppContext } from "../../context/app.context";
import { MemoryRouter } from "react-router-dom";
import ListButtons from "./gobacktolist";
import { Character } from "../../models/character";

describe("first", () => {
  describe("first", () => {
    const item = {} as Character;

    const value: ContextStructure = {
      characterContext: {
        currentCharacter: {},
      },
    } as unknown as ContextStructure;
    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <ListButtons item={item} />
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test("should ", () => {
      const element = screen.getAllByRole("button");
      expect(element[0]).toBeInTheDocument();
      expect(element[1]).toBeInTheDocument();
    });
  });
});
