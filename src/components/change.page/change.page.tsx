import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import styles from "./change.page.module.scss";

export default function ChangePage() {
  const {
    characterContext: { handleLoad, next, previous },
  } = useContext(AppContext);

  function handlePrevious() {
    handleLoad(previous);
  }

  function handleNext() {
    handleLoad(next);
  }

  return (
    <>
      <section className={styles.changepage}>
        <button onClick={handlePrevious}>
          <img
            className={styles.lightsaberButtonNext}
            src="buttons.images/lightsaberButtonNext.png"
            alt="lightsaber button next"
          />
          Prev
        </button>
        <button onClick={handleNext}>
          <img
            className={styles.lightsaberButtonBack}
            src="buttons.images/lightsaberButtonBack.png"
            alt="lightsaber button back"
          />{" "}
          Next
        </button>
      </section>
    </>
  );
}
