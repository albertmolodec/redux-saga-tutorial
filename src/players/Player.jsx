import React from "react";

const Player = ({ name, avatar, team_name }) => {
  return (
    <div>
      <div>Имя: {name}</div>
      <div>Команда: {team_name}</div>
      <img src={avatar} alt={name} />
    </div>
  );
};

export default Player;
