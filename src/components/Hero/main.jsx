// REACT / HOOK
import { useState } from "react";

// STYLE
import styles from "./main.module.css";

// COMPONENTS
import ArrowButton from "../ArrowButton/main";

// IMAGES
import img_01 from "../../assets/vapes/vape_amarillo.webp";
import img_02 from "../../assets/vapes/vape_azul.webp";
import img_03 from "../../assets/vapes/vape_magenta.webp";

export default function Hero() {
  const [images, setImage] = useState({
    img01: false,
    img02: false,
    img03: false,
  });

  return (
    <>
      <section id="home" className={styles.container}>
        {/* IMAGES */}
        <div className={styles.container_images}>
          <img
            style={{ visibility: "hidden" }}
            alt="image"
            src={img_01}
            className={styles.image_01}
          />
          <img
            alt="image"
            src={img_01}
            className={styles.image_02}
            style={{ left: `${images.img02 ? "-30%" : "0%"}` }}
          />
          <img
            alt="image"
            src={img_02}
            className={styles.image_02}
            style={{ left: `${images.img02 ? "30%" : "0%"}` }}
          />
          <img
            alt="image"
            src={img_03}
            className={styles.image_03}
            onMouseEnter={() =>
              setImage({ img01: true, img02: true, img03: true })
            }
            onMouseLeave={() =>
              setImage({ img01: false, img02: false, img03: false })
            }
            style={{
              transform: `${images.img03 ? "scale(1.1)" : "scale(1)"}`,
            }}
          />
        </div>

        {/* TITLE / DESCRIPTION / BUTTON */}
        <div className={styles.container_info}>
          <h1 className={styles.title}>ABOUT</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            consectetur rem? Beatae illo nam voluptate nesciunt placeat
            necessitatibus eius natus autem animi.
          </p>
          <ArrowButton href={"#products"} />
        </div>
      </section>
    </>
  );
}
