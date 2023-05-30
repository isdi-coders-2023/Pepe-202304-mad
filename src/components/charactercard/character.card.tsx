import { Character } from "../../models/character";
import styles from "./character.card.module.scss";

type PropsType = {
  item: Character;
};

export function CharacterCard({ item }: PropsType) {
  return (
    <>
      <li key={item.name} className={styles.characters}>
        <div className="image-container">
          <img
            className="character-image"
            src={
              "https://starwars-visualguide.com/assets/img/characters/" +
              item.url.split("/")[5] +
              ".jpg"
            }
          />
        </div>
        <div>
          <span>{item.name}</span>
        </div>
      </li>
    </>
  );
}
