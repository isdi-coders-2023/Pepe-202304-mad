import { useCallback, useEffect, useMemo, useReducer } from "react";
import { Character } from "../models/character";
import { characterRepository } from "../services/character.repository";
import { consoleError } from "../services/errors";
import { CharacterState, characterReducer } from "../reducer/character.reducer";
import * as ac from "../reducer/character.actions.creator";

export function useCharacters() {
  const initialState: CharacterState = {
    characters: [],
    next: "",
    previous: "",
    currentCharacter: null,
    favoriteCharacters: [],
  };

  const [characterState, dispatch] = useReducer(characterReducer, initialState);

  const repo = useMemo(() => new characterRepository(), []);

  const handleLoad = useCallback(
    async (url = "https://swapi.dev/api/people/?page=") => {
      if (!url) return;
      const loadedCharacters = await repo.getAll(url);
      dispatch(ac.loadCharacterAction(loadedCharacters.results));
      dispatch(ac.nextCharacterAction(loadedCharacters.next));
      dispatch(ac.previousCharacterAction(loadedCharacters.previous));
    },
    [repo]
  );

  const handleLoadOneChar = async (character: Character) => {
    const loadedCharacter = await repo.getCharacter(character.url);
    dispatch(ac.loadSingleCharacterAction(loadedCharacter));
  };

  useEffect(() => {
    handleLoad("https://swapi.dev/api/people/?page=");
  }, [handleLoad]);

  const handleLoadLocalServer = useCallback(async () => {
    const loadedCharacters = await repo.getAllLocalFavorites();
    dispatch(ac.loadLocalCharacterAction(loadedCharacters));
  }, [repo]);

  useEffect(() => {
    handleLoadLocalServer();
  }, [handleLoadLocalServer]);

  const handleAdd = async (character: Character) => {
    try {
      const newCharacter = await repo.create(character);
      dispatch(ac.createCharacterAction(newCharacter));
    } catch (error) {
      consoleError(error);
    }
  };

  const handleUpdate = async (character: Character) => {
    try {
      const updatedCharacter = await repo.update(character.id, character);
      dispatch(ac.updateCharacterAction(updatedCharacter));
    } catch (error) {
      consoleError(error);
    }
  };

  const handleDelete = async (character: Character) => {
    try {
      await repo.delete(character.id);
      dispatch(ac.deleteCharacterAction(character.id));
    } catch (error) {
      consoleError(error);
    }
  };

  return {
    characters: characterState.characters,
    currentCharacter: characterState.currentCharacter,
    next: characterState.next,
    previous: characterState.previous,
    handleLoad,
    handleAdd,
    handleUpdate,
    handleDelete,
    handleLoadOneChar,
  };
}
