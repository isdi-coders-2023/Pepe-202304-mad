import { useCharacters } from "./use.character";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Character } from "../models/character";
import { characterRepository } from "../services/character.repository";

const mockCharacter: Character = {
  id: 1,
  name: "Test",
  url: "url",
} as Character;

characterRepository.prototype.getAll = jest.fn();
characterRepository.prototype.getAllLocal = jest.fn();
characterRepository.prototype.getCharacter = jest.fn();
characterRepository.prototype.create = jest
  .fn()
  .mockResolvedValue(mockCharacter);
characterRepository.prototype.update = jest.fn();
characterRepository.prototype.delete = jest.fn();

(characterRepository.prototype.getAll as jest.Mock).mockResolvedValue([
  mockCharacter,
]);
(characterRepository.prototype.getAllLocal as jest.Mock).mockResolvedValue([
  mockCharacter,
]);

function TestComponent() {
  const {
    handleLoad,
    handleAdd,
    handleUpdate,
    handleDelete,
    handleLoadOneChar,
    handleLoadLocalFavoritesServer,
    handleLoadLocalCreatedServer,
    handleLoadOneFavoriteChar,
    handleLoadOneCreatedChar,
    togglefeedbackMessage,
  } = useCharacters();

  return (
    <>
      <button onClick={() => handleLoad()}>Load</button>
      <button onClick={() => handleAdd(mockCharacter, "url")}>Add</button>
      <button onClick={() => handleUpdate(mockCharacter)}>Update</button>
      <button onClick={() => handleDelete(mockCharacter, "url")}>Delete</button>
      <button onClick={() => handleLoadOneChar(mockCharacter)}>
        Load One Char
      </button>
      <button onClick={() => handleLoadLocalFavoritesServer()}>
        Load Local Favorites
      </button>
      <button onClick={() => handleLoadLocalCreatedServer()}>
        Load Local Created
      </button>
      <button onClick={() => handleLoadOneFavoriteChar(mockCharacter)}>
        Load One Favorite
      </button>
      <button onClick={() => handleLoadOneCreatedChar(mockCharacter)}>
        Load One Created
      </button>
      <button onClick={() => togglefeedbackMessage()}>Toggle Feedback</button>
    </>
  );
}

describe("Given the hook useCharacters", () => {
  let elements: HTMLElement[];
  beforeEach(async () => {
    await act(async () => {
      render(<TestComponent />);
    });
    elements = screen.getAllByRole("button");
  });

  describe("When all is OK", () => {
    test("Then it should load characters", async () => {
      await userEvent.click(elements[0]);
      expect(characterRepository.prototype.getAll).toHaveBeenCalled();
    });

    test("Then it should add a character", async () => {
      await userEvent.click(elements[1]);
      expect(characterRepository.prototype.create).toHaveBeenCalled();
    });
  });
});
