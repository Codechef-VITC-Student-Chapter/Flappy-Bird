import Bird from "./Objects/Bird.jsx";
import Obstacles from "./Objects/Obstacles.jsx";

function PlayScreen({setScreen,score,setScore,bestScore,setBestScore}){
    return(
    <>
        <Bird/>
        <Obstacles/>
        <h1>Play Screen</h1>
        <button onClick={()=>setScreen("leaderboard")}>LeaderBoard</button>
        <button onClick={()=>setScreen("gameover")}>Game Over</button>
        <button onClick={()=>setScreen("certificate")}>Certificate</button>
    </>);
}
export default PlayScreen