import { Character } from "../../models/character";

type PropsType = {
  item: Character;
};

export function CharacterInfo({ item }: PropsType) {
  return (
    <>
      <section>
        <span>Name: {item.name}</span>
        <span>Name: {item.name}</span>
        <span>Name: {item.name}</span>
        <span>Name: {item.name}</span>
        <span>Name: {item.name}</span>
        <span>Name: {item.name}</span>
      </section>
    </>
  );
}
