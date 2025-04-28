import React, { useState, useMemo } from 'react';

// Simulating an expensive factorial calculation
function calculateFactorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function Task11() {
  const [number, setNumber] = useState(0);

 
  const memoizedFactorial = useMemo(() => calculateFactorial(number), [number]);

  const handleInputChange = (event) => {
    setNumber(Number(event.target.value));
  };

  return (
    <div>
        <h6>Project</h6>
      <h3>Expensive Calculation App</h3>
      <p>Enter a number to calculate</p>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        min="0"
        max="100"
      />
      <button onClick={() => setNumber(number)}>Calculate</button>
      <div>
        <h2>Factorial of {number}: {memoizedFactorial}</h2>
      </div>
    </div>
  );
}

export default Task11;
