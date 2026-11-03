import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

import HomePage from "./screens/HomePage.jsx"
import PlayScreen from "./screens/PlayScreen.jsx"
import GameOver from "./screens/GameOver.jsx"
import LeaderBoard from "./screens/LeaderBoard.jsx"
import Certificate from "./screens/Certificate.jsx"
import SignInPage from "./screens/SignInPage.jsx"

import data from './data/data.jsx';

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
  const [screen, setScreen] = useState('home');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [stayAnonymous, setStayAnonymous] = useState(false);

  //Backend part will be updated later
  let playerName = 'Guest';
  let leaderBoardData = [];
  if (stayAnonymous) playerName = generateUserName();
  const getscreen = () => {
    switch (screen) {
      case 'home':
        return <HomePage setScreen={setScreen} />;
      case 'play':
        return (
          <PlayScreen
            setScreen={setScreen}
            score={score}
            setScore={setScore}
            bestScore={bestScore}
            setBestScore={setBestScore}
          />
        );
      case 'gameover':
        return (
          <GameOver
            setScreen={setScreen}
            score={score}
            setScore={setScore}
            bestScore={bestScore}
          />
        );
      case 'leaderboard':
        return (
          <LeaderBoard
            setScreen={setScreen}
            leaderBoardData={leaderBoardData}
            players={players}
          />
        );
      case 'certificate':
        return (
          <Certificate
            setScreen={setScreen}
            playerName={playerName}
            bestScore={bestScore}
          />
        );
      default:
        return <HomePage setScreen={setScreen} />;
    }
  };
  return (
    <>
      {getscreen()}
      <Analytics />
    </>
  );
}

export default App;

const [animalBirdNames, adjectives] = data;

const generateUserName = () => {
  let animalIdx = Math.floor(Math.random() * 100);
  let adjectiveIdx = Math.floor(Math.random() * 100);
  return adjectives[adjectiveIdx] + animalBirdNames[animalIdx];
};
