import { Header } from "../header/header";
import { List } from "../list/list";
import { NavBar } from "../nav/nav.bar";
import styles from "./App.module.scss";

export function App() {
  return (
    <div className={styles.app}>
      <Header></Header>
      <NavBar></NavBar>
      <List></List>
    </div>
  );
}
