import "./App.css";
import styled from "styled-components";
import StartScreen from "./components/StartScreen";
import { useState } from "react";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div>
      {isGameStarted ? <GamePlay /> : <StartScreen toggle={toggleGamePlay} />}
    </div>
  );
}

export default App;
