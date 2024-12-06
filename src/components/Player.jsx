import React, { useState } from "react";

const Player = ({ name, symbol, isActive }) => {
  const [edit, setEdit] = useState(false);
  const [editName, setEditPlayer] = useState(name);
  const editHandler = () => setEdit(!edit);
  const onEdit = (e) => {
    setEditPlayer(e.target.value);
  };

  const playerName = edit ? (
    <input type="text" value={editName} onChange={onEdit} required />
  ) : (
    <span className="player-name">{editName}</span>
  );

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{edit ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;