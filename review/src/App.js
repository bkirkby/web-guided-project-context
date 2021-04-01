import React, { useState, useEffect } from 'react';

const Scoreboard = props => {
  return (
    <>
      {props.scores.map(playerScore => (
        <>
          <div className="playerName">{playerScore.name}</div>
          <div className="score">first:{playerScore.first}</div>
          <div className="score">second:{playerScore.second}</div>
        </>
      ))}
    </>
  )
}

const Gameboard = props => {
  return (
    <>
      <h1>this is our game</h1>
      <div style={{ backgroundColor: 'red', width: '200px', height: '200px' }}></div>
      <Scoreboard scores={props.scores} />
    </>
  )
}

const App = (props) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // update state
    // api calls
    setScores([
      { name: 'ann', first: 8, second: 12 },
      { name: 'biran', first: 7, score: 9 }
    ])
  }, []);

  return (<Gameboard scores={scores} />)
};

export default App;