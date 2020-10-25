import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { STATUS } from "../constants";

import Player from "./Player";

const Players = () => {
  const { data: players, status, error } = useSelector(
    (state) => state.players
  );
  const dispatch = useDispatch();

  const handleFetchPlayers = () => {
    dispatch({ type: "PLAYERS_FETCH_REQUESTED" });
  };

  return (
    <div>
      <button onClick={() => dispatch({ type: "LOGIN" })}>Войти</button>
      <button onClick={() => dispatch({ type: "LOGOUT" })}>Выйти</button>
      <button onClick={handleFetchPlayers}>Получить список игроков</button>
      {status === STATUS.failure && <div style={{ color: "red" }}>{error}</div>}
      {status === STATUS.success && (
        <ul>
          {players.map(({ account_id, name, avatarmedium, team_name }) => (
            <li key={account_id}>
              <Player name={name} avatar={avatarmedium} teamName={team_name} />
            </li>
          ))}
        </ul>
      )}
      {status === STATUS.pending && <div>Загрузка...</div>}
    </div>
  );
};

export default Players;
