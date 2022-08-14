import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 0 }) => {
  const [counter, setCounter] = useState(0);
  const elemToAnimate = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (counter < 10) return;
    console.log(`${maxCount} ES EL TOP DE ESTE CONTADOR`);

    const tl = gsap.timeline();

    tl.to(elemToAnimate.current, { y: -10, duration: 2 }).to(
      elemToAnimate.current,
      { y: 0, duration: 2 }
    );
  }, [counter, maxCount]);

  const handleClickIncrease = () => {
    if (counter >= maxCount) return;
    setCounter((val) => val + 1);
  };

  const handleClickDecrease = () => {
    setCounter((val) => val - 1);
  };

  return { counter, elemToAnimate, handleClickDecrease, handleClickIncrease };
};
