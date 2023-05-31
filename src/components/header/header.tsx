import { useNavigate } from "react-router-dom";
import styles from "./header.module.scss";

export default function Header() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <img
        src="/background.images/Star-Wars-Logo.png"
        alt="Logo Star Wars"
        width={311}
        height={144}
        onClick={handleReturnHome}
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
