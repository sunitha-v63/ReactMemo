import React, { useState, useMemo } from 'react';

function Task4() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const expensiveResult = useMemo(() => {
    console.log('Running expensive calculation...');
    let result = 0;
    for (let i = 0; i < 100; i++) {
      result += i;
    }
    return result;
  }, []); 

  return (
    <div>
      <h6>Task6</h6>
      <h3>Expensive Computation</h3>
      <h3>{expensiveResult}</h3> 
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
      <button onClick={() => setOtherState(!otherState)}>Toggle State</button>
    </div>
  );
}

export default  Task4;
