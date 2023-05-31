import { AppContext } from "../../context/app.context";
import { useContext } from "react";
import styles from "./favorite.card.info.module.scss";

export default function CharacterInfo() {
  const {
    characterContext: { currentCharacter },
  } = useContext(AppContext);

  return (
    <>
      <section className={styles.characterinfo}>
        <div>
          <img src={currentCharacter?.image} alt="" />
        </div>
        <div>
          <span>Name: {currentCharacter?.name}</span>
          <span>Height: {currentCharacter?.height} m</span>
          <span>Mass: {currentCharacter?.mass} Kg</span>
          <span>Hair Color: {currentCharacter?.hair_color}</span>
          <span>Eye Color: {currentCharacter?.eye_color}</span>
          <span>Birth Year: {currentCharacter?.birth_year}</span>
          <span>Gender: {currentCharacter?.gender}</span>
          <span>Home World: {currentCharacter?.homeworld}</span>
        </div>
      </section>
    </>
  );
}
