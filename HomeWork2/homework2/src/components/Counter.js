import React, { useState } from "react";

const Counter = () => {
  const [valueCount, setValueCount] = useState(0);
  const handleMinus = () => {
    setValueCount(valueCount - 1);
  };
  const handlePlus = () => {
    setValueCount(valueCount + 1);
  };

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <label> {valueCount} </label>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default Counter;
