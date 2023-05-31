import styles from "./create.module.scss";

export default function Create() {
  return (
    <>
      <h2>Add your own stormtrooper</h2>
      <form action="">
        <div className={styles.inputscontainer}>
          <label htmlFor="clone-number">
            <input
              type="text"
              name=""
              id="clone-number"
              placeholder="Clone number"
            />
          </label>
          <label htmlFor="hair-style">
            <input
              type="text"
              name=""
              id="hair-style"
              placeholder="Hair style"
            />
          </label>
          <label htmlFor="skin-color">
            <input
              type="text"
              name=""
              id="skin-color"
              placeholder="Skin color"
            />
          </label>
          <label htmlFor="eye-color">
            <input type="text" name="" id="eye-color" placeholder="Eye color" />
          </label>
        </div>
        <div className={styles.buttonscontainer}>
          <input type="button" value="CREATE" className={styles.button} />
          <input type="button" value="RESET" className={styles.button} />
        </div>
      </form>
    </>
  );
}
