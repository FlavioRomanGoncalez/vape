// STYLE
import styles from "./main.module.css";

// FLAGS
import ReactCountryFlag from "react-country-flag";

export default function Dealers() {
  return (
    <section id="dealers" className={styles.container}>
      <div>
        <h1 className={styles.title}>DEALERS</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora vel
          assumenda sapiente tempore recusandae animi minus sint saepe quam
          perspiciatis!
        </p>
        <div className={styles.flags}>
          <ReactCountryFlag className={styles.flag} countryCode="US" svg />
          <ReactCountryFlag className={styles.flag} countryCode="AR" svg />
          <ReactCountryFlag className={styles.flag} countryCode="BR" svg />
          <ReactCountryFlag className={styles.flag} countryCode="PY" svg />
        </div>
      </div>
    </section>
  );
}
