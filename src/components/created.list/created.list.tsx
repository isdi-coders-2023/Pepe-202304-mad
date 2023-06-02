import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { CreatedCharacterCard } from "../createdcharactercard/created.character.card";
import styles from "./created.list.module.scss";

export default function CreatedList() {
  const {
    characterContext: { createdCharacters },
  } = useContext(AppContext);

  return (
    <>
      <h2 className={styles.title}>CREATED CHARACTERS</h2>
      <ul className={styles.list}>
        {createdCharacters.map((item) => (
          <CreatedCharacterCard
            item={item}
            key={item.id}
          ></CreatedCharacterCard>
        ))}
      </ul>
    </>
  );
}
