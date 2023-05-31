import { AppContext } from "../../context/app.context";
import { useContext } from "react";

export default function CharacterInfo() {
  const {
    characterContext: { currentCharacter },
  } = useContext(AppContext);

  return (
    <>
      <section>
        <img src={currentCharacter?.image} alt="" />
        <span>Name: {currentCharacter?.eye_color}</span>
        <span>Name: {currentCharacter?.image}</span>
        <span>Name: {currentCharacter?.name}</span>
        <span>Name: {currentCharacter?.name}</span>
        <span>Name: {currentCharacter?.name}</span>
        <span>Name: {currentCharacter?.name}</span>
      </section>
    </>
  );
}
