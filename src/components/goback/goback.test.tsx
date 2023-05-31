import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import GoBack from "./goback";

describe("Given the GoBack functon", () => {
  describe("When ", () => {
    test("Then it should ", async () => {
      render(<GoBack></GoBack>);

      const buttonFunction = (document.documentElement.scrollTop = 0);

      const elementButton = screen.getByRole("button");

      await userEvent.click(elementButton);

      expect(buttonFunction).toHaveBeenCalled();
    });
  });
});
