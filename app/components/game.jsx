import React, { useState, useEffect, useRef } from "react";

const CELL_SIZE = 20;
const WIDTH = 300;
const HEIGHT = 300;

const getRandomFood = () => {
  return {
    x: Math.floor(Math.random() * (WIDTH / CELL_SIZE)) * CELL_SIZE,
    y: Math.floor(Math.random() * (HEIGHT / CELL_SIZE)) * CELL_SIZE,
  };
};

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 100, y: 100 }]);
  const [direction, setDirection] = useState("RIGHT");
  const [food, setFood] = useState(getRandomFood());
  const [score, setScore] = useState(0);
  const gameLoopRef = useRef();

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[newSnake.length - 1] };

    switch (direction) {
      case "UP": head.y -= CELL_SIZE; break;
      case "DOWN": head.y += CELL_SIZE; break;
      case "LEFT": head.x -= CELL_SIZE; break;
      case "RIGHT": head.x += CELL_SIZE; break;
    }

    newSnake.push(head);
    if (head.x === food.x && head.y === food.y) {
      setFood(getRandomFood());
      setScore(score + 1);
    } else {
      newSnake.shift();
    }

    if (
      head.x < 0 || head.y < 0 ||
      head.x >= WIDTH || head.y >= HEIGHT ||
      newSnake.slice(0, -1).some(seg => seg.x === head.x && seg.y === head.y)
    ) {
      alert("Game Over!");
      setSnake([{ x: 100, y: 100 }]);
      setDirection("RIGHT");
      setFood(getRandomFood());
      setScore(0);
      return;
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    gameLoopRef.current = setInterval(moveSnake, 200);
    return () => clearInterval(gameLoopRef.current);
  });

  const handleDirection = (dir) => {
    if (
      (dir === "UP" && direction !== "DOWN") ||
      (dir === "DOWN" && direction !== "UP") ||
      (dir === "LEFT" && direction !== "RIGHT") ||
      (dir === "RIGHT" && direction !== "LEFT")
    ) {
      setDirection(dir);
    }
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <div
        className="relative"
        style={{ width: WIDTH, height: HEIGHT, backgroundColor: "#111" }}
      >
        {snake.map((segment, idx) => (
          <div
            key={idx}
            className="absolute bg-green-500"
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              left: segment.x,
              top: segment.y,
            }}
          />
        ))}
        <div
          className="absolute bg-red-500"
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            left: food.x,
            top: food.y,
          }}
        />
      </div>
      <div className="mt-4 text-white text-lg">Score: {score}</div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <button className="bg-blue-500 p-4 rounded" onClick={() => handleDirection("UP")}>⬆️</button>
        <div></div>
        <button className="bg-blue-500 p-4 rounded" onClick={() => handleDirection("RIGHT")}>➡️</button>
        <button className="bg-blue-500 p-4 rounded" onClick={() => handleDirection("LEFT")}>⬅️</button>
        <div></div>
        <button className="bg-blue-500 p-4 rounded" onClick={() => handleDirection("DOWN")}>⬇️</button>
      </div>
    </div>
  );
};

export default SnakeGame;