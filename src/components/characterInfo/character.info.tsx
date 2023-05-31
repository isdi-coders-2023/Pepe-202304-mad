import { AppContext } from "../../context/app.context";
import { useContext } from "react";
import styles from "./character.info.module.scss";

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
          <span>Name: {currentCharacter?.eye_color}</span>
          <span>Height: {currentCharacter?.image}</span>
          <span>Mass: {currentCharacter?.name}</span>
          <span>Hair Color: {currentCharacter?.name}</span>
          <span>Eye Color: {currentCharacter?.name}</span>
          <span>Birth Year: {currentCharacter?.name}</span>
          <span>Gender: </span>
          <span>Home World: </span>
          <span>Films: </span>
        </div>
      </section>
    </>
  );
}
