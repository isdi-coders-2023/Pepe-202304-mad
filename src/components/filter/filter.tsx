import { SyntheticEvent, useContext } from "react";
import styles from "./filter.module.scss";
import { AppContext } from "../../context/app.context";

export default function SearchBar() {
  const {
    characterContext: { handleLoad },
  } = useContext(AppContext);

  const onSubmmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const search = e.target as HTMLFormElement;
    const searchName = search.names.value;
    const url = "https://swapi.dev/api/people/?search=" + searchName;
    handleLoad(url);
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={onSubmmit}>
        <input
          type="text"
          placeholder="Search characters..."
          name="names"
          id="names"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
