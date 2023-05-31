import { Character } from "../../models/character";
import { AppContext } from "../../context/app.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./favorite.character.card.module.scss";

type PropsType = {
  item: Character;
};

export function FavoriteCharacterCard({ item }: PropsType) {
  const {
    characterContext: { handleLoadOneChar },
  } = useContext(AppContext);

  const navigate = useNavigate();

  const navigateToFavoriteCharacterInfo = () => {
    handleLoadOneChar(item);
    navigate("/favorite-character-info");
  };

  return (
    <>
      <li key={item.name} className={styles.characters}>
        <div>
          <img src={item.image} onClick={navigateToFavoriteCharacterInfo} />
        </div>
        <span>{item.name}</span>
      </li>
    </>
  );
}
