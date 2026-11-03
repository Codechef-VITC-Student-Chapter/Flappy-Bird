const Bird = (props) => {
  return (
    <div
      className={
        'absolute w-[48px] h-[53px] bg-cover bg-center ' +
        `${props.gameOver ? 'bg-flappybirdbigeye' : 'bg-flappybird'}`
      }
      style={{
        left: props.window_width * 0.2,
        top: props.bird_top,
        transform: `rotate(${props.birdAngle}deg)`,
        transition: 'transform 0.1s ease-in-out', // Smooth transition for rotation
      }}
    ></div>
  );
};

export default Bird;
