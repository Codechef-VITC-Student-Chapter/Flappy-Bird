import React, { useEffect, useState } from 'react';

// CountDown component to display a countdown timer before starting the game
function CountDown({ count, setGameStopped }) {
  // State to keep track of the current countdown value
  const [countdown, setCountdown] = useState(count);

  // Use effect to set up a timer when the component mounts
  useEffect(() => {
    // Set up an interval that decreases the countdown value every second
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Use effect to update game state when countdown reaches zero
  useEffect(() => {
    if (countdown === 0) {
      // Set game to not stopped, indicating the game can start
      setGameStopped(false);
    }
  }, [countdown]); // This effect runs whenever the countdown value changes

  return (
    <div className="absolute w-full h-full font-postNoBills font-bold tracking-[3px] flex flex-col align-middle bg-black bg-opacity-65">
      <div className="bg-transparent flex flex-col align-middle justify-center mt-[30%] sm:mt-[10%]">
        <h1 className="text-[#DCC131] text-[50px] custom-xs:text-[70px] md:text-[90px] countdown-text flex flex-col sm:flex-row align-middle justify-center">
          <p className="flex align-middle justify-center">Get ready to</p>
          <p className="flex align-middle justify-center sm:ml-4">flap in</p>
        </h1>
        <h1 className="text-[#DCC131] text-[70px] md:text-[90px] countdown-text m-auto">
          {countdown} {/* Display the current countdown value */}
        </h1>
      </div>
    </div>
  );
}

export default CountDown;
