import React, { useState, useEffect } from 'react'; // Import React and hooks
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

import logo from '../assets/homePage_gameName.png'; // Import the logo image
import button from '../assets/homePage_startButton.png'; // Import the start button image

const HomePage = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to handle screen changes based on key presses
  const handleScreen = (event) => {
    if (event.code === 'Space') { // Check if the pressed key is the space bar
      navigate('/play'); // Navigate to the play screen
    }
  };

  // useEffect hook to add and clean up the keydown event listener
  useEffect(() => {
    window.addEventListener('keydown', handleScreen); // Add event listener on mount

    return () => {
      window.removeEventListener('keydown', handleScreen); // Remove event listener on unmount
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  // Function to handle button click
  const handleClick = () => {
    navigate('/play'); // Navigate to the play screen when the button is clicked
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-flappybird-mob sm:bg-flappybird-desk absolute min-h-screen inset-0 bg-cover bg-center">
      {/* Container with background images and full-height */}
      
      <img src={logo} alt="logo" className="w-96 md:w-1/2 pb-20" />
      {/* Logo image with responsive width and bottom padding */}
      
      <img
        className='w-44 lg:w-80 md:w-56'
        src={button}
        alt="button"
        // Start button with responsive width
        onClick={handleClick} // Handle click event to navigate to the play screen
      />
      
      <p className="text-white text-2xl font-thin text-center">
        Click / Press The Space Bar to Start
      </p>
      {/* Instruction text centered and white-colored */}
    </div>
  );
};

export default HomePage;
