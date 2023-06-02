import { useNavigate } from "react-router-dom";
import styles from "./nav.bar.module.scss";
import { AppContext } from "../../context/app.context";
import { useContext } from "react";
export default function NavBar() {
  const {
    characterContext: { handleLoadLocalServer },
  } = useContext(AppContext);

  const navigate = useNavigate();

  function navigateToFavoriteCharacters() {
    handleLoadLocalServer();
    navigate("/favorite-character");
  }

  function navigateToCreateCharacter() {
    navigate("/create-character");
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
              onClick={navigateToCreateCharacter}
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

            <button>FAVORITES</button>
          </div>
        </div>
      </nav>
    </>
  );
}
