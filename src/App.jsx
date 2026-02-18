import { useState, useEffect } from "react";
import { useActualDate } from "./customsHooks/useActualDate.jsx";
import Timer from "./components/Timer/Timer.jsx";
import "./App.css";
import Calculator from "./components/Claculator/Calculator.jsx";

function App() {
  const date = useActualDate();

  return (
    <>
      <main>
        <Timer date={date} />
        <Calculator />
      </main>
    </>
  );
}

export default App;
