import React, { useState, useEffect, createContext, useContext } from 'react';

export const ScoreContext = createContext();

// const Scoreboard = () => {
//   const scores = useContext(ScoreContext);

//   return (
//     <>
//       {scores.map(playerScore => (
//         <>
//           <h3 className="playerName">{playerScore.name}</h3>
//           <div className="score">first:{playerScore.first}</div>
//           <div className="score">second:{playerScore.second}</div>
//         </>
//       ))}
//     </>
//   )
// }

class Scoreboard extends React.Component {
  render() {
    return (
      <ScoreContext.Consumer>
        {scores => (
          <>
            {
              scores.map(playerScore => (
                <>
                  <h3 className="playerName">{playerScore.name}</h3>
                  <div className="score">first:{playerScore.first}</div>
                  <div className="score">second:{playerScore.second}</div>
                </>
              ))
            }
          </>
        )}
      </ScoreContext.Consumer>
    )
  }
}

const Gameboard = props => {
  return (
    <>
      <h1>this is our game</h1>
      <div style={{ backgroundColor: 'red', width: '200px', height: '200px' }}></div>
      <Scoreboard />
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

  return (
    <ScoreContext.Provider value={scores}>
      <Gameboard />
    </ScoreContext.Provider>
  )
};

export default App;