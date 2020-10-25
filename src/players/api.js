import axios from "axios";

export function getPlayers() {
  return axios
    .get("https://api.opendota.com/api/proPlayers")
    .then((response) => ({
      response,
    }))
    .catch((error) => ({ error: error.response.data.error }));
}

export function getPlayer(accountId) {
  return axios.get(`https://api.opendota.com/api/players/${accountId}`);
}
