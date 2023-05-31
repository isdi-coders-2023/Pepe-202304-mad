import Header from "../header/header";
import styles from "./error.404.module.scss";

export default function Error404() {
  return (
    <>
      <Header></Header>
      <div className={styles.errorContainer}>
        <img
          className={styles.droidsImage}
          src="/background.images/pngeggdasdas.png"
          alt="arturito and gold gay robot"
          width={326}
          height={377}
        />

        <p>These aren't the</p>
        <p>Doids you're</p>
        <p>looking for...</p>

        <span>404Error</span>
        <span>page not found</span>
      </div>
    </>
  );
}
