import "./App.css";
import { useReducer } from "react";

function App() {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );
  return <h1 onClick={() => setNumber(1)}>{number}</h1>;
}

export default App;
