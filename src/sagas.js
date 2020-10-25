import { all, take } from "redux-saga/effects";
import { playersSaga } from "./players/saga";

function* loginFlow() {
  while (true) {
    yield take("LOGIN");
    console.log("login");
    yield take("LOGOUT");
    console.log("logout");
  }
}

export function* rootSaga() {
  yield all([playersSaga(), loginFlow()]);
}
