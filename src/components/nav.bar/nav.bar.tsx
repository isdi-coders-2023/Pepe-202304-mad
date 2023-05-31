import styles from "./nav.bar.module.scss";
export default function NavBar() {
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.createButton}>
          <img
            className={styles.stromtrooperButton}
            src="buttons.images/create_corasonsito.png"
            alt="lovely stromtrooper"
          />
          <button>CREATE</button>
        </div>
        <div className={styles.favoriteButton}>
          <img
            src="buttons.images/R2D2_corasonsito.png"
            alt="lovely Arturito"
          />

          <button>FAVORITE</button>
        </div>
        <div className={styles.separator}>
          <div className={styles.navRectangle}>
            <select className={styles.filterButton}>
              <option value="">FILTER</option>
              <option value="film">FILMS</option>
              <option value="homeworld">HOMEWORLD</option>
            </select>
            <img
              className={styles.filterArrow}
              src="buttons.images/Vector_down_arrow_link.svg.png"
              alt="arrow button"
              width={45}
              height={31}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
