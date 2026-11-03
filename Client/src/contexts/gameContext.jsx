import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState('');
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <GameContext.Provider value={{ playerName, setPlayerName, currentScore, setCurrentScore }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
