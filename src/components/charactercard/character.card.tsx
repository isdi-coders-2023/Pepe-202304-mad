import { Character } from "../../models/character";

type PropsType = {
  item: Character;
};

export function CharacterCard({ item }: PropsType) {
  return (
    <>
      <li key={item.name}>
        <div>
          <img
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
