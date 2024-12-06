import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { initialGameBoard } from "./constants";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const handleGameBoard = (x, y) => {
    setGameTurns((prevTurns) => {
      const updatedTurns = [
        {
          square: {
            row: x,
            column: y,
          },
          player: activePlayer,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });

    setGameBoard((prevGameBoard) => {
      const playerBoardCopy = [...gameBoard];
      playerBoardCopy[x][y] = activePlayer;
      return playerBoardCopy;
    });
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol={"X"}
            isActive={activePlayer === "X"}
          />
          <Player
            name="Player 2"
            symbol={"O"}
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard gameBoard={gameBoard} handleGameBoard={handleGameBoard} />
        <Log gameTurns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
