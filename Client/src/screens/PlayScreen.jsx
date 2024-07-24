import React, { useEffect, useState } from 'react';

import pipe_xs from '/Totem-xs.png';
import pipe_s from '/Totem-s.png';
import pipe_m from '/Totem-m.png';
import pipe_l from '/Totem-l.png';
import pipe_xl from '/Totem-xl.png';

import './play.css';

import Bird from './Objects/Bird';
import Pipe from './Objects/Pipe';
import PipeBottom from './Objects/PipeBottom';
import ScoreBoard from './Objects/ScoreBoard';
import CountDown from './Objects/CountDown';
import GameOver from './GameOver';

const obstacle_info = [
  { name: 'xs', img: pipe_xs, height: 4 / 6 },
  { name: 's', img: pipe_s, height: 5 / 6 },
  { name: 'm', img: pipe_m, height: 1 },
  { name: 'l', img: pipe_l, height: 7 / 6 },
  { name: 'xl', img: pipe_xl, height: 8 / 6 },
];

function PlayScreen() {
  const floorRatio = 0.092;
  const gap = 150;
  const availableHeight =
    document.documentElement.clientHeight * (1 - floorRatio);
  const totem_height = (availableHeight - gap) / 2;
  const birdLeft = document.documentElement.clientWidth * 0.05;
  const gravity = 1;
  const obstacleCount = 4;
  const totemGap = 750;

  const [gameStopped, setGameStopped] = useState(true);
  const [distance, setDistance] = useState(0);
  const [obstacles, setObstacles] = useState([
    { index: 2, pos: totemGap },
    { index: 1, pos: totemGap * 2 },
    { index: 3, pos: totemGap * 3 },
    { index: 4, pos: totemGap * 4 },
    { index: 0, pos: totemGap * 5 },
  ]);
  const [birdDead, setBirdDead] = useState(false);
  const [birdTop, setBirdTop] = useState(availableHeight * 0.5);
  const [velocity, setVelocity] = useState(0);
  const [angle, setAngle] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const score = Math.floor(distance / totemGap);

  const clicked = () => {
    if (birdTop > 58) {
      setVelocity(-10);
      setAngle(-30);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ' && !event.repeat) {
        event.preventDefault();

        clicked();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!gameStopped) {
      const always = setInterval(() => {
        setDistance((prevDistance) => prevDistance + 10);
        setVelocity((prevVelocity) => prevVelocity + gravity);
      }, 25);

      return () => {
        clearInterval(always);
      };
    }
  }, [gameStopped]);

  useEffect(() => {
    setBirdTop((prevBirdTop) => prevBirdTop + velocity);
    setAngle(Math.min(90, Math.max(-30, velocity * 3)));
  }, [velocity]);

  useEffect(() => {
    if (obstacles[0].pos < distance - 200) {
      var ob = obstacles;
      ob.shift();
      setObstacles(ob);
    }
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
      }
      setBirdDead(true);
    }
  }, [distance]);
  if (!birdDead) {
    return (
      <div
        className="background-stuff bg-scroll w-[100vw] h-[100vh] flex align-middle justify-center overflow-hidden"
        style={{ height: document.documentElement.clientHeight }}
        onClick={clicked}
      >
        <Bird
          birdDead={birdDead}
          birdLeft={birdLeft}
          birdTop={birdTop}
          birdAngle={angle}
        />
        {obstacles.length > 0 &&
          obstacles.map((item, index) => {
            return (
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
            );
          })}
        <ScoreBoard score={score} />
        {gameStopped && <CountDown count={3} setGameStopped={setGameStopped} />}
      </div>
    );
  } else {
    return <GameOver score={score} bestScore={bestScore} />;
  }
}

export default PlayScreen;
