import React, { useState, useCallback } from 'react';

function Button({ onClick, children }) {
  console.log('Rendering Button:', children);
  return <button onClick={onClick}>{children}</button>;
}

function Task7() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);

  const multiplyCount = useCallback(() => {
    console.log('Multiply:', count * multiplier);
  }, [count, multiplier]); 

  return (
    <div>
        <h6>Task9,10</h6>
        <h3>usecallback with dependencies</h3>
      <h4>Count: {count}</h4>
      <h4>Multiplier: {multiplier}</h4>

      <button onClick={() => setCount(prev => prev + 1)}>Add</button>
      <button onClick={() => setMultiplier(prev => prev + 1)}>Mul</button>

      <Button onClick={multiplyCount}>Count</Button>
    </div>
  );
}

export default Task7;
