import React,{useState,useEffect} from "react"

import HomePage from "./screens/HomePage.jsx"
import PlayScreen from "./screens/PlayScreen.jsx"
import GameOver from "./screens/GameOver.jsx"
import LeaderBoard from "./screens/LeaderBoard.jsx"
import Certificate from "./screens/Certificate.jsx"



function App() {
  const [screen,setScreen] = useState("home");
  const [score,setScore] = useState(0);
  const [bestScore,setBestScore] = useState(0);

  //Backend part will be updated later 
  let playerName = "Guest";
  let leaderBoardData = [];

  switch(screen){
    case "home" : return <HomePage setScreen={setScreen}/>
    case "play" : return <PlayScreen setScreen={setScreen} score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}/>
    case "gameover" : return <GameOver setScreen={setScreen} score={score} setScore={setScore} bestScore={bestScore}/>
    case "leaderboard" : return <LeaderBoard setScreen={setScreen} leaderBoardData={leaderBoardData}/>
    case "certificate" :return <Certificate setScreen={setScreen} playerName={playerName} bestScore={bestScore}/>
    default : return <HomePage setScreen={setScreen}/>
  }

}

export default App;
