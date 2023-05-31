import { useNavigate } from "react-router-dom";
import styles from "./nav.bar.module.scss";
export default function NavBar() {
  const navigate = useNavigate();

  function navigateToFavoriteCharacters() {
    navigate("/favorite-character");
  }

  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <img
              height={96.63}
              width={99.69}
              src="buttons.images/create_corasonsito.png"
              alt="lovely stromtrooper"
            />
            <button>CREATE</button>
          </div>
          <div className={styles.button}>
            <img
              height={96.63}
              width={99.69}
              src="buttons.images/R2D2_corasonsito.png"
              alt="lovely Arturito"
              onClick={navigateToFavoriteCharacters}
            />

            <button>FAVORITE</button>
          </div>
        </div>
      </nav>
    </>
  );
}
