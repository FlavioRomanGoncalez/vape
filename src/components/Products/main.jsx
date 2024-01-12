// STYLE
import styles from "./main.module.css";

// CONST VALUES
import { PRODUCTS } from "../../constant/main";

// IMAGES
import test from "../../assets/test.webp";
import logo from "../../assets/lamborghini_text_logo_white.png";
// import vape01 from "../../assets/vapes/vape_amarillo.webp";

export default function Products() {
  return (
    <>
      <main id="products" className={`${styles.container}`}>
        <div className={styles.container_card}>
          {PRODUCTS.map((value) => {
            return (
              <div
                key={value.id}
                className={`${styles.card} animate__animated animate__fadeInRight`}
                style={{ backgroundColor: `${value.bgColor}` }}
              >
                <h3
                  className={styles.number}
                  style={{ color: `${value.textColor}` }}
                >
                  {value.id}
                </h3>
                <h4
                  className={styles.name}
                  style={{ color: `${value.textColor}` }}
                >
                  {value.name}
                </h4>
                <img className={styles.image} src={test} alt="vape" />
                <img className={styles.logo} src={logo} alt="logo" />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
