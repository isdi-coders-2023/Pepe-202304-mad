import styles from "./nav.bar.module.scss";
export default function NavBar() {
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
            />

            <button>FAVORITE</button>
          </div>
        </div>
        <div className={styles.separator}>
          <div className={styles.navRectangle}>
            <select className={styles.filterButton}>
              <option value="">FILTER</option>
            </select>
            <img
              className={styles.filterArrow}
              src="buttons.images/Vector_down_arrow_link.svg.png"
              alt="arrow button"
              width={54.73}
              height={41.73}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
