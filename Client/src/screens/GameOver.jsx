function GameOver({setScreen,score,setScore,bestScore}){
    return(
        <div>
            <h1>Game Over</h1>
            <h1>Max Score : {bestScore}</h1>
            <h1>Score : {score}</h1>
            <button onClick={()=>setScreen("play")}>Play Again</button>
        </div>
    )
}
export default GameOver