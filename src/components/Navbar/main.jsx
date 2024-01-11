// STYLE
import styles from "./main.module.css";

// ICON
import { FaBars } from "react-icons/fa";

// LOGO
import logo from "../../assets/logo.webp";

// CUSTOM HOOK
import { useNav } from "../../hooks/useNav";

// CONSTANT VALUES
import { NAV_OPTIONS } from "../../constant/main";

export default function Navbar() {
  const { show, setShow, change } = useNav();

  return (
    <>
      <nav
        className={styles.container_nav}
        style={{ backgroundColor: `${change ? "#252525" : "transparent"}` }}
      >
        <a href="#about" className={styles.container_logo}>
          <img src={logo} alt="logo" className={styles.logo} />
        </a>
        <ul
          className={styles.nav_lists}
          style={{ top: `${show ? "0%" : "100%"}` }}
        >
          {NAV_OPTIONS.map((value) => {
            return (
              <a
                key={value?.id}
                href={value?.href}
                className={styles.nav_list}
                onClick={() => setShow(false)}
              >
                {value?.text}
              </a>
            );
          })}
        </ul>
        <div className={styles.nav_option}>
          <img src={"../../assets/img01.webp"} alt="" />
          <FaBars
            size={28}
            color={show ? "#000" : "#fff"}
            onClick={() => setShow(!show)}
          />
        </div>
      </nav>
    </>
  );
}
