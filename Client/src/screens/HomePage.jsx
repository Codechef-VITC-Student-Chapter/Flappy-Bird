
function HomePage({setScreen}){
    return(
    <>
        <h1>Home Page</h1>
        <button onClick={() => setScreen("gameover")}>Game Over</button>
    </>);
}
export default HomePage