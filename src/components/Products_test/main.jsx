// STYLE
import styles from "./main.module.css";

// CONST VALUES
import { PRODUCTS } from "../../constant/main";

// IMAGES
import test from "../../assets/test.webp";
import logo from "../../assets/lamborghini_text_logo_white.png";
// import vape01 from "../../assets/vapes/vape_amarillo.webp";

export default function ProductsTest() {
  return (
    <>
      <main id="products" className={`${styles.container}`}>
        {/* <h1 className={styles.title}>PRODUCTS</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veniam
          rem placeat.
        </p> */}
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
