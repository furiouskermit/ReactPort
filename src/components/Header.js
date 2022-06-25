import { Link } from "react-router-dom";
import styles from "../App.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.trigger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.sidebar}></div>
      <div><Link to="/"><span className={styles.headerLogo}>Furious Kermit</span></Link></div>
    </header>
  );
}

export default Header;