
function HomePage({setScreen}){
    return(
    <>
        <h1>Home Page</h1>
        <button onClick={() => setScreen("gameover")}>Game Over</button>
        <button onClick={() => setScreen("leaderboard")}>LeaderBoard</button>
    </>);
}
export default HomePage