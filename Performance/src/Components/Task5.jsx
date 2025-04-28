import React, { useState, useMemo } from 'react';

function Task5() {
  const [number, setNumber] = useState(1);
  const [otherState, setOtherState] = useState(false);

  const doubleNumber = useMemo(() => {
    console.log('Calculating double...');
    return number * 2;
  }, [number]); 

  return (
    <div>
        <h6>task7</h6>
      <h4>Double {number}: {doubleNumber}</h4>

      <button onClick={() => setNumber(prev => prev + 1)}>
        Increment
      </button>

      <button onClick={() => setOtherState(!otherState)}>
        Toggle
      </button>
    </div>
  );
}

export default Task5;
