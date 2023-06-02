import styles from "./create.module.scss";
import { SyntheticEvent, useContext } from "react";
import { AppContext } from "../../context/app.context";
import { Character } from "../../models/character";

export default function CreateCharacter() {
  const {
    characterContext: { handleAdd },
  } = useContext(AppContext);

  const onSubmit = (item: SyntheticEvent) => {
    item.preventDefault();
    const element = item.target as HTMLFormElement;

    const characterToAdd: Character = {
      id: 0,
      image: element.image,
      name: element.name,
      height: element.height,
      mass: element.mass,
      hair_color: element.value,
      eye_color: element.value,
      birth_year: element.value,
      gender: element.value,
      homeworld: element.value,
      url: "its local :(",
    };

    handleAdd(characterToAdd);
  };

  return (
    <>
      <h2>Create your own character</h2>
      <form onSubmit={onSubmit}>
        <div className={styles.inputscontainer}>
          <label htmlFor="image">
            <input type="text" id="image" placeholder="image url" />
          </label>
          <label htmlFor="name">
            <input type="text" id="name" placeholder="Name" />
          </label>
          <label htmlFor="height">
            <input type="number" id="height" placeholder="Height in cm" />
          </label>
          <label htmlFor="mass">
            <input type="number" id="mass" placeholder="Mass in kg" />
          </label>
          <label htmlFor="hair_color">
            <input type="text" id="hair_color" placeholder="Hair Color" />
          </label>
          <label htmlFor="eye_color">
            <input type="text" id="eye_color" placeholder="Eye Color" />
          </label>
          <label htmlFor="birth_year">
            <input type="text" id="birth_year" placeholder="Birth Year" />
          </label>
          <label htmlFor="gender">
            <input type="text" id="gender" placeholder="Gender" />
          </label>
          <label htmlFor="homeworld">
            <input type="text" id="homeworld" placeholder="Home World" />
          </label>
        </div>
        <div className={styles.buttonscontainer}>
          <input type="submit" value="CREATE" className={styles.button} />
          <input type="reset" value="RESET" className={styles.button} />
        </div>
      </form>
    </>
  );
}
