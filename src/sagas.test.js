import { call, put } from "redux-saga/effects";
import { incrementAsyncWorker, delay } from "./sagas";

test("incrementAsync saga test", () => {
  const gen = incrementAsyncWorker();
  expect(gen.next().value).toEqual(call(delay, 500));
  expect(gen.next().value).toEqual(put({ type: "INCREMENT" }));
  expect(gen.next().done).toBeTruthy();
});
