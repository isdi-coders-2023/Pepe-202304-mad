import styles from "./gobacktolist.module.scss";
import { useNavigate } from "react-router-dom";

export default function ListButtons() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <section className={styles.listbuttons}>
      <button onClick={handleReturnHome}>Return to List</button>
      <button onClick={handleReturnHome}>Add to Favorites</button>
    </section>
  );
}
