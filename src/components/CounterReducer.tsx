import { useReducer } from "react";

interface StateObj {
  value: number;
  prevValue: number;
  changes: number;
}

type ActionObj =
  | { type: "INCREASE" }
  | { type: "DECREASE" }
  | { type: "INCREASE_BY"; payload: { value: number } };

const initialState: StateObj = { value: 0, prevValue: 0, changes: 0 };

const reducer = (state: StateObj, action: ActionObj): StateObj => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        prevValue: state.value,
        value: state.value + 1,
        changes: state.changes + 1,
      };
    case "DECREASE":
      return {
        ...state,
        prevValue: state.value,
        value: state.value - 1,
        changes: state.changes + 1,
      };
    case "INCREASE_BY":
      return {
        ...state,
        prevValue: state.value,
        value: state.value + action.payload.value,
        changes: state.changes + 1,
      };
    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { value, prevValue, changes } = state;

  const handleClickIncrease = () => {
    dispatch({ type: "INCREASE" });
  };

  const handleClickDecrease = () => {
    dispatch({ type: "DECREASE" });
  };

  const handleClickIncreaseBy = () => {
    dispatch({ type: "INCREASE_BY", payload: { value: 5 } });
  };

  return (
    <>
      <h3>Counter (reducer): {value}</h3>
      {/* <pre>{JSON.stringify(state, null, "---")}</pre> */}
      <h4>Prev: {prevValue}</h4>
      <h5>Changes: {changes}</h5>
      <button onClick={handleClickDecrease}>Decrease</button>
      <button onClick={handleClickIncrease}>Increase</button>
      <button onClick={handleClickIncreaseBy}>Increase by 5</button>
    </>
  );
};
