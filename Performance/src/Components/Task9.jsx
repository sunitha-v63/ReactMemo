import React, { useState } from 'react';

function Button({ label, onClick, count }) {
  console.log('Rendering Button');
  
  return (
    <>
    <h6>Task12</h6>
    <button onClick={onClick}>
      {label} - Count: {count}
    </button>
    </>
  );
}

function Task9() {
    
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <Button label="Click Me" onClick={handleClick} count={count} />;
}

export default Task9;
