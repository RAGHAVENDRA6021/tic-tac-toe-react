import React from "react";

const Winner = ({ winner,onRestart }) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner ? <p>{winner} has won</p> : <p>It's a Draw</p>}
      <button onClick={onRestart}>Rematch</button>
    </div>
  );
};

export default Winner;
