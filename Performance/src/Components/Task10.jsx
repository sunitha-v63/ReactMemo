import React, { useState, useMemo, useCallback } from 'react';

const Button = React.memo(({ label, onClick, count }) => {
  console.log('Rendering Button');
  return (
    <button onClick={onClick}>
      {label} {count}
    </button>
  );
});

function Task10() {
  const [count, setCount] = useState(0);


  const memoizedCount = useMemo(() => count * 2, [count]);  

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); 

  console.log('Rendering Task9');

  return (
    <div>
        <h6>task13</h6>
      <Button label="Click" onClick={handleClick} count={memoizedCount} />
      <p>Count: {count}</p>
    </div>
  );
}

export default Task10;
