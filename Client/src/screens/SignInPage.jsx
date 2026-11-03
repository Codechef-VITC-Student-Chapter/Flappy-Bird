import React, { useState } from "react";
import { auth, provider, signInWithPopup } from '../../../Server/src/firebase/firebase'; // Firebase authentication
import { useNavigate } from 'react-router-dom'; // For navigation after authentication
import { useGameContext } from '../contexts/gameContext'; // Game context for getting player name and score

// Importing images used in the sign-in page
import Note from "../assets/LoginPage_board.png";
import signb from "../assets/LoginPage_signboard1.png";
import GoogleIcon from "../assets/google-icon.png";
import AnonyPersonIcon from "../assets/anonymous-icon.png";

// Function to submit the score to the server
const submitScore = async (username, score) => {
  try {
    const data = { username, score };
    console.log("started fetch");
    // Send POST request to the server with the username and score
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

const SignInPage = ({ setStayAnonymous, setLoggedIn }) => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const { playerName, currentScore, setPlayerName } = useGameContext(); // Game context values
  let [isSigningIn, setIsSigningIn] = useState(false); // State for managing the sign-in process
  let [errorMessage, setErrorMessage] = useState(''); // State for storing any error messages

  // Handle Google sign-in with Firebase
  const handleSignIn = () => {
    setIsSigningIn(true); // Set signing-in state to true
    signInWithPopup(auth, provider) // Trigger sign-in popup
      .then(async (result) => {
        const nameArr = result.user.displayName.split(" "); // Split display name into first and last names
        const name = nameArr[0] + " " + nameArr[1]; // Concatenate first and last names
        setPlayerName(name); // Set player name in the game context
        localStorage.setItem("UserInfo", name); // Store user name in localStorage
        console.log('User info:', name);
        await submitScore(name, currentScore); // Submit score to the server
        console.log("submitted");
        localStorage.setItem('isLoggedIn', 'true'); // Set login status in localStorage
        localStorage.setItem('stayAnonymous', 'false'); // Update anonymous status
        navigate("/leaderboard"); // Navigate to the leaderboard page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error code:', errorCode);
        console.log('Error message:', errorMessage);
        setErrorMessage(errorMessage); // Update error message state
        setIsSigningIn(false); // Set signing-in state to false
        setStayAnonymous(false); // Ensure stay anonymous state is false
      });
  };

  // Handle anonymous login
  const newAnonymous = async () => {
    const name = playerName; // Use current player name
    const score = currentScore; // Use current score
    console.log("Submit Data: ", { name, score });
    await submitScore(name, score); // Submit score to the server
    localStorage.setItem('isLoggedIn', 'false'); // Set login status to false
    localStorage.setItem('stayAnonymous', 'true'); // Update anonymous status
    navigate("/leaderboard"); // Navigate to the leaderboard page
  };

  return (
    <div className="h-screen w-screen font-postNoBills overflow-hidden bg-signin-bg bg-cover bg-center bg-no-repeat flex flex-col justify-between">
      {/* Background and title section */}
      <div className="relative flex flex-col items-center">
        <img src={Note} className="z-[10] absolute w-[400px] md:w-[500px] lg:w-[650px] top-0 md:top-0 lg:-top-20" />
        <div className="z-[20] absolute text-center pt-[100px]  md:pt-[130px] lg:pt-90px ">
          <p className="font-fonts text-[20px]  md:text-[30px] lg:text-[40px] text-white">Login to have your name</p>
          <p className="font-fonts text-[20px]  md:text-[30px] lg:text-[40px] text-white">on the leaderboard</p>
        </div>
      </div>

      {/* Sign-in and anonymous buttons */}
      <div className="relative flex justify-center items-center h-screen bottom-0">
        <img src={signb} className="absolute z-[10] bottom-0 md:top-[535px] w-[350px] md:w-[400px] lg:w-[400px] h-[390px] md:h-[440px] lg:h-[440px]" alt="Signboard" />
        
        <div className="absolute bottom-[285px] md:top-[580px] lg:bottom-[310px] flex justify-center w-full">
          <button
            id="google-auth-btn"
            className="z-[20] h-[60px] w-[240px] md:h-[70px] md:w-[310px] lg:w-[310px] bg-yellow-400 rounded-[50px] flex items-center justify-center px-4 hover:bg-green-800 hover:text-white"
            onClick={handleSignIn} // Call handleSignIn on click
          >
            <img src={GoogleIcon} alt="Google Icon" style={{ width: '30px', height: '30px' }} className="mr-2" />
            <p className="text-[15px] md:text-[20px] lg:text-[23px] hover:text-[20px]">
              Sign in with college mail id
            </p>
          </button>
        </div>

        <div className="absolute bottom-[145px] md:top-[760px] lg:bottom-[35px] flex justify-center w-full">
          <button
            className="z-[20] h-[60px] w-[240px] md:h-[70px] md:w-[310px] lg:w-[310px] bg-yellow-400 rounded-[50px] flex items-center justify-center px-4 hover:bg-green-800 hover:text-white"
            onClick={newAnonymous} // Call newAnonymous on click
          >
            <img src={AnonyPersonIcon} alt="Anonymous Person Icon" style={{ width: '50px', height: '50px' }} className="mr-2" />
            <p className="text-[15px] md:text-[20px] lg:text-[23px] hover:text-[22px]">
              Stay Anonymous
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
