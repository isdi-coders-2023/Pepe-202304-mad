import { Character } from "../models/character";
import { actionTypes } from "./actions.types";

export type CharacterAction = {
  type: keyof typeof actionTypes;
  payload: Character[] | Character | number;
};

export function loadCharacterAction(payload: Character[]): CharacterAction {
  return {
    type: actionTypes.load as keyof typeof actionTypes,
    payload,
  };
}

export function deleteCharacterAction(payload: number) {
  return {
    type: actionTypes.delete as keyof typeof actionTypes,
    payload,
  };
}

export function createCharacterAction(payload: Character) {
  return {
    type: actionTypes.create as keyof typeof actionTypes,
    payload,
  };
}

export function updateCharacterAction(payload: Character) {
  return {
    type: actionTypes.update as keyof typeof actionTypes,
    payload,
  };
}
