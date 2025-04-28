import React, { useState } from 'react';

const Greeting = React.memo(function Greeting({ name }) {
  console.log('Rendering Greeting:', name);
  return <p>Unchanges: {name}!</p>;
});


function Task3() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h6>Task5</h6>
       <h3>React memo with props</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>
      <Greeting name="Example" />
    </div>
  );
}

export default Task3;
