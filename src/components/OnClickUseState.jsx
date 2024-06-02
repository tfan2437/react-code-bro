import { useState } from "react";

const OnClickUseState = () => {
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
        <button onClick={(e) => handleDecrease(e)}>Decrease</button>
        <button onClick={(e) => handleReset(e)}>Reset</button>
        <button onClick={(e) => handleIncrease(e)}>Increase</button>
      </div>
    </div>
  );
};

export default OnClickUseState;
