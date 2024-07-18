
const Bird = (props) => {
    return (
      <div
        className={"absolute w-[48px] h-[53px] bg-cover bg-center transition-[top] duration-[50ms] ease-in-out "+`${props.gameOver ? "bg-flappybirdbigeye":"bg-flappybird"}`}
        style={{
          left: props.window_width * 0.2,
          top: props.bird_top,
          //border:"2px solid black",
        }}
      ></div>
    );
};
export default Bird