import styles from "./filter.module.scss";
export default function filter() {
  return (
    <div className={styles.filter}>
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
  );
}
