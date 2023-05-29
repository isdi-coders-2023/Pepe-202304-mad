import styles from "./goback.module.scss";

export function GoBack() {
  return (
    <div className={styles.goback}>
      <button>GO BACK</button>
      <img
        src="buttons.images/Vector_down_arrow_link.svg.png"
        alt="arrow button"
        width={45}
        height={31}
      />
    </div>
  );
}
