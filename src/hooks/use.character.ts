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
    feedbackMessage: false,
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
    const url = "characters/";
    const loadedCharacters = await repo.getAllLocalFavorites(url);
    dispatch(ac.loadLocalCharacterAction(loadedCharacters));
  }, [repo]);

  useEffect(() => {
    handleLoadLocalServer();
  }, [handleLoadLocalServer]);

  const handleLoadOneFavoriteChar = async (character: Character) => {
    const loadedCharacter = await repo.getFavoriteCharacter(character.id);
    dispatch(ac.loadSingleCharacterAction(loadedCharacter));
  };

  const handleAdd = async (character: Character, url: string) => {
    try {
      const newCharacter = await repo.create(character, url);
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

  const handleDelete = async (character: Character, url: string) => {
    try {
      await repo.delete(character.id, url);
      dispatch(ac.deleteCharacterAction(character.id));
    } catch (error) {
      consoleError(error);
    }
  };

  const togglefeedbackMessage = () => {
    dispatch(ac.togglefeedbackMessageAction());
    setTimeout(() => {
      dispatch(ac.togglefeedbackMessageAction());
    }, 3000);
  };

  return {
    characters: characterState.characters,
    currentCharacter: characterState.currentCharacter,
    next: characterState.next,
    previous: characterState.previous,
    favoriteCharacters: characterState.favoriteCharacters,
    feedbackMessage: characterState.feedbackMessage,
    handleLoad,
    handleAdd,
    handleUpdate,
    handleDelete,
    handleLoadOneChar,
    handleLoadOneFavoriteChar,
    handleLoadLocalServer,
    togglefeedbackMessage,
  };
}
