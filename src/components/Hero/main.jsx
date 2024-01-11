// STYLE
import styles from "./main.module.css";

// IMAGES
import logo from "../../assets/lamborghini_text_logo_white.png";
import ArrowButton from "../ArrowButton/main";

export default function Hero() {
  return (
    <>
      <section id="home" className={styles.container}>
        <div>
          <img
            alt="image"
            src={logo}
            className={`${styles.image} animate__animated animate__fadeInDown`}
          />
          <ArrowButton href="#products" />
        </div>
      </section>
    </>
  );
}
