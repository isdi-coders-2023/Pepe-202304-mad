import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Header = lazy(() => import("../header/header"));
const NavBar = lazy(() => import("../nav.bar/nav.bar"));
const List = lazy(() => import("../list/list"));
const GoBack = lazy(() => import("../goback/goback"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="header" element={<Header></Header>}></Route>
        <Route path="navBar" element={<NavBar></NavBar>}></Route>
        <Route path="list" element={<List></List>}></Route>
        <Route path="goBack" element={<GoBack></GoBack>}></Route>
      </Routes>
    </Suspense>
  );
}
