import { useReducer } from "react";

const initialState = {
  num1: 0,
  num2: 0,
  mathOperation: null,
  result: null,
  numRecord: [],
  inputValue: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NUMBER":
      if (state.mathOperation === null) {
        return { ...state, num1: action.payload };
      } else {
        return { ...state, num2: action.payload };
      }
    case "SET_OPERATION":
      return { ...state, mathOperation: action.payload, inputValue: "" };
    case "SET_RESULT":
      const { num1, num2, mathOperation } = state;
      let result;

      if (mathOperation === "+") result = num1 + num2;
      if (mathOperation === "-") result = num1 - num2;
      if (mathOperation === "*") result = num1 * num2;
      if (mathOperation === "/") result = num1 / num2;
      if (mathOperation === "%") result = (num1 * num2) / 100;

      return {
        ...state,
        result: result,
        numRecord: [...state.numRecord, result].sort((a, b) => a - b),
        inputValue: "",
        num1: 0,
        num2: 0,
        mathOperation: null,
      };
    case "SET_INPUT":
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumber = (e) => {
    dispatch({ type: "SET_NUMBER", payload: Number(e.target.value) });
    dispatch({ type: "SET_INPUT", payload: e.target.value });
  };

  return (
    <div className="calculator-container">
      <input type="number" value={state.inputValue} onChange={handleNumber} />
      <button onClick={() => dispatch({ type: "SET_OPERATION", payload: "+" })}>➕</button>
      <button onClick={() => dispatch({ type: "SET_OPERATION", payload: "-" })}>➖</button>
      <button onClick={() => dispatch({ type: "SET_OPERATION", payload: "*" })}>✖️</button>
      <button onClick={() => dispatch({ type: "SET_OPERATION", payload: "/" })}>➗</button>
      <button onClick={() => dispatch({ type: "SET_OPERATION", payload: "%" })}>%</button>
      <button onClick={() => dispatch({ type: "SET_RESULT" })}>🟰</button>

      <p>Último resultado: {state.result}</p>
      <ul>
        {state.numRecord.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Calculator;
