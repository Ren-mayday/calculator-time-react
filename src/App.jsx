import { useState, useEffect } from "react";
import { useActualDate } from "./customsHooks/useActualDate.jsx";
import Timer from "./components/Timer/Timer.jsx";
import "./App.css";

function App() {
  const date = useActualDate();

  return <Timer date={date} />;
}

export default App;
