import React, { useState, useEffect } from 'react';
import logo from '/homePage_gameName.png';
import button from '/homePage_startButton.png';

const HomePage = ({ setScreen }) => {
  const handleScreen = (event) => {
    if (event.code === 'Space') {
      setScreen('play');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleScreen);
    return () => {
      window.removeEventListener('keydown', handleScreen);
    };
  }, []);

  const handleClick = () => {
    setScreen('play');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-flappybird-mob sm:bg-flappybird-desk absolute min-h-screen inset-0 bg-cover bg-center">
      <img src={logo} alt="logo" className="w-3/4 md:w-1/2 pb-20" />
      <img
        src={button}
        alt="button"
        className="w-2/5 md:w-1/4 cursor-pointer pb-20"
        onClick={handleClick}
      />
      <p className="text-white text-2xl font-thin">
        Click / Press The Space Bar to Start
      </p>
    </div>
  );
};

export default HomePage;
