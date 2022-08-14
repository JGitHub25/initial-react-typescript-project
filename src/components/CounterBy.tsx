import { useState } from "react";

interface Props {
  initialValue?: number;
}

interface StateObj {
  value: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
  const [counter, setCounter] = useState<StateObj>({
    value: initialValue,
    clicks: 0,
  });

  const handleClickIncrease = () => {
    setCounter((obj) => {
      return { ...obj, value: counter.value + 5, clicks: counter.clicks + 1 };
    });
  };

  const handleClickDecrease = () => {
    setCounter((obj) => {
      return { ...obj, value: counter.value - 5, clicks: counter.clicks + 1 };
    });
  };

  return (
    <>
      <h3>Counter By: {counter.value}</h3>
      <h3>Clicks: {counter.clicks}</h3>
      <button onClick={handleClickDecrease}>Decrease by 5</button>
      <button onClick={handleClickIncrease}>Increase by 5</button>
    </>
  );
};
