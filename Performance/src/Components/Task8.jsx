import React, { useState } from 'react';

// Optimized Button component using React.memo
const Button = React.memo(function Button({ onClick, children }) {
  console.log('Rendering Button');
  return <button onClick={onClick}>{children}</button>;
});

function Task8() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
        <h6>Task11</h6>
        <p>Component Profiling</p>
      <h2>Count: {count}</h2>
      <Button onClick={increment}>Click Me</Button>
    </div>
  );
}

export default Task8;
