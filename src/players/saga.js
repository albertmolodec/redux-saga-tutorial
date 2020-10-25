import { put, all, call, takeLatest } from "redux-saga/effects";

import { getPlayers } from "./api";

function* fetchPlayers() {
  const { response, error } = yield call(getPlayers);
  if (response) {
    yield put({ type: "PLAYERS_FETCH_SUCCEEDED", payload: response.data });
  } else {
    yield put({ type: "PLAYERS_FETCH_FAILED", payload: error });
  }
}

function* watchFetchPlayers() {
  yield takeLatest("PLAYERS_FETCH_REQUESTED", fetchPlayers);
}

export function* playersSaga() {
  yield all([watchFetchPlayers()]);
}
