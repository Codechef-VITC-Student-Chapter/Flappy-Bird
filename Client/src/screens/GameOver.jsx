import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import bg1 from '/gameOver_bg.png';
import bg2 from '/gameOver_bg2.png';
import signboard from '/signboard.png';

const GameOver = ({ score, bestScore, username, resetGame}) => {
  const navigate = useNavigate();

  const submitScore = async (username, score) => {
    try {
      const data = { username, score };
      console.log("started fetch");
      const response = await fetch('https://flappy-api.poseidon0z.com/api/gameusers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      console.log("completed fetch");
  
      if (!response.ok) throw new Error('Failed to submit game data');
  
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error('Error submitting game data:', error);
    }
  };

    useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ' && !event.repeat) {
        event.preventDefault();
        resetGame();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg2})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div
        style={{
          backgroundImage: `url(${signboard})`,
        }}
        className="relative w-[307px] h-[240px] md:w-[819px] md:h-[535px] rounded-[23px] md:rounded-[50px] flex flex-col items-center justify-center p-4 md:p-8 font-postNoBills font-extrabold text-center z-10"
      >
        {/* Game over title */}
        <div className="h-[30px] w-[160px] bg-[#DCC131] mb-3 rounded-[20px] text-[27.4px] md:bg-[#DCC131] md:px-6 md:py-1 md:rounded-[65.79px] md:mb-[50px] md:w-[490px] md:h-[91.88px] md:absolute top-[30px] left-[180px]">
          <h1 className="text-black text-2xl md:text-[73.1px] md:leading-[78.61px] mb-4 md:mb-1 tracking-wider md:w-[386.22px] md:h-[100.38px] md:pl-[33px]">
            GAME OVER
          </h1>
        </div>

        {/* Username display for mobile */}
        <div className="md:hidden w-[180px] h-[30px] rounded-[23px] flex items-center justify-center mb-1 mt-[-10px]">
          <p className="text-amber-950 text-[15px] truncate w-full px-2">
            User :  {username}
          </p>
        </div>

        {/* Scores section */}
        <div className="flex flex-col md:flex-row md:gap-8 mb-4 md:mb-12 mt-1 ">
          <div className="bg-[#DCC131] w-[114.77px] h-[29px] md:bg-[#DCC131] rounded-[20px] md:rounded-[41.08px] px-4 py-1 mb-2 md:mb-0 md:px-6 md:py-3 md:w-[221px] md:h-[144.59px] md:mt-8">
            <p className="text-[20px] text-black text-sm md:text-[52.58px] flex justify-between items-center md:block md:pt-4">
              <span className="">SCORE</span>
              <span className="md:block md:text-[52.58px] md:pt-10">
                {score}
              </span>
            </p>
          </div>

          <div className="bg-[#DCC131] w-[114.77px] h-[29px] md:bg-[#DCC131] rounded-[20px] md:rounded-[41.08px] px-4 py-1 md:px-6 md:py-3 md:w-[221px] md:h-[144.59px] md:mt-8">
            <p className="text-[20px] text-black text-sm md:text-[52.58px] flex justify-between items-center md:block md:pt-4">
              <span className="">BEST</span>
              <span className="md:block md:text-[52.58px] md:pt-10">
                {bestScore}
              </span>
            </p>
          </div>
        </div>

        {/* Username display for medium and larger screens */}
        

        {/* Buttons section */}
        <div className="flex flex-col space-y-2 mt-5 md:space-y-0 md:flex-row md:justify-between md:absolute md:bottom-[50px] md:left-[50px] md:right-[50px]">
          <button

            className="bg-[#DCC131] rounded-[20px] w-[121.2px] h-[23.61px] text-black text-[11.04px] md:bg-[#DCC131] md:w-[220px] md:h-[53.44px] text-black text-xs md:text-[24px] py-1 px-3 md:px-6 md:py-3 md:rounded-[40px] md:ml-8"
            onClick={async () => (localStorage.getItem("isLoggedIn") === "true")?(await submitScore(username,bestScore).then(navigate('/Leaderboard'))):navigate('/SignIn')}

          >
            LEADERBOARD
          </button>
          <div className="hidden md:flex w-[450px] h-[40px] rounded-[50px] items-center justify-center mb-2">
          <p className="text-amber-950 text-[35px] mx-2 truncate w-full px-2">
          User :  {username}
          </p>
        </div>
          <button
            className="bg-[#DCC131] rounded-[20px] w-[121.2px] h-[23.61px] text-black text-[11.04px] md:bg-[#DCC131] md:w-[220px] md:h-[53.44px] text-black text-xs md:text-[24px] py-1 px-3 md:px-6 md:py-3 md:rounded-[40px]"
            onClick={() => {resetGame();}}
          >
            
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
