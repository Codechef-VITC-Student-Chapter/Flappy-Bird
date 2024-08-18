import React, { useEffect, useState } from 'react';
import { useGameContext } from '../contexts/gameContext';

// Importing images for different sizes of pipes
import pipe_xs from '../assets/Totem-xs.png';
import pipe_s from '../assets/Totem-s.png';
import pipe_m from '../assets/Totem-m.png';
import pipe_l from '../assets/Totem-l.png';
import pipe_xl from '../assets/Totem-xl.png';

// Importing components used in the game
import Bird from './Objects/Bird';
import Pipe from './Objects/Pipe';
import PipeBottom from './Objects/PipeBottom';
import ScoreBoard from './Objects/ScoreBoard';
import CountDown from './Objects/CountDown';
import GameOver from './GameOver';

// Information about the obstacles
const obstacle_info = [
  { name: 'xs', img: pipe_xs, height: 4 / 6 }, // Extra small pipe
  { name: 's', img: pipe_s, height: 5 / 6 },  // Small pipe
  { name: 'm', img: pipe_m, height: 1 },      // Medium pipe
  { name: 'l', img: pipe_l, height: 7 / 6 },  // Large pipe
  { name: 'xl', img: pipe_xl, height: 8 / 6 }, // Extra large pipe
];

function PlayScreen() {
  // Game context to get and set the current score and player name
  const { setCurrentScore, playerName, currentScore } = useGameContext();

  // Get username from localStorage or use the default player name
  const uname = (localStorage.getItem("isLoggedIn") === "true") ? localStorage.getItem("UserInfo") : playerName;

  // Game parameters
  const floorRatio = 0.092;  // Ratio of the screen taken up by the floor
  const gap = 150;          // Gap between pipes
  const availableHeight = document.documentElement.clientHeight * (1 - floorRatio); // Usable height for the game
  const totem_height = (availableHeight - gap) / 2; // Height of the pipes
  const birdLeft = document.documentElement.clientWidth * 0.05; // Initial horizontal position of the bird
  const gravity = 1;        // Gravity affecting the bird
  const obstacleCount = 4;  // Number of obstacles in view
  const totemGap = 750;      // Gap between obstacles

  // Game state
  const [gameStopped, setGameStopped] = useState(true); // Indicates if the game is stopped
  const [distance, setDistance] = useState(0); // Distance traveled by the bird
  const [obstacles, setObstacles] = useState([
    { index: 2, pos: totemGap },         // Initial positions of obstacles
    { index: 1, pos: totemGap * 2 },
    { index: 3, pos: totemGap * 3 },
    { index: 4, pos: totemGap * 4 },
    { index: 0, pos: totemGap * 5 },
  ]);
  const [birdDead, setBirdDead] = useState(false); // Indicates if the bird is dead
  const [birdTop, setBirdTop] = useState(availableHeight * 0.5); // Vertical position of the bird
  const [velocity, setVelocity] = useState(0); // Speed of the bird
  const [angle, setAngle] = useState(0); // Angle of the bird
  const [bestScore, setBestScore] = useState(0); // Best score in the game

  const score = Math.floor(distance / totemGap); // Calculate the current score

  // Function to reset the game state
  const resetGame = () => {
    setDistance(0);
    setObstacles([
      { index: 2, pos: totemGap },
      { index: 1, pos: totemGap * 2 },
      { index: 3, pos: totemGap * 3 },
      { index: 4, pos: totemGap * 4 },
      { index: 0, pos: totemGap * 5 },
    ]);
    setBirdDead(false);
    setBirdTop(availableHeight * 0.5);
    setVelocity(0);
    setAngle(0);
    setGameStopped(true);
  };

  // Function to handle bird flapping
  const clicked = () => {
    if (birdTop > 58) {
      setVelocity(-10); // Move the bird up
      setAngle(-30); // Change the angle of the bird
    }
  };

  // Event listener for key presses (spacebar for flapping)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ' && !event.repeat) {
        event.preventDefault(); // Prevent the default action of the spacebar
        clicked();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Game loop for updating distance and velocity
  useEffect(() => {
    if (!gameStopped) {
      const always = setInterval(() => {
        var amount = document.documentElement.clientWidth > 500 ? 10 : 5; // Adjust speed based on screen size
        setDistance(
          (prevDistance) => prevDistance + amount + prevDistance / 1000
        );
        setVelocity((prevVelocity) => prevVelocity + gravity);
      }, 25);

      // Cleanup interval on component unmount
      return () => {
        clearInterval(always);
      };
    }
  }, [gameStopped]);

  // Update bird position and angle based on velocity
  useEffect(() => {
    setBirdTop((prevBirdTop) => prevBirdTop + velocity);
    setAngle(Math.min(90, Math.max(-30, velocity * 3)));
  }, [velocity]);

  // Check for collisions and update obstacles
  useEffect(() => {
    // Remove obstacles that are out of view
    if (obstacles[0].pos < distance - 200) {
      var ob = obstacles;
      ob.shift();
      setObstacles(ob);
    }
    // Add new obstacles as needed
    if (obstacles[obstacles.length - 1].pos - distance < totemGap * 10) {
      var ob = obstacles;
      setObstacles([
        ...ob,
        {
          index: Math.floor(Math.random() * obstacle_info.length),
          pos: ob[obstacles.length - 1].pos + totemGap,
        },
      ]);
    }
    // Check for collisions with obstacles or floor
    if (
      (obstacles[0].pos - distance + (totem_height * 4) / 18 < birdLeft + 60 &&
        obstacles[0].pos - distance + (totem_height * 4) / 18 > birdLeft &&
        (birdTop < obstacle_info[obstacles[0].index].height * totem_height ||
          birdTop + 50 >
            availableHeight -
              obstacle_info[obstacleCount - obstacles[0].index].height *
                totem_height)) ||
      birdTop > availableHeight - 60
    ) {
      setGameStopped(true);
      if (score > bestScore) {
        setBestScore(score);
        setCurrentScore(score);
        console.log("best: " + bestScore + " Current: " + currentScore);
      }
      setBirdDead(true);
    }
  }, [distance]);

  // Render the game screen
  if (!birdDead) {
    return (
      <div
        className="bg-background-stuff bg-scroll w-[100vw] h-[100vh] flex align-middle justify-center overflow-hidden bg-repeat-x bg-cover relative"
        style={{ height: document.documentElement.clientHeight }}
        onClick={clicked} // Allow clicking to flap the bird
      >
        <Bird
          birdDead={birdDead}
          birdLeft={birdLeft}
          birdTop={birdTop}
          birdAngle={angle}
        />
        {obstacles.length > 0 &&
          obstacles.map((item, index) => (
            <div key={index}>
              <Pipe
                pipeImg={obstacle_info[item.index].img}
                x={item.pos - distance}
                height={
                  ((availableHeight - gap) / 2) *
                  obstacle_info[item.index].height
                }
              />
              <PipeBottom
                pipeImg={obstacle_info[obstacleCount - item.index].img}
                x={item.pos - distance}
                height={
                  ((availableHeight - gap) / 2) *
                  obstacle_info[obstacleCount - item.index].height
                }
              />
            </div>
          ))}
        <ScoreBoard score={score} />
        {gameStopped && <CountDown count={3} setGameStopped={setGameStopped} />}
      </div>
    );
  } else {
    return <GameOver score={score} bestScore={bestScore} username={uname} resetGame={resetGame} />;
  }
}

export default PlayScreen;
