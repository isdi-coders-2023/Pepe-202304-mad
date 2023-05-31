import styles from "./change.page.module.scss";

export default function ChangePage() {
  return (
    <section className={styles.changepage}>
      <button>Prev</button>
      <button>Next</button>
    </section>
  );
}
