import React, { createContext, useState, useContext } from 'react';
import getRandomName from '../utils/utils';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const defaultName = getRandomName();
  const [playerName, setPlayerName] = useState(defaultName);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <GameContext.Provider value={{ playerName, setPlayerName, currentScore, setCurrentScore }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
