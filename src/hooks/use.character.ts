import { useCallback, useEffect, useMemo, useReducer } from "react";
import { Character } from "../models/character";
import { characterRepository } from "../services/character.repository";
import { consoleError } from "../services/errors";
import { CharacterState, characterReducer } from "../reducer/character.reducer";
import * as ac from "../reducer/character.actions.creator";

export function useCharacters() {
  const initialState: CharacterState = {
    characters: [],
    currentCharacter: null,
  };

  const [characterState, dispatch] = useReducer(characterReducer, initialState);

  const repo = useMemo(() => new characterRepository(), []);

  const handleLoad = useCallback(async () => {
    const loadedCharacter = await repo.getAll();
    dispatch(ac.loadCharacterAction(loadedCharacter));
  }, [repo]);

  const handleLoadOneChar = async (character: Character) => {
    const loadedCharacter = await repo.getCharacter(character.url);
    dispatch(ac.loadSingleCharacterAction(loadedCharacter));
  };

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

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
    handleAdd,
    handleUpdate,
    handleDelete,
    handleLoadOneChar,
  };
}
