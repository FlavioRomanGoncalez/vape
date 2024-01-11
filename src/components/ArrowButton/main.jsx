// STYLE
import styles from "./main.module.css";

// REACT ICONS
import { FaArrowDown } from "react-icons/fa";

// REACT SPRING
import { useSpring, animated } from "@react-spring/web";

export default function ArrowButton({ href }) {
  const props = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(1000px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)",
    },
  });
  return (
    <>
      <animated.a href={href} style={props} className={styles.container}>
        {/* <div className={styles.dot}></div> */}
        <FaArrowDown className={styles.button} />
      </animated.a>
    </>
  );
}
