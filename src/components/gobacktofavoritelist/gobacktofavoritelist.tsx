import styles from "./gobacktofavoritelist.module.scss";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/app.context";
import { useContext } from "react";
import { Character } from "../../models/character";

type PropsType = {
  item: Character | null;
};
export default function FavoriteListButtons({ item }: PropsType) {
  const {
    characterContext: { handleDelete, handleLoadLocalServer },
  } = useContext(AppContext);

  const navigate = useNavigate();

  const handleReturnHome = () => {
    handleLoadLocalServer();
    navigate("/favorite-character");
  };

  const handleRemoveFromFavorites = () => {
    if (!item) return;
    handleDelete(item);
    handleLoadLocalServer();
    navigate("/favorite-character");
    location.reload();
  };

  return (
    <section className={styles.listbuttons}>
      <button onClick={handleReturnHome}>Return to List</button>
      <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
    </section>
  );
}
