import React, { useState } from "react";
import "./App.css";

import Game from "./components/Game";

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

function App() {
  return <StarMatch />;
}

export default App;
