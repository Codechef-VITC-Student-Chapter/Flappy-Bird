import Pgrd from "./assets/images/LoginPage_background.png"
import Note from "./assets/images/LoginPage_board.png"
import signb from "./assets/images/LoginPage_signboard1.png"
import Google from "./Google.jsx"
import Anony from "./Anonymous.jsx"

import React from "react"

function SignInPage({setScreen,setStayAnonymous}){
 
    const newSignin=()=>{
        setScreen('auth');
        setStayAnonymous(false);
    }

    const newAnonymous=()=>{
        setScreen('gameover');
        setStayAnonymous(true);
    }
    
    return(
        <>
        <img src={Pgrd} className="absolute h-screen w-screen z-[-10]" />
        <div className="relative">
            <img src={Note} className="z-[10] md:-top-20 -top-10 left-[50px] md:left-0 absolute md:pl-[530px] md:w-[1000px] w-[400px] " />
            <p className="z-[20] md:pt-20 pt-[100px] pl-2 absolute -top-6 inset-0 flex items-center justify-center font-fonts md:text-[45px] text-[35px] text-white ">Login to have your name</p>
            <p className="z-[20] md:pt-20 pt-[90px] pl-2 absolute top-10 inset-0 flex items-center justify-center font-fonts md:text-[45px] text-[35px] text-white ">on the leaderboard</p>
        </div>
    
        <div className="relative flex justify-center items-center ">
            
            <img src={signb} className="absolute z-[10] top-[290px] md:top-[238px] md:w-[450px] md:h-[490px] w-[350px] h-[390px]  " alt="Signboard" />
            <div className="group">
                <Google />
                <button className="absolute z-[20] left-[120px] md:left-[584px] group-hover:left-[105px] md:group-hover:left-[620px] top-[325px] md:top-[290px] group-hover:top-[330px] md:group-hover:top-[300px] md:h-[70px] md:w-[380px] h-[80px] group-hover:h-[60px] w-[280px] group-hover:w-[300px] bg-yellow-400 rounded-[50px]" onClick={newSignin} >
                    <p className="!font-fam md:text-[25px] group-hover:text-[20px] text-[15px] md:pl-20 pl-[70px] ">Sign in with college mail id </p>
                </button>
            </div>
            
            <div className="group">
                <Anony />
                <button className="left-[110px] md:left-[584px] group-hover:left-[100px] md:group-hover:left-[600px] absolute z-[20] top-[480px] md:top-[490px] group-hover:top-[490px] md:group-hover:top-[490px] md:h-[70px] md:w-[380px] h-[80px] w-[280px] group-hover:h-[60px] group-hover:w-[300px] md:group-hover:h-[70px] md:group-hover:w-[310px] bg-yellow-400 rounded-[50px]" onClick={newAnonymous}>
                    <p className="!font-fam md:text-[25px] group-hover:text-[22px] text-[15px] pl-4 md:group-hover:pl-[50px]" >Stay Anonymous</p>
                </button>
            </div>
        </div>
        
        
        
        </>
    );
}

export default SignInPage
