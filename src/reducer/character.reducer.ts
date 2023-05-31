import { Character } from "../models/character";
import { CharacterAction } from "./character.actions.creator";
import { actionTypes } from "./character.actions.types";

export type CharacterState = {
  characters: Character[];
  next: string | undefined;
  previous: string | undefined;
  currentCharacter: Character | null;
  favoriteCharacters: Character[];
};

export const characterReducer = (
  state: CharacterState,
  action: CharacterAction
) => {
  let payload: Character[] | Character | number | string | undefined;
  switch (action.type) {
    case actionTypes.load:
      payload = action.payload as Character[];
      return {
        ...state,
        characters: payload,
      };

    case actionTypes.loadLocal:
      payload = action.payload as Character[];
      return {
        ...state,
        favoriteCharacters: payload,
      };

    case actionTypes.next:
      payload = action.payload as string | undefined;
      return { ...state, next: payload };

    case actionTypes.previous:
      payload = action.payload as string | undefined;
      return { ...state, previous: payload };

    case actionTypes.create:
      payload = action.payload as Character;
      return { ...state, characters: [...state.characters, payload] };

    case actionTypes.update:
      payload = action.payload as Character;
      return {
        ...state,
        characters: state.characters.map((item) =>
          item.id === (payload as Character).id ? (payload as Character) : item
        ),
      };

    case actionTypes.loadOne:
      payload = action.payload as Character;
      return { ...state, currentCharacter: payload };

    case actionTypes.delete:
      payload = action.payload as number;
      return {
        ...state,
        characters: state.characters.filter((item) => item.id !== payload),
      };

    default:
      return { ...state };
  }
};
