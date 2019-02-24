import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>SAMPLE APP</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default App;
