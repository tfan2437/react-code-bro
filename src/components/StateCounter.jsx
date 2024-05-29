import { useState } from "react";

const StateCounter = () => {
  const [number, setNumber] = useState(0);

  const handleDecrease = () => {
    setNumber(number - 1);
  };

  const handleIncrease = () => {
    setNumber(number + 1);
  };

  const handleReset = () => {
    setNumber(0);
  };

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrease}>Increase</button>
      </div>
    </div>
  );
};

export default StateCounter;
