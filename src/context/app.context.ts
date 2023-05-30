import { createContext, useContext } from "react";
import { useCharacters } from "../hooks/useCharacter";

export type ContextStructure = {
  characterContext: ReturnType<typeof useCharacters>;
};

export const AppContext = createContext<ContextStructure>(
  {} as ContextStructure
);
