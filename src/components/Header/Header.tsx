import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navigation = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.headerMainContainer}>
        <div className={styles.logoContainer} onClick={() => navigation("/")}>
          <img src="/logo.svg" className={styles.logo} />
          <h4>Chapter Chase</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
