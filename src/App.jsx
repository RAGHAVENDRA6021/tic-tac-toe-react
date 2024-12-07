import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { initialGameBoard } from "./constants";
import { WINNING_COMBINATIONS } from "./data/winning_combintions";
import Winner from "./components/Winner";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setWinner((prev) => {
      let ans = false;
      WINNING_COMBINATIONS.map((combination) => {
        const [a, b, c] = combination;
        const combination1 = gameBoard[a.row][a.column];
        const combination2 = gameBoard[b.row][b.column];
        const combination3 = gameBoard[c.row][c.column];
        console.log(gameBoard[a.row][b.column]);
        if (
          combination1 &&
          combination2 &&
          combination3 &&
          combination1 === combination2 &&
          combination1 === combination3
        ) {
          ans = true;
        }
      });

      return ans;
    });
  }, [gameBoard]);

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
      const playerBoardCopy = [...gameBoard.map((board) => [...board])];
      playerBoardCopy[x][y] = activePlayer;
      return playerBoardCopy;
    });
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  };

  const restartGame = () => {
    setGameBoard(() => initialGameBoard);
    setGameTurns(() => []);
    setActivePlayer("X");
  };

  const hasDraw = winner || gameTurns.length === 9;
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
        {(winner || hasDraw) && (
          <Winner winner={winner} onRestart={restartGame} />
        )}
        <Log gameTurns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
