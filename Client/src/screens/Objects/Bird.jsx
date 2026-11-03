import React from 'react';

// The Bird component displays the bird in the game.
const Bird = (props) => {
  return (
    <div
      className={
        'absolute w-[48px] h-[53px] bg-cover bg-center ' +
        // Apply different background image based on birdDead prop
        `${props.birdDead ? 'bg-flappybirdbigeye' : 'bg-flappybird'}`
      }
      style={{
        // Position the bird based on its left and top properties
        left: props.birdLeft,
        top: props.birdTop,
        // Rotate the bird based on its angle property
        transform: `rotate(${props.birdAngle}deg)`,
        // Smooth transition for the rotation to make it look more natural
        transition: 'transform 0.1s ease-in-out',
      }}
    ></div>
  );
};

export default Bird;
