import styles from "./gobacktofavoritelist.module.scss";
import { useNavigate } from "react-router-dom";

export default function FavoriteListButtons() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/favorite-character");
  };

  return (
    <section className={styles.listbuttons}>
      <button onClick={handleReturnHome}>Return to List</button>
      <button onClick={handleReturnHome}>Remove from Favorites</button>
    </section>
  );
}
