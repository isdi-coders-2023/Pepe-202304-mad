import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const List = lazy(() => import("../list/list"));
const CharacterInfo = lazy(() => import("../characterInfo/character.info"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<List></List>}></Route>
        <Route
          path="/character-info"
          element={<CharacterInfo></CharacterInfo>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
