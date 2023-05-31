import ChangePage from "../change.page/change.page";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { CharacterCard } from "../charactercard/character.card";
import styles from "./list.module.scss";
import Filter from "../filter/filter";

export default function List() {
  const {
    characterContext: { characters },
  } = useContext(AppContext);

  return (
    <>
      <Filter></Filter>
      <ul className={styles.list}>
        {characters.map((item) => (
          <CharacterCard item={item} key={item.name}></CharacterCard>
        ))}
      </ul>
      <ChangePage></ChangePage>
    </>
  );
}
