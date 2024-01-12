// REACT / HOOKS
import { useEffect, useState } from "react";

export function useNav() {
  const [show, setShow] = useState(false);
  const [change, setChange] = useState(false);
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setChange(true);
      } else {
        setChange(false);
      }
      if (offset > prevOffset) {
        console.log("abajo");
        setShow(false);
      } else {
        console.log("arriba");
        setShow(true);
      }
      setPrevOffset(offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [change, prevOffset]);

  return { show, setShow, change, setChange };
}
