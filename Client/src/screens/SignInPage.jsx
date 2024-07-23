import React, { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from '../../../Server/src/firebase/firebase';
import { useNavigate } from 'react-router-dom';

import Note from "../assets/LoginPage_board.png";
import signb from "../assets/LoginPage_signboard1.png";
import GoogleIcon from "../assets/google-icon.png";
import AnonyPersonIcon from "../assets/anonymous-icon.png";
import getRandomName from "../utils/utils";


const submitScore = async (username, score) => {
    try {
      const rank = -1;
      const data = {
        username,
        score,
        rank,
      };
  
      const response = await fetch('http://localhost:5000/api/gameusers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit game data');
      }
  
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error('Error submitting game data:', error);
    }
  };

const SignInPage = ({ setScreen, setStayAnonymous }) => {
    const navigate = useNavigate();


    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignIn = () => {
        setIsSigningIn(true);
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const nameArr = result.user.displayName.split(" ");
                const name = nameArr[0]+" "+nameArr[1];
                const score = localStorage.getItem("CurrentScore");
                console.log('User info:', name);
                await submitScore(name,score);
                navigate("/leaderboard");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Error code:', errorCode);
                console.log('Error message:', errorMessage);
                setErrorMessage(errorMessage);
                setIsSigningIn(false);
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('User signed out');
            })
            .catch((error) => {
                console.log('Sign out error:', error);
            });
    };

    const newAnonymous = async () => {
        const name = getRandomName();
        const score = localStorage.getItem("CurrentScore");
        await submitScore(name,score);
        navigate("/leaderboard");
        setStayAnonymous(true);
    };

    return (
        <div className="h-screen w-screen font-postNoBills overflow-hidden bg-signin-bg bg-cover bg-center bg-no-repeat flex flex-col justify-between">
            <div className="relative flex flex-col items-center">
                <img src={Note} className="z-[10] absolute w-[400px] md:w-[500px] lg:w-[650px] top-0 md:top-0 lg:-top-20" alt="Note" />
                <div className="z-[20] absolute text-center pt-[100px] md:pt-[120px] lg:pt-20">
                    <p className="text-[35px] md:text-[40px] lg:text-[45px] text-white">Login to have your name</p>
                    <p className=" text-[35px] md:text-[40px] lg:text-[45px] text-white">on the leaderboard</p>
                </div>
            </div>

            <div className="relative flex justify-center items-center h-screen bottom-0">
                <img src={signb} className="absolute z-[10] bottom-0 md:top-[335px] w-[350px] md:w-[400px] lg:w-[400px] h-[390px] md:h-[440px] lg:h-[440px]" alt="Signboard" />
                
                <div className="absolute bottom-[285px] md:top-[388px] lg:bottom-[310px] flex justify-center w-full">
                    <button
                        id="google-auth-btn"
                        className="z-[20] h-[60px] w-[240px] md:h-[70px] md:w-[310px] lg:w-[310px] bg-yellow-400 rounded-[50px] flex items-center justify-center px-4 hover:bg-green-800 hover:text-white"
                        onClick={handleSignIn}
                    >
                        <img src={GoogleIcon} alt="Google Icon" style={{ width: '30px', height: '30px' }} className="mr-2" />
                        <p className="text-[15px] md:text-[20px] lg:text-[23px] hover:text-[20px]">
                            Sign in with college mail id
                        </p>
                    </button>
                </div>

                <div className="absolute bottom-[145px] md:top-[548px] lg:bottom-[35px] flex justify-center w-full">
                    <button
                        className="z-[20] h-[60px] w-[240px] md:h-[70px] md:w-[310px] lg:w-[310px] bg-yellow-400 rounded-[50px] flex items-center justify-center px-4 hover:bg-green-800 hover:text-white"
                        onClick={newAnonymous}
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