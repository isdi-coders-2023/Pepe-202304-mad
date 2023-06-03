import { AppRoutes } from "../app.routes/app.routes";

import GoBack from "../goback/goback";
import Header from "../header/header";
import NavBar from "../nav.bar/nav.bar";
import styles from "./App.module.scss";

export function App() {
  return (
    <div className={styles.app}>
      <Header></Header>
      <NavBar></NavBar>
      <AppRoutes></AppRoutes>
      <GoBack></GoBack>
    </div>
  );
}

//import Error404 from "../error.404/error.404";
//<Error404></Error404>
