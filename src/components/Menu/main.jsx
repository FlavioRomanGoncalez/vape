// STYLE
import styles from "./main.module.css";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

// IMAGE
import logo from "../../assets/lamborghini_text_logo.png";

export default function Menu() {
  return (
    <main className={styles.container}>
      <ul className={styles.menu}>
        <h1 className={styles.title}>MENU ADMIN</h1>
        <Link to={"/admin"} className={styles.btn}>
          <span className={styles.text}>CARGAR CÓDIGO</span>
        </Link>
        <Link to={"/"} className={styles.btn}>
          <span className={styles.text}>VER LISTA</span>
        </Link>
      </ul>
      <footer>
        <img src={logo} alt="logo" />
      </footer>
    </main>
  );
}
