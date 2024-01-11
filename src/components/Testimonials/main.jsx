// STYLE
import styles from "./main.module.css";

// IMAGES
import img01 from "../../assets/img01.webp";
import img02 from "../../assets/img02.webp";
import img03 from "../../assets/img03.webp";

// REACT / HOOK
import { useState, useEffect } from "react";

// REACT SPRING
import { useTransition, animated, useSpringRef } from "@react-spring/web";

const pages = [
  ({ style }) => (
    <animated.div
      style={{
        ...style,
      }}
    >
      <img src={img01} alt="image" className={styles.image} />
      <div>
        <h2 className={styles.subtitle}>John</h2>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo
          harum molestiae quos delectus labore consequatur atque quaerat, nam
          dolores!
        </p>
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
      }}
    >
      <img src={img02} alt="image" className={styles.image} />
      <div>
        <h2 className={styles.subtitle}>Jessica</h2>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo
          harum molestiae quos delectus labore consequatur atque quaerat, nam
          dolores!
        </p>
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
      }}
    >
      <img src={img03} alt="image" className={styles.image} />
      <div>
        <h2 className={styles.subtitle}>Ken</h2>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo
          harum molestiae quos delectus labore consequatur atque quaerat, nam
          dolores!
        </p>
      </div>
    </animated.div>
  ),
];

export default function Testimonials() {
  const [index, set] = useState(0);

  const onClick = () => set((state) => (state + 1) % 3);

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
        id="testimonials"
        className={`flex fill ${styles.container}`}
        onClick={onClick}
      >
        <h1 className={styles.title}>TESTIMONIALS</h1>
        {transitions((style, i) => {
          const Page = pages[i];
          return <Page style={style} />;
        })}
      </div>
    </>
  );
}
