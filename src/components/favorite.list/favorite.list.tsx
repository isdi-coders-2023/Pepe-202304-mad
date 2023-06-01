import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FavoriteCharacterCard } from "../favoritecharactercard/favorite.character.card";
import styles from "./favorite.list.module.scss";
import Filter from "../filter/filter";

export default function FavoriteList() {
  const {
    characterContext: { favoriteCharacters },
  } = useContext(AppContext);

  return (
    <>
      <Filter></Filter>
      <h2 className={styles.title}>FAVORITE CHARACTERS</h2>
      <ul className={styles.list}>
        {favoriteCharacters.map((item) => (
          <FavoriteCharacterCard
            item={item}
            key={item.id}
          ></FavoriteCharacterCard>
        ))}
      </ul>
    </>
  );
}
