import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '/homePage_gameName.png';
import button from '/homePage_startButton.png';

const HomePage = ({}) => {
  const navigate = useNavigate();
  const handleScreen = (event) => {
    if (event.code === 'Space') {
      navigate('/play');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleScreen);
    return () => {
      window.removeEventListener('keydown', handleScreen);
    };
  }, []);

  const handleClick = () => {
    navigate('/play');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-flappybird-mob sm:bg-flappybird-desk absolute min-h-screen inset-0 bg-cover bg-center">
      <img src={logo} alt="logo" className="w-96 md:w-1/2 pb-20 " />
      <img
      className='w-44 lg:w-80 md:w-56'
        src={button}
        alt="button"
        // className="w-2/5 md:w-1/4 cursor-pointer pb-20"
        onClick={handleClick}
      />
      <p className="text-white text-2xl font-thin text-center">
        Click / Press The Space Bar to Start
      </p>
    </div>
  );
};

export default HomePage;