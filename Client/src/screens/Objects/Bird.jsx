const Bird = (props) => {
  return (
    <div
      className={
        'absolute w-[48px] h-[53px] bg-cover bg-center ' +
        `${props.birdDead ? 'bg-flappybirdbigeye' : 'bg-flappybird'}`
      }
      style={{
        left: props.birdLeft,
        top: props.birdTop,
        transform: `rotate(${props.birdAngle}deg)`,
        transition: 'transform 0.1s ease-in-out', // Smooth transition for rotation
      }}
    ></div>
  );
};

export default Bird;
