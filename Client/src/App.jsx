import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './screens/HomePage.jsx';
import PlayScreen from './screens/PlayScreen.jsx';
import LeaderBoard from './screens/LeaderBoard.jsx';
import SignInPage from './screens/SignInPage.jsx';

const players = [
  { name: 'Player 1', score: 150 },
  { name: 'Player 2', score: 120 },
  { name: 'Player 3', score: 100 },
  { name: 'Player 4', score: 90 },
  { name: 'Player 5', score: 83 },
  { name: 'Player 6', score: 70 },
  { name: 'Player 7', score: 66 },
  { name: 'Player 8', score: 53 },
  { name: 'Player 9', score: 50 },
  { name: 'Player 10', score: 48 },
  { name: 'Player 11', score: 40 },
];

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [stayAnonymous, setStayAnonymous] = useState(false);

  //Backend part will be updated later
  let leaderBoardData = [];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/play"
            element={
              <PlayScreen
                score={score}
                setScore={setScore}
                bestScore={bestScore}
                setBestScore={setBestScore}
              />
            }
          />
          <Route
            path="/LeaderBoard"
            element={
              <LeaderBoard
                leaderBoardData={leaderBoardData}
                players={players}
              />
            }
          />
          <Route
            path="/SignIn"
            element={<SignInPage setStayAnonymous={setStayAnonymous} />}
          />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
