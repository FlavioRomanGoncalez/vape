// STYLES
import styles from "./main.module.css";

// VIDEO
// import vid01 from "../../assets/video.mp4";

// IMAGE
import img01 from "../../assets/test.webp";

// REACT ICONS
import ArrowButton from "../ArrowButton/main";

// REACT SPRING
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function About() {
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <section id="about" className={styles.container}>
      {/* VIDEO */}
      {/* <video className={styles.video} autoPlay loop muted>
        <source src={vid01} type="video/mp4" />
      </video> */}

      <Parallax className={styles.parallax} pages={4}>
        {/* PARALLAX 1 */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <h1 className={styles.title}>ABOUT US</h1>
        </ParallaxLayer>

        {/* PARALLAX 2 */}
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <img src={img01} className={styles.image} />
            <ArrowButton href={"#products"} />
          </div>
        </ParallaxLayer>

        {/* PARALLAX 3 */}
        <ParallaxLayer offset={1.5} speed={0.1} style={{ ...alignCenter }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <h2
              className={styles.desc}
              style={{ marginLeft: "auto", textAlign: "right" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, facilis!
            </h2>
          </div>
        </ParallaxLayer>

        {/* PARALLAX 4 */}
        <ParallaxLayer offset={2.5} speed={0.1} style={{ ...alignCenter }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <h2
              className={styles.desc}
              style={{ marginRight: "auto", textAlign: "left" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              itaque?
            </h2>
          </div>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
}
