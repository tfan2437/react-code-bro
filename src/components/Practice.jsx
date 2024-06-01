import { useState } from "react";

const Practice = () => {
  const [number, setNumber] = useState(0);

  const handleDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
    setNumber((prevNumber) => prevNumber - 1);
    setNumber((prevNumber) => prevNumber - 1);
  };

  const handleReset = () => {
    setNumber(0);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleDecrease}>Decease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Practice;
