import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filter from "./filter";
import { ContextStructure, AppContext } from "../../context/app.context";
import { MemoryRouter } from "react-router-dom";
// import userEvent from "@testing-library/user-event";

describe("Given search component", () => {
  describe("When it is instantiate", () => {
    const mockHandleLoad = jest.fn();
    const value: ContextStructure = {
      characterContext: {
        handleLoad: mockHandleLoad,
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <Filter />
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test("Then it should be in the document", () => {
      const element = screen.getByRole("textbox");
      expect(element).toBeInTheDocument();
    });

    // test("Then the user should hit the submit button", async () => {
    //   const inputElement = screen.getByRole("textbox");
    //   const submitButton = screen.getByRole("button");

    //   await userEvent.type(inputElement, "Luke Skywalker");
    //   userEvent.click(submitButton);

    //   await waitFor(() => {
    //     expect(mockHandleLoad).toHaveBeenCalled();
    //   });
    // });
  });
});
