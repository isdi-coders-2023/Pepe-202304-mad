import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useCharacters } from "./use.character";
import userEvent from "@testing-library/user-event";

describe("Given the custom hook useCharacters", () => {
  describe("When given the values of", () => {
    function TestComponent() {
      return <h1>The Test Component</h1>;
    }

    test("It should render ", () => {
      render(<TestComponent></TestComponent>);
    });
  });
});
