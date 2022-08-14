import { useState } from "react";

interface Props {
  initialValue?: number;
}

export const Counter = ({ initialValue = 0 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClickIncrease = () => {
    setCounter((val) => val + 1);
  };

  const handleClickDecrease = () => {
    setCounter((val) => val - 1);
  };

  return (
    <>
      <h3>Counter: {counter}</h3>
      <button onClick={handleClickDecrease}>Decrease</button>
      <button onClick={handleClickIncrease}>Increase</button>
    </>
  );
};
