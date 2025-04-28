import React, { useState, useCallback } from 'react';

function Button({ onClick, children }) {
  console.log('Rendering Button:', children);
  return <button onClick={onClick}>{children}</button>;
}

function Task6() {
  const [count, setCount] = useState(0);


  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
        <h6>task8</h6>
        <h3>Usecallback basic Example</h3>
      <h4>Count: {count}</h4>
      <Button onClick={increment}>Add</Button>

    </div>
  );
}

export default Task6;
