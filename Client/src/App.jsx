import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './screens/HomePage.jsx';
import PlayScreen from './screens/PlayScreen.jsx';
import LeaderBoard from './screens/LeaderBoard.jsx';
import SignInPage from './screens/SignInPage.jsx';

import { GameProvider } from './contexts/gameContext.jsx';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [stayAnonymous, setStayAnonymous] = useState(false);

  return (
    <>
      <GameProvider>
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
                <LeaderBoard/>
              }
            />
            <Route
              path="/SignIn"
              element={<SignInPage setStayAnonymous={setStayAnonymous} />}
            />
          </Routes>
        </BrowserRouter>
        <Analytics />
      </GameProvider>
    </>
  );
}

export default App;
