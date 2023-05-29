import { Character } from "../models/character";
import { CharacterAction } from "./actions.creator";
import { actionTypes } from "./actions.types";

export type CharacterState = {
  characters: Character[];
};

export const characterReducer = (
  state: CharacterState,
  action: CharacterAction
) => {
  let payload: Character[] | Character | number;
  switch (action.type) {
    case actionTypes.load:
      payload = action.payload as Character[];
      return { ...state, characters: payload };

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
