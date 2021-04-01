import React, { useState, useEffect } from 'react';

const App = (props) => {
  const [score, setScore] = useState([]);

  useEffect(() => {
    // update state
    // api calls
    setScore([
      { name: 'ann', first: 8, second: 12 },
      { name: 'biran', first: 7, score: 9 }
    ])
  }, []);

  return (<h1>Hello World</h1>);
};

export default App;