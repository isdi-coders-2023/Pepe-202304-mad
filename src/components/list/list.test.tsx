import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "./list";
import { Character } from "../../models/character";
import { AppContext, ContextStructure } from "../../context/app.context";

describe("Given List component", () => {
  const characters = [{}] as Character[];

  const value: ContextStructure = {
    characterContext: {
      characters,
    },
  } as unknown as ContextStructure;

  beforeEach(() => {
    render(
      <AppContext.Provider value={value}>
        <List></List>
      </AppContext.Provider>
    );
  });

  describe("When it is instantiate", () => {
    test("Then it should be in the document", () => {
      const element = screen.getByRole("list");

      expect(element).toBeInTheDocument();
    });
  });
});
