// REACT / HOOKS
import { useEffect, useState } from "react";

export function useNav() {
  const [show, setShow] = useState(false);
  const [change, setChange] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setChange(true);
      } else {
        setChange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [change]);

  return { show, setShow, change, setChange };
}
