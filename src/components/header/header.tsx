import { styles } from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <img src="../../public/img/Star-Wars-Logo.png" alt="Logo Star Wars" />
    </header>
  );
}
