import styles from "./nav.bar.module.scss";
export default function NavBar() {
  return (
    <>
      <nav className={styles.navBar}>
        <div className="create-button">
          <img
            src="buttons.images/create_corasonsito.png"
            alt="lovely stromtrooper"
          />
          <button>Create</button>
        </div>
        <div className="favorite--button">
          <img
            src="buttons.images/R2D2_corasonsito.png"
            alt="lovely Arturito"
          />

          <button>Favorite</button>
        </div>
        <div className="navBar-rectangle">
          <select className="filter-button">
            <option value="">Filter</option>
            <option value="film">Film</option>
            <option value="homeworld">Homeworld</option>
          </select>
        </div>
      </nav>
    </>
  );
}
