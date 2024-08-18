import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './screens/HomePage.jsx';
import PlayScreen from './screens/PlayScreen.jsx';
import LeaderBoard from './screens/LeaderBoard.jsx';
import SignInPage from './screens/SignInPage.jsx';

import { GameProvider } from './contexts/gameContext.jsx';

// Main App component
function App() {
  // State to manage the current score and best score
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      {/* GameProvider is a context provider for managing game state */}
      <GameProvider>
        {/* BrowserRouter is used to handle routing in the application */}
        <BrowserRouter>
          {/* Routes define the different routes of the application */}
          <Routes>
            {/* Route for the home page */}
            <Route path="/" element={<HomePage />} />
            
            {/* Route for the play screen, passing score and bestScore as props */}
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
            
            {/* Route for the leaderboard screen */}
            <Route
              path="/LeaderBoard"
              element={
                <LeaderBoard/>
              }
            />
            
            {/* Route for the sign-in page */}
            <Route
              path="/SignIn"
              element={<SignInPage />}
            />
          </Routes>
        </BrowserRouter>
        {/* Analytics component for tracking application analytics */}
        <Analytics />
      </GameProvider>
    </>
  );
}

export default App;
