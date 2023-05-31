import { Character } from "../../models/character";
import styles from "./character.card.module.scss";
import { AppContext } from "../../context/app.context";
import { useContext } from "react";

type PropsType = {
  item: Character;
};

export function CharacterCard({ item }: PropsType) {
  const {
    characterContext: { handleLoadOneChar },
  } = useContext(AppContext);

  function handleClick() {
    handleLoadOneChar(item);
  }

  return (
    <>
      <li key={item.name} className={styles.characters}>
        <div>
          <img
            src={
              "https://starwars-visualguide.com/assets/img/characters/" +
              item.url.split("/")[5] +
              ".jpg"
            }
            onClick={handleClick}
          />
        </div>
        <span>{item.name}</span>
      </li>
    </>
  );
}
