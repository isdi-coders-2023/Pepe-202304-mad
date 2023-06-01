import { useContext } from "react";
import { Character } from "../../models/character";
import styles from "./gobacktolist.module.scss";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/app.context";

type PropsType = {
  item: Character | null;
};

export default function ListButtons({ item }: PropsType) {
  const {
    characterContext: { handleAdd },
  } = useContext(AppContext);

  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  const handleAddToFavorites = () => {
    if (!item) return;
    handleAdd(item);
  };

  return (
    <section className={styles.listbuttons}>
      <button onClick={handleReturnHome}>Return to List</button>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
    </section>
  );
}
