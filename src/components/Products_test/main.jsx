// STYLE
import styles from "./main.module.css";

// IMAGES
import vape01 from "../../assets/vapes/vape_amarillo.webp";
import vape02 from "../../assets/vapes/vape_azul.webp";
import vape03 from "../../assets/vapes/vape_rojo.webp";
import vape04 from "../../assets/vapes/vape_magenta.webp";
import vape05 from "../../assets/vapes/vape_lamborghini.webp";
import vape06 from "../../assets/vapes/vape_verde.webp";

export default function ProductsTest() {
  return (
    <>
      <main id="products" className={`${styles.container}`}>
        <h1 className={styles.title}>PRODUCTS</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veniam
          rem placeat.
        </p>
        <div className={styles.container_card}>
          {Array(6)
            .fill()
            .map((_, index) => {
              return (
                <div key={index} className={styles.card}>
                  <img className={styles.image} src={vape01} alt="" />
                  <h3 className={styles.name}>Name</h3>
                  <p className={styles.desc}>
                    Name Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
}
