import Bird from "./Objects/Bird.jsx";
import Obstacles from "./Objects/Obstacles.jsx";

function PlayScreen({setScreen,score,setScore,bestScore,setBestScore}){
    return(
    <>
        <Bird/>
        <Obstacles/>
        <h1>Play Screen</h1>
    </>);
}
export default PlayScreen