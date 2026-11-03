import React from 'react';
import ScoreBoardImg from '../../assets/playscreen_ScoreBoard.png'; // Import the background image for the scoreboard

function ScoreBoard({ score }) {
  // Format the score: round it and ensure it's a string, default to '0' if not a number
  const formattedScore = isNaN(score) ? '0' : Math.round(score).toString();

  return (
    <div
      className="absolute top-0 right-0 w-[150px] h-[150px] flex justify-center items-center font-postNoBills"
      // Container for the scoreboard, positioned absolutely in the top-right corner
    >
      <img
        src={ScoreBoardImg} // Background image for the scoreboard
        alt="Score Board" // Alt text for the image, used for accessibility
        className="h-[150px] w-[150px] saturate-200 contrast-100"
        // Image styling: ensures the image is 150x150 pixels with enhanced saturation and contrast
      />
      <div
        className="absolute text-[45px] font-bold text-center text-white w-full pb-[35px]"
        // Container for the score text, positioned absolutely within the scoreboard
        // Styles the score text to be white, centered, and bold with a bottom padding
      >
        {formattedScore} {/* Display the formatted score */}
      </div>
    </div>
  );
}

export default ScoreBoard;
