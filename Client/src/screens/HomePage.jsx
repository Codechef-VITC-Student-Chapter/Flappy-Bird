
function HomePage({setScreen}){
    return(
    <>
        <h1>Home Page</h1>
        <button onClick={() => setScreen("play")}>Play</button>
    </>);
}
export default HomePage