import { act, render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import "@testing-library/jest-dom";

const MockedComponent = jest.fn().mockReturnValue(<p>Hola</p>);
jest.mock("../list/list", () => MockedComponent);

const MockedComponent2 = jest.fn().mockReturnValue(<p>Que tal?</p>);
jest.mock("../characterInfo/character.info", () => MockedComponent2);

const MockedComponent3 = jest.fn().mockReturnValue(<p>Adios</p>);
jest.mock("../favorite.list/favorite.list", () => MockedComponent3);

const MockedComponent4 = jest.fn().mockReturnValue(<p>Buenas tardes</p>);
jest.mock("../favoritecardinfo/favorite.card.info", () => MockedComponent4);

describe("Given the AppRoutes component", () => {
  describe("When it is instantiate with a route", () => {
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element = screen.getByText("Hola");
    });

    test("Then it should ", () => {
      expect(MockedComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiate with a route", () => {
    let element2: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/character-info"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element2 = screen.getByText("Que tal?");
    });

    test("Then it should ", () => {
      expect(MockedComponent2).toHaveBeenCalled();
      expect(element2).toBeInTheDocument();
    });
  });

  describe("When it is instantiate with a route", () => {
    let element3: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/favorite-character"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element3 = screen.getByText("Adios");
    });

    test("Then it should ", () => {
      expect(MockedComponent3).toHaveBeenCalled();
      expect(element3).toBeInTheDocument();
    });
  });

  describe("When it is instantiate with a route", () => {
    let element4: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router
            initialEntries={["/favorite-character-info"]}
            initialIndex={0}
          >
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element4 = screen.getByText("Buenas tardes");
    });

    test("Then it should ", () => {
      expect(MockedComponent4).toHaveBeenCalled();
      expect(element4).toBeInTheDocument();
    });
  });
});
