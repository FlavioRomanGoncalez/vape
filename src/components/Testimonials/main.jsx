// STYLE
import styles from "./main.module.css";

// IMAGES
import img01 from "../../assets/img01.webp";
import img02 from "../../assets/img02.webp";
import img03 from "../../assets/img03.webp";
import { useParallax } from "react-scroll-parallax";
export default function Testimonials() {
  const parallax = useParallax({
    easing: "easeOutQuad",
    scale: [0, 1.2],
  });
  return (
    <main className={styles.container}>
      <div className={styles.content} ref={parallax.ref}>
        <img src={img01} alt="image" className={styles.image} />
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          dolorum ea adipisci esse quibusdam quas ab cumque placeat, dolor
          dolorem, perspiciatis sint nisi quasi asperiores. Libero recusandae
          aut quis officiis?
        </p>
      </div>
    </main>
  );
}
