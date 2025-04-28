import React, { useState } from 'react';

// Inefficient Button component (no optimization)
function Button({ onClick, children }) {
  console.log('Rendering Button');
  return <button onClick={onClick}>{children}</button>;
}

function Profile() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={increment}>Click Me</Button>
    </div>
  );
}

export default Profile;
