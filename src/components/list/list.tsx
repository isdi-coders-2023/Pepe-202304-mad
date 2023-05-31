// import styles from "./list.module.scss";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { CharacterCard } from "../charactercard/character.card";
import styles from "./list.module.scss";

export default function List() {
  const {
    characterContext: { characters },
  } = useContext(AppContext);
  return (
    <ul className={styles.list}>
      {characters.map((item) => (
        <CharacterCard item={item} key={item.name}></CharacterCard>
      ))}
    </ul>
  );
}
