import { useCharacters } from "../hooks/useCharacter";
import { AppContext } from "./app.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    characterContext: useCharacters(),
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
