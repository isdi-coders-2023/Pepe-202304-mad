import { Header } from "../header/header";
import { List } from "../list/list";
import styles from "./App.module.scss";

export function App() {
  return (
    <div className={styles.app}>
      <Header></Header>
      <List></List>
    </div>
  );
}
