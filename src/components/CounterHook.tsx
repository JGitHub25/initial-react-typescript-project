import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
  const { counter, elemToAnimate, handleClickDecrease, handleClickIncrease } =
    useCounter({ maxCount: 17 });

  return (
    <>
      <h3>Counter (Hook): </h3>
      <h4 ref={elemToAnimate}>{counter}</h4>
      <button onClick={handleClickDecrease}>Decrease</button>
      <button onClick={handleClickIncrease}>Increase</button>
    </>
  );
};
