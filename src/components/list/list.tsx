import styles from "./list.module.scss";
export function List() {
  return (
    <ul>
      <li className={styles.list}>
        <div></div>
      </li>
      <li className={styles.name}>ITEM 3</li>
    </ul>
  );
}
