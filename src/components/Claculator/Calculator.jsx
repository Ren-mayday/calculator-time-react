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
