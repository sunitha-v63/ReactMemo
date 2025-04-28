import React from 'react';

 const Task2 = React.memo(function Task2({ name }) {
    console.log('Rendering:', name);
    return (
      <div>
        <h6>task3,4</h6>
        <h3>React meMO</h3>
        <p>Hello</p>
      </div>
    );
  });
  
  export default Task2;
