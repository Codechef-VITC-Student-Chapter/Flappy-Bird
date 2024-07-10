import React from 'react';
import logo from '../assets/certificate_codecheflogo.png';

const Certificate = ({ setScreen, playerName, bestScore }) => {
  const handleClose = () => {
    setScreen('gameover');
  };


  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-phoneview w-full sm:bg-deskview absolute h-screen'>
      <div className="bg-white p-7 shadow-lg w-11/12 mx-auto text-center mb-4 mt-4 sm:w-5/6 927px:w-2/3  ">
      <div className="bg-white borderr">
        <div className="mb-4">
          <img src={logo} alt="Logo" className="mx-auto sm:w-1/6 w-1/3 mb-2 mt-2" />
        </div>
        <h1 className="text-3xl sm:text-6xl mb-6 gamefont">CERTIFICATE</h1>
        <div className="flex flex-col items-center mb-6 sm:flex-row sm:items-start ">
          <p className="text-2xl sm:text-2xl 741px:text-3xl pr-4 font-semibold congrats mb-2 sm:flex-nowrap sm:flex-shrink ml-6"><span>Congratulations</span></p>
          <span className="ull text-2xl font-semibold congratss text-black mb-2 sm:text-2xl 741px:text-3xl sm:flex-grow mr-4 ml-4">{playerName}</span>
        </div>
        <div className="flex flex-col items-center mb-6 sm:flex-row sm:items-start sm:justify-center">
          <p className="text-2xl sm:text-2xl 741px:text-3xl pr-4 font-semibold congrats mb-2 sm:  whitespace-nowrap flex-shrink"><span>for achieving an</span></p>
          <span className="text-2xl font-semibold congrats text-black mb-2 sm:text-2xl 741px:text-3xl sm: whitespace-nowrap flex-shrink">impressive score of</span>
        </div>
       
        <p className="text-2xl sm:text-4xl font-bold text-black mb-4 sm:mb-10 "><span className=" ulll text-2xl sm:text-2xl 741px:text-3xl sm:flex-grow ">{bestScore}</span></p>
    
      </div></div>
      <div className="text-center">
        <button
          onClick={handleClose}
          className="buttton px-12 py-2 rounded shadow hover:bg-green-700 transition duration-300 mt-10 text-2xl sm:text-5xl rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Certificate;
