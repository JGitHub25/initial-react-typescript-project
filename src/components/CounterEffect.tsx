import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(8);
  const counterElem = useRef<HTMLHeadingElement>(null);

  const tl = useRef(gsap.timeline());

  useEffect(() => {
    if (counter < 10) return;
    console.log(`${MAXIMUN_COUNT} ES EL TOP DE ESTE CONTADOR`);

    tl.current
      .to(counterElem.current, { y: -10, duration: 2 })
      .to(counterElem.current, { y: 0, duration: 2 });
  }, [counter]);

  const handleClickIncrease = () => {
    if (counter >= MAXIMUN_COUNT) return;
    setCounter((val) => val + 1);
  };

  const handleClickDecrease = () => {
    setCounter((val) => val - 1);
  };

  return (
    <>
      <h3>Counter (Effect): </h3>
      <h4 ref={counterElem}>{counter}</h4>
      <button onClick={handleClickDecrease}>Decrease</button>
      <button onClick={handleClickIncrease}>Increase</button>
    </>
  );
};
