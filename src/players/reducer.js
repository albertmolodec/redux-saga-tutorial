import { STATUS } from "../constants";

const initialState = {
  status: STATUS.idle,
  data: [],
};

export function players(state = initialState, action) {
  switch (action.type) {
    case "PLAYERS_FETCH_FAILED":
      return { ...state, status: STATUS.failure, error: action.payload };
    case "PLAYERS_FETCH_REQUESTED":
      return {
        ...state,
        status: STATUS.pending,
      };
    case "PLAYERS_FETCH_SUCCEEDED":
      return {
        ...state,
        data: action.payload,
        status: STATUS.success,
      };
    default:
      return initialState;
  }
}
