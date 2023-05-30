import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src="/background.images/Star-Wars-Logo.png"
        alt="Logo Star Wars"
        width={311}
        height={144}
      />
      <img
        src="/background.images/weirdlightsaber.jpg"
        alt="blue saber"
        width={311}
        height={20}
      />
    </header>
  );
}
