// STYLE
import styles from "./main.module.css";

// REACT / HOOK
import { useState, useEffect } from "react";

// IMAGES
import vape01 from "../../assets/vapes/vape_amarillo.webp";
import vape02 from "../../assets/vapes/vape_azul.webp";
import vape03 from "../../assets/vapes/vape_rojo.webp";
import vape04 from "../../assets/vapes/vape_magenta.webp";
import vape05 from "../../assets/vapes/vape_lamborghini.webp";
import vape06 from "../../assets/vapes/vape_verde.webp";

// REACT SPRING
import { useTransition, animated, useSpringRef } from "@react-spring/web";

const pages = [
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        textShadow: "none !important",
        backgroundColor: "#000",
      }}
    >
      <h1 className={styles.title} style={{ color: "#fff" }}>
        PRODUCTS
      </h1>
      <img src={vape01} alt="image" className={styles.image} />
      <p className={styles.desc} style={{ color: "#ffff" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo harum
        molestiae quos delectus labore consequatur atque quaerat, nam dolores!
      </p>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        textShadow: "none !important",
      }}
    >
      <h1 className={styles.title} style={{ color: "#000" }}>
        PRODUCTS
      </h1>
      <img src={vape02} alt="image" className={styles.image} />
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo harum
        molestiae quos delectus labore consequatur atque quaerat, nam dolores!
      </p>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        textShadow: "none !important",
        backgroundColor: "#000",
      }}
    >
      <h1 className={styles.title} style={{ color: "#fff" }}>
        PRODUCTS
      </h1>
      <img src={vape03} alt="image" className={styles.image} />
      <p className={styles.desc} style={{ color: "#ffff" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo harum
        molestiae quos delectus labore consequatur atque quaerat, nam dolores!
      </p>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        textShadow: "none !important",
      }}
    >
      <h1 className={styles.title} style={{ color: "#000" }}>
        PRODUCTS
      </h1>
      <img src={vape04} alt="image" className={styles.image} />
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo harum
        molestiae quos delectus labore consequatur atque quaerat, nam dolores!
      </p>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        textShadow: "none !important",
        backgroundColor: "#000",
      }}
    >
      <h1 className={styles.title} style={{ color: "#fff" }}>
        PRODUCTS
      </h1>
      <img src={vape05} alt="image" className={styles.image} />
      <p className={styles.desc} style={{ color: "#ffff" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo harum
        molestiae quos delectus labore consequatur atque quaerat, nam dolores!
      </p>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        textShadow: "none !important",
      }}
    >
      <h1 className={styles.title} style={{ color: "#000" }}>
        PRODUCTS
      </h1>
      <img src={vape06} alt="image" className={styles.image} />
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo harum
        molestiae quos delectus labore consequatur atque quaerat, nam dolores!
      </p>
    </animated.div>
  ),
];

export default function Products() {
  const [index, set] = useState(0);

  const onClick = () => set((state) => (state + 1) % 6);

  const transRef = useSpringRef();

  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: {
      opacity: 0,
      transform: "translate3d(100%,0,0)",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)",
    },
    leave: {
      opacity: 0,
      transform: "translate3d(-50%,0,0)",
    },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <>
      <div
        id="products"
        className={`flex fill ${styles.container}`}
        onClick={onClick}
      >
        {transitions((style, i) => {
          const Page = pages[i];
          return (
            <>
              <Page style={style} />
            </>
          );
        })}
      </div>
    </>
  );
}
