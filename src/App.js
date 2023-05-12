import "./App.css";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} out of {totalStars}
      </p>
    </>
  );
}

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}

function App() {
  return <StarRating totalStars={5} />;
}

export default App;
